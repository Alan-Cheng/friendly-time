import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';

import { GeolocationService } from 'src/app/services/geolocation.service';
import { SevenElevenRequestService } from './services/seven-eleven-request.service';
import { FamilyMartRequestService } from './services/family-mart-request.service';
import { LoadingService } from '../../services/loading.service'

import { FoodCategory, LocationData, StoreStockItem, Store, Location, CategoryStockItem } from '../model/seven-eleven.model'
import { fStore, StoreModel, ProductCategoryModel } from '../model/family-mart.model';

import { environment } from 'src/environments/environment';

import { switchMap, from, of, catchError, Observable, tap, forkJoin } from 'rxjs';

@Component({
  selector: 'app-new-search',
  templateUrl: './new-search.component.html',
  styleUrls: ['./new-search.component.scss'],
})
export class NewSearchComponent implements OnInit {
  searchForm: FormGroup; // 表單
  searchTerm: string = '';
  selectedStoreName='';

  storeFilter: string = 'all';

  dropDown711List: Store[] = [];
  dropDownFamilyMartList: fStore[] = [];
  unifiedDropDownList: any[] = [];


  sevenElevenIconUrl = environment.sevenElevenUrl.icon;
  familyMartIconUrl = environment.familyMartUrl.icon;

  zipcodes: any[] = []; // 原始 API 資料
  cities: string[] = []; // 縣市清單
  filteredDistricts: any[] = []; // 篩選後的行政區列表
  zipcodeList: string[] = [];

  selectedCity: string | null = null; // 選擇的縣市
  selectedDistrict: string | null = null; // 選擇的行政區
  selectedZipcode: string | null = null; // 對應的郵遞區號

  latitude!: number;
  longitude!: number;

  foodCategories: FoodCategory[] = [];

  nearby711Stores: StoreStockItem[] = []; // 儲存用現在位置找到的711
  nearbyFamilyMartStores: StoreModel[] = []; // 儲存用現在位置找到的全家
  totalStoresShowList: any[] = []; //為了方便顯示所以統一
  filteredStoresList: any[] = [];  // 用來儲存篩選後的商店列表

  selectedStore?: any;
  selectedCategory?: any;

  constructor(
    private http: HttpClient,
    private geolocationService: GeolocationService,
    private sevenElevenService: SevenElevenRequestService,
    private familyMartService: FamilyMartRequestService,
    public loadingService: LoadingService,
  ) {
    this.searchForm = new FormGroup({
      selectedStoreName: new FormControl(''), // 控制選中的商店
    });
  }

  ngOnInit(): void {
    this.init();
  }

  getCityName(): Observable<any[]> {
    const apiUrl = 'https://demeter.5fpro.com/tw/zipcodes.json'; // API URL
    return this.http.get<any[]>(apiUrl).pipe(
      tap((data) => {
        this.zipcodes = data;
        this.cities = [...new Set(data.map((item) => item.city_name))];
        this.zipcodeList = [...new Set(data.map((item) => item.zipcode))];
      })
    );
  }

  // 當縣市選擇改變時
  onCityChange(city: string): void {
    // 根據選擇的縣市篩選行政區
    this.filteredDistricts = this.zipcodes.filter((item) => item.city_name === city);
    this.selectedDistrict = null; // 清空選中的行政區
    this.selectedZipcode = null; // 清空郵遞區號
  }

  // 當行政區選擇改變時
  onDistrictChange(zipcode: string): void {
    // 更新選擇的郵遞區號
    this.selectedZipcode = zipcode;
  }

  handleError(error: GeolocationPositionError): string {
    switch (error.code) {
      case 1:
        return '使用者拒絕位置存取';
      case 2:
        return '無法取得位置資訊';
      case 3:
        return '位置請求逾時';
      default:
        return '未知錯誤';
    }
  }

