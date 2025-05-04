import { inject, Injectable } from '@angular/core';
import { GlobalClientGetService } from '@shared/services';
import { Menu, MenuResponse } from '../models/menu.model';
import { menuAdapter, menuResponseAdapter } from '../adapters';
import { createFilterId, createPopulate } from '@shared/utils/img-url';

@Injectable({
  providedIn: 'root'
})
export class UseClientMenuService {
  private url = "/api/menus"
  private globalClientGetService = inject(GlobalClientGetService);

  getMenu(documentId: string) {
    return this.globalClientGetService.getDataClient<Menu>(`${this.url}/${documentId}`, menuAdapter);
  }

  getMenuByBranch(branchId: number) {
    return this.globalClientGetService.getDataClient<MenuResponse>(`${this.url}?${createFilterId(
      { id: branchId, name: "branch" }
    )}&${createPopulate(['products'])}&populate[products][populate]=category&populate[products][populate]=images`, menuResponseAdapter);
  }
}
