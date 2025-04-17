import { ChangeDetectionStrategy, Component, input, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Product } from '@features/product/models';

@Component({
  selector: 'app-gallary-image-product-card',
  imports: [MatIcon],
  templateUrl: './gallary-image-product-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GallaryImageProductCardComponent {
  product = input<Product>();

}
