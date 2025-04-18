import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
    selector: "branch-layout",
    imports: [RouterOutlet],
    template: `
    <div class="min-h-full">
        <router-outlet></router-outlet>
    </div>
    `
})
export class BranchLayout { }