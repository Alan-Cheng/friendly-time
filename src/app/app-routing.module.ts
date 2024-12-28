import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewSearchComponent } from './search-food/new-search/new-search.component';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },  // 默认重定向到 /search
  { path: 'search', component: NewSearchComponent },  // 导航到 NewSearchComponent
  { path: '**', redirectTo: '/search' },  // 所有其他路径都重定向到 /search
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
