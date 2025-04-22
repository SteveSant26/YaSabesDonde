import { Component, inject } from "@angular/core";
import { MenuPage } from "../menu/menu.page";
import { ContentMenuComponent } from "../../components/content-menu/content-menu.component";
import { UseManagerLocationService } from "@features/profile/services";

@Component({
  selector: 'app-list-menus',
  templateUrl: './list-menus.page.html',
  imports: [ ContentMenuComponent],
})
export class ListMenusPage {
  private useManagerLocationService = inject(UseManagerLocationService);
  branch = this.useManagerLocationService.location
}