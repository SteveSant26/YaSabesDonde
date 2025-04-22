import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Branch } from '@features/branch/models';
import { UseManagerLocationService } from '@features/profile/services';

@Component({
  selector: 'app-card-brach',
  imports: [RouterLink],
  templateUrl: './card-brach.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardBrachComponent {
  branch = input<Branch>();
  private useManagerLocationService = inject(UseManagerLocationService);

  setLocation(branch: Branch) {
    this.useManagerLocationService.setLocation(branch);
  }
}
