import { inject, Injectable } from '@angular/core';
import { Product, ProductResponse } from '../models';
import { GlobalClientGetService } from '@shared/services';
import { productAdapter, productResponseAdapter } from '../adapters';
import { createPopulate } from '@shared/utils/img-url';
import { createPagination } from '@shared/utils/img-url/create-pagination.util';

@Injectable({
  providedIn: 'root'
})
export class UseClientProductService {
  private url = "/api/products"
  private globalClientGetService = inject(GlobalClientGetService);
  getProducts() {
    return this.globalClientGetService.getDataClient<ProductResponse>(`${this.url}?${createPopulate(['images'])}`, productResponseAdapter);
  }

  getProduct(documentId: string) {
    return this.globalClientGetService.getDataClient<Product>(`${this.url}/${documentId}`, productAdapter);
  }

  getFavoriteProducts() {
    console.log("this.url", this.url);
    return this.globalClientGetService.getDataClient<ProductResponse>(`${this.url}?${createPagination({
      pageSize: 12,
      page: 1
    })}&${createPopulate(['images'])}`, productResponseAdapter);
  }
}
