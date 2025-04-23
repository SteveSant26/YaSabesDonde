import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '@environment/environment.development';
import { GlobalData } from '@shared/types/globalData.type';
import { GlobalDataAdapter } from '@shared/adapters';
import { createPopulate } from '@shared/utils/img-url';


interface ManyData<T> {
  url: string;
  adapter: (data: any) => T;
}

@Injectable({
  providedIn: 'root',
})
export class GlobalDataService {
  private baseUrl = environment.baseApiUrl;
  private http = inject(HttpClient);

  getGlobalData(): Observable<GlobalData> {
    return this.http
      // .get<GlobalData>(`${this.baseUrl}/api/global?populate=iconSite,logoSite`)
      .get<GlobalData>(`${this.baseUrl}/api/global`)
      .pipe(map((data) => { console.log(data); return GlobalDataAdapter(data) }));
  }



  getManyData<T>(data: ManyData<T>): Observable<T> {
    return this.http
      .get<T>(`${this.baseUrl}${data.url}`)
      .pipe(map((respoinse) => data.adapter(respoinse)));
  }
}
