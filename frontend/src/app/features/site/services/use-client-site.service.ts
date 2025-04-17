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
    return this.globalClientGetService.getDataClient<Home>(`${this.url}/home`, homeAdapter);
  }

  getAboutUs() {
    return this.globalClientGetService.getDataClient<AboutUs>(`${this.url}/about-us`, aboutUsAdapter);
  }
}
