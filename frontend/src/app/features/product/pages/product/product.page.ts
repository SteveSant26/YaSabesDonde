import { Component, inject, input, OnInit, signal } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatIcon } from "@angular/material/icon";
import { ShoppingCartSlideComponent } from "@features/orders/components/shopping-cart-slide/shopping-cart-slide.component";
import { ShoppingCartService } from "@features/orders/services/shopping-cart.service";
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
  shoppingCartService = inject(ShoppingCartService)

  private dialog = inject(MatDialog)



  ngOnInit(): void {
    this.useClientProduct.getProductByDocumentId(this.documentId() || '-1').subscribe({
      next: (product: Product) => {
        this.product.set(product);
      }
    });
  }

  addToCart(product: Product) {
    this.shoppingCartService.addItem(product)
    console.log(product)
    this.openDialog()
  }

    openDialog(): void {
      const dialogRef = this.dialog.open(ShoppingCartSlideComponent)
  
      dialogRef.afterClosed().subscribe();
    }
}