import { Injectable } from '@angular/core';
import { environment } from '@environment/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UseClientProfileService {
  private url  = '/api/profiles';
  private user = `/api/users`;

  getMe() {
    return ;
  }
}
