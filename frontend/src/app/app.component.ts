import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./shared/components/navbar/navbar.component";
import { FooterComponent } from "./shared/components/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, FooterComponent],
  template: `
  <app-navbar></app-navbar>
  <main class="flex flex-grow min-h-screen flex-col">

    <router-outlet></router-outlet>
  </main>
    <app-footer></app-footer>
  `,
})
export class AppComponent {
  title = 'frontend';
}
