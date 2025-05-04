import { inject, Injectable } from '@angular/core';
import { Product, ProductResponse } from '../models';
import { GlobalClientGetService } from '@shared/services';
import { productAdapter, productResponseAdapter } from '../adapters';
import { createPopulate } from '@shared/utils/img-url';
import { createPagination } from '@shared/utils/img-url/create-pagination.util';
import { ApiResponse } from '@shared/types';

@Injectable({
  providedIn: 'root',
})
export class UseClientProductService {
  private url = '/api/products';
  private globalClientGetService = inject(GlobalClientGetService);
  getProducts() {
    return this.globalClientGetService.getDataClient<ApiResponse<Product[]>>(
      `${this.url}?${createPopulate(['images'])}`,
      productResponseAdapter
    );
  }

  getProductByDocumentId(documentId: string) {
    return this.globalClientGetService.getDataClient<Product>(
      `${this.url}/${documentId}?${createPopulate(['images'])}`,
      productAdapter
    );
  }

  getFavoriteProducts() {
    return this.globalClientGetService.getDataClient<ApiResponse<Product[]>>(
      `${this.url}?${createPagination({
        pageSize: 12,
        page: 1,
      })}&${createPopulate(['images'])}`,
      productResponseAdapter
    );
  }
}
