import { ChangeDetectionStrategy, Component, inject, input, OnInit, signal, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { UseClientBranchService } from '../../services';
import { Branch } from '../../models';

@Component({
  selector: 'app-single-branch-card',
  imports: [],
  templateUrl: './single-branch-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleBranchCardComponent implements OnInit {
  documentId = input<string>();
  private useClientBranch = inject(UseClientBranchService);
  protected branch = signal<Branch | undefined>(undefined);
  ngOnInit(): void {
    this.useClientBranch.getBranch(this.documentId() || '-1').subscribe({
      next: (branch: Branch) => {
        this.branch.set(branch);
      }
    });
  }
}
