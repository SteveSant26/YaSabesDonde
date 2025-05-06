import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  inject,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { siteRoutesConfig } from '@features/site';

import { branchRoutesConfig } from '@features/branch/config';
import { menuRoutesConfig } from '@features/menu/config';
import { ViewLocationComponent } from '@features/profile/components';
import { FormsModule } from '@angular/forms';
import { ButtonIsLoggedComponent } from '@features/auth/components';
import { authRoutesConfig } from '@features/auth';
import { UserService } from '@features/auth/services';
import { AppInformationService } from '@shared/services';
import { ordersRoutesConfig } from '@features/orders/config';
@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    FormsModule,
    MatIconModule,
    ViewLocationComponent,
    ButtonIsLoggedComponent,
  ],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarComponent {
  readonly siteRouteConfig = siteRoutesConfig;
  readonly branchRouteConfig = branchRoutesConfig;
  readonly ordersRouteConfig = ordersRoutesConfig
  protected authRoutesConfig = authRoutesConfig;
  
  private useServive = inject(UserService);
  private appInformationService = inject(AppInformationService)
  isAuthenticated = this.useServive.isAuthenticated();

  readonly narBarLinks = [
    { label: siteRoutesConfig.base.label, href: siteRoutesConfig.base.url },
    { label: menuRoutesConfig.base.label, href: menuRoutesConfig.base.url },
    { label: branchRoutesConfig.base.label, href: branchRoutesConfig.base.url },
    { label: 'Contact Us', href: '#contact' },
  ];

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  get toggleIconState(): string {
    return this.menuOpen ? 'close' : 'menu';
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const clickedInside = (event.target as HTMLElement).closest('.dropdown');
    if (!clickedInside) {
      this.menuOpen = false;
    }
  }

  get logoSite() {
    return this.appInformationService.getLogoSite()
  }
  get appName() {
    return this.appInformationService.getTittle()
  }
}
