// src/app/features/profile/me.page.ts
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { AuthService } from '@features/auth/services';
import { UserService } from '@features/auth/services';
import { RouterLink } from '@angular/router';
import { User } from '@features/auth/models';
import { profileRoutesConfig } from '@features/profile/config';

@Component({
  selector: 'me-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './me.page.html',
})
export class MePage {
  private authService = inject(AuthService);
  private userService = inject(UserService);

  profileRoutesConfig = profileRoutesConfig;
  protected user$ = toSignal(
    this.authService.me(this.userService.getUser() as User)
  );

  /** Formatea la fecha a "día de mes de año" en español */
  createdAtFormatted(dateInput: string | Date | undefined): string {
    if (!dateInput) {
      return '';
    }
    const date = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }
}
