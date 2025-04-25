import { inject, Injectable } from '@angular/core';
import { GlobalClientGetService } from '@shared/services';
import { CategoryProduct, CategoryProductsResponse } from '../models';
import { categoryProductAdapter, categoryProductsAdapterArray } from '../adapters';
import { createPopulate } from '@shared/utils/img-url';

@Injectable({
  providedIn: 'root'
})
export class UseClientCategoryProductsService {
  private url = "/api/categories"
  private globalClientGetService = inject(GlobalClientGetService);
  getCategoryProducts() {
    return this.globalClientGetService.getDataClient<CategoryProductsResponse>(`${this.url}?${createPopulate(['image'])}`, categoryProductsAdapterArray);
  }

  getCaregoryProductsById(docurmentId: number) {
    return this.globalClientGetService.getDataClient<CategoryProduct>(`${this.url}/${docurmentId}?${createPopulate(['image'])}`, categoryProductAdapter); 
  }
}
