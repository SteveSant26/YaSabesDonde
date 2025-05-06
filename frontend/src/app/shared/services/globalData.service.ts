import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '@environment/environment.development';
import { GlobalData } from '@shared/types/globalData.type';
import { GlobalDataAdapter } from '@shared/adapters';
import { createPopulate } from '@shared/utils/img-url';
import { GlobalClientGetService } from './global-client-get.service';


interface ManyData<T> {
  url: string;
  adapter: (data: any) => T;
}

@Injectable({
  providedIn: 'root',
})
export class GlobalDataService {
  private globalClientGetService = inject(GlobalClientGetService)

  getGlobalData(): Observable<GlobalData> {
    const url =  "/api/global"
    return this.globalClientGetService.getDataClient<GlobalData>(`${url}?${createPopulate(
      ["favicon", "logoSite"])}`,GlobalDataAdapter)
  }
}
