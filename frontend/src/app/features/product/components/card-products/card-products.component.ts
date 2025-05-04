import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { Product } from '../../models';
import { RouterLink } from '@angular/router';
import { productRoutesConfig } from '@features/product/config';
import { MatIconModule } from '@angular/material/icon';
import { ShoppingCartService } from '@features/orders/services/shopping-cart.service';
import { CommonModule } from '@angular/common';
import { ShoppingCartSlideComponent } from "../../../orders/components/shopping-cart-slide/shopping-cart-slide.component";
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-card-products',
  imports: [RouterLink, MatIconModule, CommonModule],
  templateUrl: './card-products.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardProductsComponent {
  product = input.required<Product>();
  protected productRouteConfig = productRoutesConfig;
  shoppingCartService = inject(ShoppingCartService)
  private dialog = inject(MatDialog)


  addToCart(event: Event, product: Product) {
    event.stopPropagation();
    event.preventDefault();
    this.shoppingCartService.addItem(product)
    this.openDialog()
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ShoppingCartSlideComponent)

    dialogRef.afterClosed().subscribe();
  }
}
