import { Component } from "@angular/core";
import { MenuPage } from "../menu/menu.page";
import { ContentMenuComponent } from "../../components/content-menu/content-menu.component";

@Component({
  selector: 'app-list-menus',
  templateUrl: './list-menus.page.html',
  imports: [ ContentMenuComponent],
})
export class ListMenusPage {

}