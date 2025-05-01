import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { authRoutesConfig } from '@features/auth/config';
import { AvatarComponent } from "../avatar/avatar.component";
import { profileRoutesConfig } from '@features/profile/config';
import { UserService } from '@features/auth/services';

@Component({
  selector: 'app-button-is-logged',
  imports: [RouterLink, AvatarComponent],
  templateUrl: './button-is-logged.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonIsLoggedComponent {
  private userService = inject(UserService);

  logout() {
    this.userService.logout();
  }
  profileRoutesConfig = signal(profileRoutesConfig);
  authRoutesConfig = signal(authRoutesConfig);
  isAuthenticated = input.required<boolean>();
}
