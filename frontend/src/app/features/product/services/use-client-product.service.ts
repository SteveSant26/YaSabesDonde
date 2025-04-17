import { inject, Injectable } from '@angular/core';
import { Product, ProductResponse } from '../models';
import { GlobalClientGetService } from '@shared/services';
import { productAdapter, productResponseAdapter } from '../adapters';

@Injectable({
  providedIn: 'root'
})
export class UseClientProductService {
  private url = "/api/products"
  private globalClientGetService = inject(GlobalClientGetService);
  getProducts() {
    return this.globalClientGetService.getDataClient<ProductResponse>(`${this.url}`, productResponseAdapter);
  }

  getProduct(documentId: string) {
    return this.globalClientGetService.getDataClient<Product>(`${this.url}/${documentId}`, productAdapter);
  }
}
