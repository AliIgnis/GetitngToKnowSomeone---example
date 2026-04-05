import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FadeInDirective } from '../../directives/fade-in.directive';
import { Step } from '../../models/step.interface';
import { TOTAL_GETTING_TO_KNOW_STEPS } from '../../constants/app.constants';

@Component({
  selector: 'app-getting-to-know',
  standalone: true,
  imports: [TranslateModule, FadeInDirective],
  templateUrl: './getting-to-know.component.html',
  styleUrls: ['./getting-to-know.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GettingToKnowComponent {
  readonly steps: Step[] = Array.from({ length: TOTAL_GETTING_TO_KNOW_STEPS }, (_, i) => ({
    number: i + 1,
    titleKey: `GETTING_TO_KNOW.STEP_${i + 1}_TITLE`,
    textKey: `GETTING_TO_KNOW.STEP_${i + 1}_TEXT`,
  }));
}
