import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
    selector: 'app-menu-layout',
    imports: [RouterOutlet],
    template: `
    <div class="min-h-screen bg-primary-color">
        <router-outlet></router-outlet>
    </div>
`,
}) export class MenuLayout { }