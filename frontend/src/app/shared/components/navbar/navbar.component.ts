import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { siteRoutesConfig } from '@features/site';
import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';
import { branchRoutesConfig } from '@features/branch/config';
import { menuRoutesConfig } from '@features/menu/config';
import { ViewLocationComponent } from "../../../features/profile/components/view-location/view-location.component";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, MatIconModule, ViewLocationComponent],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('menuAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10%)' }),
        animate('200ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0, transform: 'translateY(-10%)' })),
      ]),
    ]),
    trigger('toggleIcon', [
      state('menu', style({ transform: 'rotate(0deg)' })),
      state('close', style({ transform: 'rotate(180deg)' })),
      transition('menu <=> close', animate('200ms ease-in-out')),
    ]),
  ],
})
export class NavBarComponent {
  readonly siteRouteConfig = siteRoutesConfig;
  readonly branchRouteConfig = branchRoutesConfig;

  readonly narBarLinks = [
    { 'label': siteRoutesConfig.base.label, 'href': siteRoutesConfig.base.url },
    { 'label': menuRoutesConfig.base.label, 'href':  menuRoutesConfig.base.url },
    { 'label': branchRoutesConfig.base.label, 'href': branchRoutesConfig.base.url },
    { 'label': 'Reviews', 'href': '#testmonial' },
    { 'label': 'Contact Us', 'href': '#contact' }
  ];


  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  get toggleIconState(): string {
    return this.menuOpen ? 'close' : 'menu';
  }

}