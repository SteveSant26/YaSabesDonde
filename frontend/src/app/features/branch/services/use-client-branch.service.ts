import { inject, Injectable } from '@angular/core';
import { GlobalClientGetService } from '@shared/services';
import { branchAdapter, branchesAdapter } from '../adapters';
import { Branch, Branches } from '../models';
import { Observable } from 'rxjs';
import { createPopulate } from '@shared/utils/img-url';
import { createPagination } from '@shared/utils/img-url/create-pagination.util';

@Injectable({
  providedIn: 'root'
})
export class UseClientBranchService {
  private url = "/api/branches";
  private globalClientGetService = inject(GlobalClientGetService);

  getBranches(): Observable<Branches> {
    return this.globalClientGetService.getDataClient<Branches>(`${this.url}?${createPopulate([
      'image'
    ])}`, branchesAdapter);
  }

  getBranch(documentId: string): Observable<Branch> {
    return this.globalClientGetService.getDataClient<Branch>(`${this.url}/${documentId}?${createPopulate([
      'image'
    ])}`, branchAdapter);
  }

  getOneBranch(): Observable<Branches> {
    return this.globalClientGetService.getDataClient<Branches>(`${this.url}?${createPagination({
      pageSize: 1,
      page: 1
    })}`, branchesAdapter);
  }
}
