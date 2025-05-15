import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AppInformationService } from '@shared/services';

@Component({
  selector: 'app-footer',
  imports: [MatIconModule],
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  private appInformationService = inject(AppInformationService)




  get logoSite() {
    return this.appInformationService.getLogoSite()
  }
  get appName() {
    return this.appInformationService.getTittle()
  }
}
