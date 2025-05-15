import { ChangeDetectionStrategy, Component} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  imports: [
    MatIconModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarComponent {

}
