import { Component, inject } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop"; 
import { MatIcon } from "@angular/material/icon";
import { UseClientSiteService } from "../../services";
import { UseClientProductService } from "@features/product/services";
import { GallaryImageProductCardComponent } from "@features/product/components";
@Component({
    selector: "home-page",
    templateUrl: "./home.page.html",
    imports: [GallaryImageProductCardComponent],
})
export class HomePage {
    private useClientSiteService = inject(UseClientSiteService);
    private useClientProductService = inject(UseClientProductService);
    readonly home = toSignal(this.useClientSiteService.getHome());
    readonly aboutUs = toSignal(this.useClientSiteService.getAboutUs());
    readonly products = toSignal(this.useClientProductService.getProducts());
}