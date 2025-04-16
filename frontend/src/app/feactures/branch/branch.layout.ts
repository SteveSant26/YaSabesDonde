import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
    selector: "branch-layout",
    imports: [RouterOutlet],
    template: `
        <router-outlet></router-outlet>
    `
})
export class BranchLayout { }