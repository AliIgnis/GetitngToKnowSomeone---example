import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FadeInDirective } from '../../directives/fade-in.directive';
import { PersonalTrait } from '../../models/personal-trait.interface';
import { TRAIT_ICONS, TOTAL_TRAITS } from '../../constants/app.constants';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TranslateModule, FadeInDirective],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutMeComponent {
  readonly traits: PersonalTrait[] = Array.from({ length: TOTAL_TRAITS }, (_, i) => ({
    icon: TRAIT_ICONS[i],
    titleKey: `ABOUT.TRAIT_${i + 1}_TITLE`,
    textKey: `ABOUT.TRAIT_${i + 1}_TEXT`,
  }));
}
