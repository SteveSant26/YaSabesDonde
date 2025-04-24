import { inject, Injectable, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { throwError } from 'rxjs';
import { GlobalDataService } from './globalData.service';
import { GlobalData } from '@shared/types/globalData.type';

@Injectable({
  providedIn: 'root',
})
export class AppInformationService {
  private globalDataService = inject(GlobalDataService);
  private titleService = inject(Title);
  private metaService = inject(Meta);

  appInformation = signal<GlobalData | null>(null);

  constructor() {
    this.loadGlobalData();
  }


  private loadGlobalData(): void {
    this.globalDataService.getGlobalData().subscribe({
      next: (globalData) => {
        this.appInformation.set(globalData);
      },
      error: (error) => {
        console.error('Error loading global data', error);
        return throwError(() => new Error(error.error.error.message || 'Couldt load app info'))
      },
    });
  }

  setTitle(newTitle?: string): void {
    const currentTitle = this.appInformation()?.siteName || 'Default Site Title';
    const title = newTitle ? `${currentTitle} | ${newTitle}` : currentTitle;
    this.titleService.setTitle(title);
  }
  getTittle(): string {
    return this.appInformation()?.siteName || 'Default Site Title'
  }

  setMeta(name: string, content: string): void {
    this.metaService.updateTag({ name, content });
  }

  getIconSite(){

  }


}
