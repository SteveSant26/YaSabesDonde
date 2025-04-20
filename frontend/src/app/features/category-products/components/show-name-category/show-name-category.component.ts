import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-show-name-category',
  imports: [],
  template: `
    <h6 class="font-bold font-primary text-2xl inline p-4 mb-10  border-2 rounded-2xl text-black">{{ categoryName() }}</h6> 
    `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowNameCategoryComponent {
  categoryName = input<string>();
}
