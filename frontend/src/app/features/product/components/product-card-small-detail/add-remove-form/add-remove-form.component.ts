import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ShoppingCartService } from '@features/orders/services/shopping-cart.service';
import { Product } from '@features/product/models';

@Component({
  selector: 'app-add-remove-form',
  imports: [CommonModule, MatIconModule, FormsModule],
  templateUrl: './add-remove-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddRemoveFormComponent {

  product = input.required<Product>()
  shoppingCartService = inject(ShoppingCartService)

}
