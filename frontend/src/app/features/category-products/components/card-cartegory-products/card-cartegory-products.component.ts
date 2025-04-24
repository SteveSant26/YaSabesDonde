import { ChangeDetectionStrategy, Component, input, OnInit } from '@angular/core';
import { CategoryProducts } from '../../models';

@Component({
  selector: 'app-card-cartegory-products',
  imports: [],
  templateUrl: './card-cartegory-products.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardCartegoryProductsComponent implements OnInit {
  categoryProducts = input.required<CategoryProducts>();
  ngOnInit(): void {
  }
}
