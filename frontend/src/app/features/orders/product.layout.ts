import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
    selector: 'app-orders-layout',
    imports: [RouterOutlet],
    template: `
    <div class="flex flex-col">
      <div class="flex-1 overflow-y-auto">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
})
export class OrdersLayoutComponent {

}