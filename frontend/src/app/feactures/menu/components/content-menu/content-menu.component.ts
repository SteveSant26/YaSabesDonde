import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { UseClientMenuService } from '../../services';
import { CardProductsComponent } from "../../../product/components";

@Component({
  selector: 'app-content-menu',
  imports: [CardProductsComponent],
  templateUrl: './content-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentMenuComponent {
  branchId = input<number>();
  private useClientMenu = inject(UseClientMenuService);
  protected menu = toSignal(this.useClientMenu.getMenus(this.branchId() as number));
}
