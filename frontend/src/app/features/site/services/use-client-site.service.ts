import { inject, Injectable } from '@angular/core';
import { GlobalClientGetService } from '@shared/services';
import { AboutUs, Home } from '../models';
import { aboutUsAdapter, homeAdapter } from '../adapters';

@Injectable({
  providedIn: 'root'
})
export class UseClientSiteService {
  private url = "/api"
  private globalClientGetService = inject(GlobalClientGetService);

  getHome() {
    const url = `${this.url}/home`;
    return this.globalClientGetService.getDataClient<Home>(`${url}?populate[hero][populate]=*`, homeAdapter);
  }

  getAboutUs() {
    const url = `${this.url}/about-us`;
    return this.globalClientGetService.getDataClient<AboutUs>(`${url}?populate[hero][populate]=*`, aboutUsAdapter);
  }
}
