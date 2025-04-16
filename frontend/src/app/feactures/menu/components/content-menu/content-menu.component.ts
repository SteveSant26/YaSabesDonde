import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-content-menu',
  imports: [],
  templateUrl: './content-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentMenuComponent {
  branchDocuemntId = input<string>();
  
}
