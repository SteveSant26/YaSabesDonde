import { Component, inject } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop"; 
import { MatIcon } from "@angular/material/icon";
import { UseClientSiteService } from "../../services";
import { UseClientProductService } from "@features/product/services";
import { GallaryImageProductCardComponent } from "@features/product/components";
import { UseClientCategoryProductsService } from "@features/category-products/services";
import { CardCartegoryProductsComponent } from "@features/category-products/components";
import { HeroComponent } from "../../../../shared/components/hero/hero.component"; 


@Component({
    selector: "home-page",
    templateUrl: "./home.page.html",
    imports: [GallaryImageProductCardComponent, CardCartegoryProductsComponent, HeroComponent],
})
export class HomePage {
    private useClientSiteService = inject(UseClientSiteService);
    private useClientProductService = inject(UseClientProductService);
    private useClientCategoryProductsService = inject(UseClientCategoryProductsService);
    readonly home = toSignal(this.useClientSiteService.getHome());
    readonly aboutUs = toSignal(this.useClientSiteService.getAboutUs());
    readonly products = toSignal(this.useClientProductService.getFavoriteProducts());
    readonly categoryProducts = toSignal(this.useClientCategoryProductsService.getCategoryProducts());
    
    isAboutUsVideoPlaying = false; //  Controlamos si el video ya se reprodujo o no

    playAboutUsVideo(video: HTMLVideoElement) {
      if (video.paused) {
        video.play();
        this.isAboutUsVideoPlaying = true; // Cuando hace play, ocultamos imagen
      } else {
        video.pause();
        this.isAboutUsVideoPlaying = false; // Si vuelve a pausar, mostramos la imagen otra vez si quieres
      }
    }
}