import { ChangeDetectionStrategy, Component, inject, input, OnInit, signal } from '@angular/core';
import { UseClientBranchService } from '../../services';
import { Branch } from '../../models';
import { ContentMenuComponent } from "@features/menu/components/content-menu/content-menu.component";
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { menuRoutesConfig } from '@features/menu/config';

@Component({
  selector: 'app-single-branch-card',
  imports: [MatIcon, RouterLink],
  templateUrl: './single-branch-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleBranchCardComponent implements OnInit {
  documentId = input<string>();
  protected menuRouteConfig = menuRoutesConfig;
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
