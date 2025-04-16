import { inject, Injectable } from '@angular/core';
import { GlobalClientGetService } from '@shared/services';
import { Menu } from '../models/menu.model';
import { menuAdapter } from '../adapters';
import { createFilterAttributes } from '@shared/utils/magene-url';

@Injectable({
  providedIn: 'root'
})
export class UseClientMenuService {
  private url = "/api/menus"
  private globalClientGetService = inject(GlobalClientGetService);

  getMenus(branchId: number) {
    return this.globalClientGetService.getDataClient<Menu>(`${this.url}/${branchId}?${createFilterAttributes([
      {
        key: "branch",
        value: JSON.stringify(branchId)
      }
    ])}`, menuAdapter);
  }
}
