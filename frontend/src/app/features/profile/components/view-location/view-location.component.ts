import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UseManagerLocationService } from '@features/profile/services';

@Component({
  selector: 'app-view-location',
  imports: [],
  templateUrl: './view-location.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewLocationComponent {
  private useManagerLocationService = inject(UseManagerLocationService);
  location = this.useManagerLocationService.location;
}
