import { Component, input } from "@angular/core";
import { ContentMenuComponent } from "../../components/content-menu/content-menu.component";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  imports: [ContentMenuComponent],
})
export class MenuPage {
  documentId = input<number>();
}