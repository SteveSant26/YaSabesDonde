import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '@features/auth/services';
import { AvatarComponent } from '@features/auth/components';

@Component({
  selector: 'app-avatar-navbar',
  imports: [RouterLink, AvatarComponent],
  templateUrl: './avatar-navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarNavbarComponent {
  private userService = inject(UserService);

  profileRoutesConfig = input.required<any>();

  logout() {
    this.userService.logout();
  }
}
