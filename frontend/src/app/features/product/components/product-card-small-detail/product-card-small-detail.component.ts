import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { ShoppingCartService } from '@features/orders/services/shopping-cart.service';
import { Product } from '@features/product/models';
import { AddRemoveFormComponent } from "./add-remove-form/add-remove-form.component";

@Component({
  selector: 'app-product-card-small-detail',
  imports: [CommonModule, AddRemoveFormComponent],
  templateUrl: './product-card-small-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardSmallDetailComponent {
  product = input.required<Product>()

  get totalPrice() {
    return (this.product().price ?? 0) * (this.product().quantity ?? 0)
  }


}
