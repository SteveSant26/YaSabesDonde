import { inject, Injectable } from '@angular/core';
import { GlobalClientGetService } from '@shared/services';

@Injectable({
  providedIn: 'root'
})
export class UseClientMenuService {
  private url = "/api/menus"
  private globalClientGetService = inject(GlobalClientGetService);

  getMenus(branchDocuemntId: string) {
    return this.globalClientGetService.get(this.url + "/" + branchDocuemntId);
  }
}