  init() {
    // // 使用 from 將 Promise 轉換為 Observable
    // this.getCityName();

    this.loadingService.show();  // 显示加载动画

    //取得所有全家商店名稱資訊
    this.getFamilyMartAllStore();

    of(true).pipe(
      switchMap(() => {
        return this.sevenElevenService.getAccessToken();
      }),
      switchMap((token: any) => {
        if (token && token.element) {
          sessionStorage.setItem('711Token', token.element);
          console.log('Stored 711Token:', sessionStorage.getItem('711Token'));
          // 如果 token 儲存成功，發送 getFoodCategory 請求
          return this.sevenElevenService.getFoodCategory();
        } else {
          // 如果 token 沒有成功返回，返回空陣列
          return of([]);
        }
      }),
      catchError((error) => {
        // 錯誤處理邏輯
        console.error('Error:', error);
        return of([]); // 在出錯時返回空陣列，防止應用崩潰
      })
    ).subscribe(
      (res) => {
        if (res && res.element) {
          this.foodCategories = res.element;
          console.log('Food Categories:', this.foodCategories);
          this.loadingService.hide();
        } else {
          console.error('Failed to fetch food categories');
          this.loadingService.hide();
        }
      }
    );
  }

  getFamilyMartAllStore() {
    this.familyMartService.getStores().subscribe((data) => {
      if(data.length > 0) {
        this.dropDownFamilyMartList = data;
      }
    })
  }

  getFoodSubCategoryImage(nodeID: number): string | null {
    // 查找匹配的子分類
    for (let category of this.foodCategories) {
      const subCategory = category.Children.find(child => child.ID === nodeID);
      if (subCategory) {
        // 找到對應的子分類並返回其對應的分類圖片 URL
        return category.ImageUrl;
      }
    }
    // 如果沒有找到對應的子分類，返回 null
    return null;
  }

  getSubCategoryTotalQty(store: any, category: any): number {
    let totalQty = 0;

    // 遍歷商店中的所有商品，檢查是否屬於當前分類及子分類
    for (const stockItem of store.CategoryStockItems) {
      // 遍歷每個分類的子項目，檢查是否屬於這個 category
      for (const child of category.Children) {
        if (stockItem.NodeID === child.ID) {
          totalQty += stockItem.RemainingQty;
        }
      }
    }

    return totalQty;
  }

  // 當用戶點擊某個分類時，切換選中的分類與店鋪
  toggleSubCategoryDetails(store: any, category: any): void {
    this.selectedCategory = category;
    this.selectedStore = store;
  }

  onSearchStore(event: Event): void {
    const input = (event.target as HTMLInputElement).value;  // 確保這裡的值是有效的
    console.log('輸入的值:', input);  // 確認輸入的值是否正確

    if (input.length >= 2) {
      // 假設這是你的API調用邏輯
      this.sevenElevenService.getStoreByAddress(input).subscribe(
        (data) => {
          if (data && data.isSuccess) {
            this.dropDown711List = data.element;

            // 刪掉全家兩個字以免使用者誤搜，篩選 unifiedDropDownList，篩選條件是 Name 和 addr 都包含 input
            const filteredDropDownFamilyMartList = this.dropDownFamilyMartList
              .map(item => ({
                ...item,
                Name: item.Name.replace('全家', '')  // 去除 "全家" 字串
              }))
              .filter(item =>
                item.Name.includes(input) || item.addr.includes(input)
              );

            // 統一兩個列表的名稱欄位
            const normalizedFamilyMartList = filteredDropDownFamilyMartList.map(item => ({
              name: item.Name,  // 統一名稱欄位
              addr: item.addr,
              label: '全家',
            }));

            const normalized711List = this.dropDown711List.map(item => ({
              name: item.StoreName,  // 統一名稱欄位
              addr: item.Address,
              label: '7-11',
            }));

            normalized711List.forEach(item => {
              if (!this.unifiedDropDownList.some(existingItem => existingItem.name === item.name && existingItem.addr === item.addr)) {
                this.unifiedDropDownList.push(item);  // 同樣的檢查，防止重複
              }
            });

            normalizedFamilyMartList.forEach(item => {
              if (!this.unifiedDropDownList.some(existingItem => existingItem.name === item.name && existingItem.addr === item.addr)) {
                this.unifiedDropDownList.push(item);  // 只有當 unifedDropDownList 中沒有該元素時才添加
              }
            });
          }
        },
        (error) => {
          console.error('API 請求錯誤:', error);
        }
      );
    } else {
      this.unifiedDropDownList = [];
    }
  }

