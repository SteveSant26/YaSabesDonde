import { Inject, inject, Injectable, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { throwError } from 'rxjs';
import { GlobalDataService } from './globalData.service';
import { GlobalData } from '@shared/types/globalData.type';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AppInformationService {
  private globalDataService = inject(GlobalDataService);
  private titleService = inject(Title);
  private metaService = inject(Meta);

  appInformation = signal<GlobalData | null>(null);

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.loadGlobalData();
  }


  private loadGlobalData(): void {
    this.globalDataService.getGlobalData().subscribe({
      next: (globalData) => {
        this.appInformation.set(globalData);
      },
      error: (error) => {
        return throwError(() => new Error(error.error.error.message || 'Couldnt load app info'))
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

  getFavicon() {
    return this.appInformation()?.favicon
  }
  updateFavicon() {
    const iconUrl = this.getFavicon()?.url || ''
    let link: HTMLLinkElement | null = this.document.querySelector("link[rel*='icon']") as HTMLLinkElement;
    if (link) {
      link.href = iconUrl;
    } else {
      link = this.document.createElement('link');
      link.rel = 'icon';
      link.type = 'image/x-icon';
      link.href = iconUrl;
      this.document.head.appendChild(link);
    }
  }

  getLogoSite() {
    return this.appInformation()?.logoSite
  }

}
