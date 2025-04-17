import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
    selector: 'site-layout',
    imports: [RouterOutlet],
    template: `
    <div class="antialiased text-gray-900">
        <router-outlet></router-outlet>
    </div>
    `
})
export class SiteLayout { }