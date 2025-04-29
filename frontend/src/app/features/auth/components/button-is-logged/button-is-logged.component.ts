import {
  ChangeDetectionStrategy,
  Component,
  input,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AvatarNavbarComponent } from './avatar-navbar/avatar-navbar.component';
import { profileRoutesConfig } from '@features/profile/config';
import { authRoutesConfig } from '@features/auth/config';

@Component({
  selector: 'app-button-is-logged',
  imports: [CommonModule, RouterLink, AvatarNavbarComponent],
  templateUrl: './button-is-logged.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonIsLoggedComponent {
  authRoutesConfig = signal(authRoutesConfig);
  profileRoutesConfig = signal(profileRoutesConfig);
  isAuthenticated = input.required<Boolean>();
}
