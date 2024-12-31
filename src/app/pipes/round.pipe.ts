import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'round'
})
export class RoundPipe implements PipeTransform {

  transform(value: any, precision: number = 0): any {
    // 嘗試將輸入轉換為數字
    const numericValue = parseFloat(value);
  
    // 檢查是否是有效的數字
    if (isNaN(numericValue)) {
      return value; // 如果不是有效的數字，返回原始輸入
    }

    if(precision === -1){
      // -1代表是顯示打折後的價格
      return `${numericValue.toFixed(0)} 元`;
    }
  
    // 判斷數值是否小於 1000
    if (numericValue < 1000) {
      return `${numericValue.toFixed(precision)} 公尺`; // 返回數字加 ' 公尺'
    } else {
      const kilometers = numericValue / 1000; // 將數字轉換為公里
      return `${kilometers.toFixed(precision)} 公里`; // 返回數字加 ' 公里'
    }
  }  
}
