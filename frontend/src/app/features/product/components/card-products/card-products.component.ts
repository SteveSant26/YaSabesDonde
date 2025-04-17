import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Product } from '../../models';

@Component({
  selector: 'app-card-products',
  imports: [],
  templateUrl: './card-products.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardProductsComponent {
  product = input<Product>();

}
