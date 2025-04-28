import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { AuthService, UserService } from '../../services';

import { RouterLink } from '@angular/router';
import { User } from '../../models';
import { authRoutesConfig } from '../../config';

@Component({
  selector: 'me-page',
  imports: [RouterLink],
  templateUrl: "./me.page.html",
})
export class MePage {
  private authService = inject(AuthService);
  private userService = inject(UserService);
  authRoutesConfig = authRoutesConfig;
  protected user$ = toSignal(
    this.authService.me(this.userService.getUser() as User)
  );
}
