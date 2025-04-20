import { Component, inject, input, OnInit, signal } from "@angular/core";
import { toObservable, toSignal } from "@angular/core/rxjs-interop";
import { MatIcon } from "@angular/material/icon";
import { Product } from "@features/product/models";
import { UseClientProductService } from "@features/product/services";
@Component({
  selector: 'app-product',
  imports: [MatIcon],
  templateUrl: './product.page.html',
})
export class ProductPage implements OnInit {
  documentId = input<string>();
  private useClientProduct = inject(UseClientProductService);
  protected product = signal<Product | undefined>(undefined);
  ngOnInit(): void {
    this.useClientProduct.getProduct(this.documentId() || '-1').subscribe({
      next: (product: Product) => {
        this.product.set(product);
      }
    });
  }
}