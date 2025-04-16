import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environment/environment.development';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalClientGetService {
  private http = inject(HttpClient);
  private baseUrl = environment.baseApiUrl;

  getDataClient<T>(url: string, adapter: (data: any) => T) {
    return this.http.get<T>(this.baseUrl + url).pipe(
      map((data) => {
        return adapter(data)
      }),
      catchError((err) => throwError(() => err))
    );
  }
}