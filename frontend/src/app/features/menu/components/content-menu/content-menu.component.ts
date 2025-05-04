import { ChangeDetectionStrategy, Component, computed, inject, input, OnInit, signal } from '@angular/core';
import { UseClientMenuService } from '../../services';
import { CardProductsComponent } from "../../../product/components";
import { MenuResponse } from '../../models';
import { separateProductsByCategory } from '@features/category-products/utils';
import { ShowNameCategoryComponent } from "../../../category-products/components/show-name-category/show-name-category.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-content-menu',
  imports: [ShowNameCategoryComponent, CardProductsComponent],
  templateUrl: './content-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentMenuComponent implements OnInit {
  branchId = input<number>();
  private useClientMenu = inject(UseClientMenuService);
  protected menu = signal<MenuResponse | undefined>(undefined);
  protected categories = computed(() => separateProductsByCategory(this.menu()?.data[0]?.products));
  ngOnInit() {
    this.useClientMenu.getMenuByBranch(this.branchId() as number).subscribe({
      next: (menu: MenuResponse) => {
        this.menu.set(menu);
        console.log("menu", this.categories());
      }
    });
  }
}
