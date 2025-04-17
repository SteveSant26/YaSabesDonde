import { inject, Injectable } from '@angular/core';
import { GlobalClientGetService } from '@shared/services';
import { CategoryProducts, CategoryProductsResponse } from '../models';
import { categoryProductsAdapter, categoryProductsAdapterArray } from '../adapters';
import { createPopulate } from '@shared/utils/img-url';

@Injectable({
  providedIn: 'root'
})
export class UseClientCategoryProductsService {
  private url = "/api/categories"
  private globalClientGetService = inject(GlobalClientGetService);
  getCategoryProducts() {
    console.log("this.url", this.url);
    return this.globalClientGetService.getDataClient<CategoryProductsResponse>(`${this.url}?${createPopulate(['image'])}`, categoryProductsAdapterArray);
  }

  getCaregoryProductsById(docurmentId: number) {
    return this.globalClientGetService.getDataClient<CategoryProducts>(`${this.url}/${docurmentId}?${createPopulate(['image'])}`, categoryProductsAdapter); 
  }
}
