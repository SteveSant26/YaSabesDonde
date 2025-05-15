// src/app/features/profile/pages/me/me.page.ts
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { AuthService } from '@features/auth/services';
import { UserService } from '@features/auth/services';
import { User } from '@features/auth/models';
import { profileRoutesConfig } from '@features/profile/config';

/**
 * Extiende User para incluir avatarUrl opcional.
 */
interface ProfileUser extends User {
  avatarUrl?: string;
}

@Component({
  selector: 'me-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './me.page.html',
})
export class MePage {
  private authService = inject(AuthService);
  private userService = inject(UserService);

  /** Config de rutas para el perfil */
  profileRoutesConfig = profileRoutesConfig;

  /** Señal que emite los datos del usuario logueado */
  user$ = toSignal(
    this.authService.me(this.userService.getUser() as ProfileUser)
  );

  /**
   * Formatea una fecha (string o Date) a "día de mes de año" en español.
   * Si no hay fecha, devuelve cadena vacía.
   */
  createdAtFormatted(dateInput: string | Date | undefined): string {
    if (!dateInput) {
      return '';
    }
    const date =
      typeof dateInput === 'string' ? new Date(dateInput) : dateInput;
    return date.toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  }
}
