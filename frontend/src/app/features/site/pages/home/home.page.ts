import { Component, inject } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop"; 
import { MatIcon } from "@angular/material/icon";
import { UseClientSiteService } from "../../services";
@Component({
    selector: "home-page",
    imports: [MatIcon],
    templateUrl: "./home.page.html",
})
export class HomePage {
    private useClientSiteService = inject(UseClientSiteService);
    readonly home = toSignal(this.useClientSiteService.getHome());
}