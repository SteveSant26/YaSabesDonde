import { ChangeDetectionStrategy, Component, inject, input, OnInit, signal, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { UseClientMenuService } from '../../services';
import { CardProductsComponent } from "../../../product/components";
import { MenuResponse } from '../../models';

@Component({
  selector: 'app-content-menu',
  imports: [CardProductsComponent],
  templateUrl: './content-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentMenuComponent implements OnInit {
  branchId = input<number>();
  private useClientMenu = inject(UseClientMenuService);
  protected menu = signal<MenuResponse | undefined>(undefined);
  ngOnInit() {
    this.useClientMenu.getMenuByBranch(this.branchId() as number).subscribe({
      next: (menu: MenuResponse) => {
        this.menu.set(menu);
      }
    });
  }
}
