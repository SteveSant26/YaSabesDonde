import { ChangeDetectionStrategy, Component, input, OnInit } from '@angular/core';
import { Product } from '../../models';
import { RouterLink } from '@angular/router';
import { productRoutesConfig } from '@features/product/config';

@Component({
  selector: 'app-card-products',
  imports: [RouterLink],
  templateUrl: './card-products.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardProductsComponent  {
  product = input<Product>();
  protected productRouteConfig = productRoutesConfig;
}
