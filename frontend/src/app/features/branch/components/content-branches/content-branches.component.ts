import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { UseClientBranchService } from '../../services';
import { CardBrachComponent } from "./card-brach/card-brach.component";

@Component({
  selector: 'app-content-branches',
  imports: [ CardBrachComponent],
  templateUrl: './content-branches.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      .auto-center {
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
  justify-content: center;
}

@media (min-width: 640px) {
  .auto-center {
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
  }
}

@media (min-width: 1024px) {
  .auto-center:has(> :nth-child(3)) {
    grid-template-columns: repeat(3, 1fr);
  }
}
    `
  ]
})
export class ContentBranchesComponent implements OnInit {
  private useClientBranch = inject(UseClientBranchService);
  protected branches = toSignal(this.useClientBranch.getBranches());
  ngOnInit(): void {
    console.log(this.branches());
  }
}
