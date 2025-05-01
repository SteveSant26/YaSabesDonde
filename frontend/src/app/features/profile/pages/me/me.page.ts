import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { AuthService, UserService } from '@features/auth/services';

import { RouterLink } from '@angular/router';
import { User } from '@features/auth/models';
import { profileRoutesConfig } from '@features/profile/config';

@Component({
  selector: 'me-page',
  imports: [RouterLink],
  templateUrl: "./me.page.html",
})
export class MePage {
  private authService = inject(AuthService);
  private userService = inject(UserService);
  profileRoutesConfig = profileRoutesConfig; 
  protected user$ = toSignal(
    this.authService.me(this.userService.getUser() as User)
  );
}
