import { inject, Injectable, signal, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Branch } from '@features/branch/models';
import { UseClientBranchService } from '@features/branch/services';

@Injectable({ providedIn: 'root' })
export class UseManagerLocationService {
  location = signal<Branch | null>(null);
  private useClientBranchService = inject(UseClientBranchService);
  private platformId = inject(PLATFORM_ID);

  constructor() { 
    if (isPlatformBrowser(this.platformId)) {
      this.getLocationClient();
    }
  }

  private getLocationClient() {
    const stored = this.getLocationLocal();
    if (stored) {
      this.location.set(stored);
      return;
    }

    this.useClientBranchService.getOneBranch().subscribe({
      next: (branches) => {
        const branch = branches.data[0];
        this.location.set(branch);
        this.setLocationLocal(branch); // guardamos aquí también
      }
    });
  }

  setLocation(branch: Branch) {
    this.location.set(branch);
    if (isPlatformBrowser(this.platformId)) {
      this.setLocationLocal(branch);
    }
  }

  private getLocationLocal(): Branch | null {
    if (!isPlatformBrowser(this.platformId)) return null;
    return JSON.parse(localStorage.getItem('location') || 'null');
  }

  private setLocationLocal(branch: Branch) {
    localStorage.setItem('location', JSON.stringify(branch));
  }
}
