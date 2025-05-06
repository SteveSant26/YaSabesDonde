import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { AppInformationService } from '@shared/services/appInformation.service';
import { ShoppingCartSlideComponent } from "./features/orders/components/shopping-cart-slide/shopping-cart-slide.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, FooterComponent],
  template: `
    <div class="relative bg-primary-color">
      <app-navbar></app-navbar>
      <main class="flex flex-grow min-h-screen flex-col">
        <router-outlet></router-outlet>
      </main>
      <app-footer></app-footer>
    </div>
  `,
})
export class AppComponent {
  private appInformationService = inject(AppInformationService)

  ngOnInit() {
    this.appInformationService.setTitle()
    this.appInformationService.updateFavicon()
  }
}
