import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Branch } from '@features/branch/models';

@Component({
  selector: 'app-card-brach',
  imports: [],
  templateUrl: './card-brach.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardBrachComponent {
  branch = input<Branch>();
}
