import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Hero } from '@shared/models';

@Component({
  selector: 'app-hero',
  imports: [RouterLink],
  templateUrl: './hero.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {
  hero = input.required<Hero>();
  link = input.required<string>();
}
