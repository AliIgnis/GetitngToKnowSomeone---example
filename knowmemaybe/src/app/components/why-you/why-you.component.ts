import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FadeInDirective } from '../../directives/fade-in.directive';

@Component({
  selector: 'app-why-you',
  standalone: true,
  imports: [TranslateModule, FadeInDirective],
  templateUrl: './why-you.component.html',
  styleUrls: ['./why-you.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhyYouComponent {
  readonly reasons = ['WHY_YOU.REASON_1', 'WHY_YOU.REASON_2', 'WHY_YOU.REASON_3'];
}
