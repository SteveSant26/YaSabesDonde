import { inject, Injectable } from '@angular/core';
import { GlobalClientGetService } from '@shared/services';
import { AboutUs, Home } from '../models';
import { aboutUsAdapter, homeAdapter } from '../adapters';
import { createPopulate } from '@shared/utils/img-url';

@Injectable({
  providedIn: 'root'
})
export class UseClientSiteService {
  private url = "/api"
  private globalClientGetService = inject(GlobalClientGetService);

  getHome() {
    const url = `${this.url}/home?populate[hero][populate]=*&${createPopulate('video')}`;
    return this.globalClientGetService.getDataClient<Home>(`${url}`, homeAdapter);
  }

  getAboutUs() {
    const url = `${this.url}/about-us`;
    return this.globalClientGetService.getDataClient<AboutUs>(`${url}?populate[hero][populate]=*`, aboutUsAdapter);
  }
}
