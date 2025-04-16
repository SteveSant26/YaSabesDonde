import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CategoryProducts } from '../../models';

@Component({
  selector: 'app-card-cartegory-products',
  imports: [],
  templateUrl: './card-cartegory-products.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardCartegoryProductsComponent {
  categoryProducts = input.required<CategoryProducts>();
}
