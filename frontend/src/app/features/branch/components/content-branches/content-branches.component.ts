import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop'; 
import { UseClientBranchService } from '../../services';
import { RouterLink } from '@angular/router';
import { CardBrachComponent } from "./card-brach/card-brach.component";

@Component({
  selector: 'app-content-branches',
  imports: [RouterLink, CardBrachComponent],
  templateUrl: './content-branches.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentBranchesComponent implements OnInit {
  private useClientBranch = inject(UseClientBranchService);
  protected branches = toSignal(this.useClientBranch.getBranches());
  ngOnInit(): void {
    console.log(this.branches());
  }
}
