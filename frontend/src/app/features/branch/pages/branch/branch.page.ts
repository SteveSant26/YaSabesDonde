import { Component, input } from "@angular/core";
import { SingleBranchCardComponent } from "../../components/single-branch-card/single-branch-card.component";

@Component({
    selector: "branch-page",
    templateUrl: "./branch.page.html",
    imports: [SingleBranchCardComponent],
})
export class BranchPage { 
    documentId = input<string>();
}