  onSubmit(): void {
    console.log('提交的搜索內容:', this.searchTerm);
  }

  onUseCurrentLocation(): void {
    this.loadingService.show()
    from(this.geolocationService.getCurrentPosition())
      .pipe(
        switchMap((position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          console.log('Latitude:', lat, 'Longitude:', lng);
  
          this.latitude = lat;
          this.longitude = lng;
  
          console.log('已取得位置');

          return of([]);
        }),
        switchMap((res) => {
          if(res) {
            return this.sevenElevenService.getAccessToken();
          }
          else{
            return [];
          }
        }),
        switchMap((token: any) => {
          if (token && token.element) {
            sessionStorage.setItem('711Token', token.element);
            console.log('Stored 711Token:', sessionStorage.getItem('711Token'));
            // 如果 token 儲存成功，發送 getFoodCategory 請求
            return this.sevenElevenService.getFoodCategory();
          } else {
            // 如果 token 沒有成功返回，返回空陣列
            return of([]);
          }
        })
      ).subscribe(
        (res) => {
          if (res) {
            this.combineAndTransformStores();
            this.loadingService.hide();
          } else {
            console.error('Failed to fetch food categories');
            this.loadingService.hide();
          }
        }
      );
  }

  transformFStyleTo711(): void {
    // 清空統一列表，避免重複累加
    this.totalStoresShowList = [];
    
    // 處理 7-11 商店
    this.nearby711Stores.forEach((store) => {
      const transformedStore = {
        ...store,
        label: '7-11',
        distance: store.Distance // 統一使用 `distance` 字段
      };
      this.totalStoresShowList.push(transformedStore); // 推入統一列表
    });
    
    // 處理全家商店
    this.nearbyFamilyMartStores.forEach((store) => {
      const transformedStore = {
        ...store,
        label: '全家', // 加上來源標籤
        distance: store.distance // 統一使用 `distance` 字段
      };
      this.totalStoresShowList.push(transformedStore); // 推入統一列表
    });
  
    // 根據距離排序
    this.totalStoresShowList.sort((a, b) => a.distance - b.distance);
  
    console.log('totalStoresShowList', this.totalStoresShowList);
  }

  combineAndTransformStores(): void {
    const locationData711: LocationData = {
      CurrentLocation: {
        Latitude: this.latitude,
        Longitude: this.longitude
      },
      SearchLocation: {
        Latitude: this.latitude,
        Longitude: this.longitude
      }
    };
  
    const locationFamilyMart: Location = {
      Latitude: this.latitude,
      Longitude: this.longitude
    };
  
    // 結合兩個 API 請求
    forkJoin({
      sevenEleven: this.sevenElevenService.getNearByStoreList(locationData711),
      familyMart: this.familyMartService.getNearByStoreList(locationFamilyMart)
    }).subscribe(
      ({ sevenEleven, familyMart }) => {
        // 處理 7-11 資料
        if (sevenEleven && sevenEleven.element && sevenEleven.element.StoreStockItemList) {
          this.nearby711Stores = sevenEleven.element.StoreStockItemList.sort(
            (a: StoreStockItem, b: StoreStockItem) => a.Distance - b.Distance
          );
        }
  
        // 處理全家資料
        if (familyMart && familyMart.code === 1) {
          this.nearbyFamilyMartStores = familyMart.data.sort(
            (a: StoreModel, b: StoreModel) => a.distance - b.distance
          );
        }
  
        // 等兩者完成後合併資料
        this.transformFStyleTo711();
      },
      (error) => {
        console.error('Error fetching store data:', error);
      }
    );
  }

  getFStoreQty(store: StoreModel): number {
    var totalQty: number = 0;
    store.info.forEach((cat) => {
      totalQty += cat.qty;
    })
    return totalQty;
  }

  getFUrl(cat: any): string {
    return cat.iconURL;
  }

  getFCatName(cat: any): string {
    return cat.name;
  }

  getFSubCategoryQty(store: StoreModel, cat: any): number {
    return cat.qty;
  }
}
