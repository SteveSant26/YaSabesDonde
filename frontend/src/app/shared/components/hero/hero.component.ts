import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Hero } from '@shared/models';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {
  hero = input.required<Hero>();
}
