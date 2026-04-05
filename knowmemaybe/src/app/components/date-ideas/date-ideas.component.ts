import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FadeInDirective } from '../../directives/fade-in.directive';
import { DateIdea } from '../../models/date-idea.interface';
import { TOTAL_DATE_IDEAS, VIBE_COLORS } from '../../constants/app.constants';

const VIBE_KEYS = ['Chill', 'Creative', 'Intimate', 'Fun', 'Thoughtful', 'Romantic'];

@Component({
  selector: 'app-date-ideas',
  standalone: true,
  imports: [TranslateModule, FadeInDirective],
  templateUrl: './date-ideas.component.html',
  styleUrls: ['./date-ideas.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DateIdeasComponent {
  readonly ideas: DateIdea[] = Array.from({ length: TOTAL_DATE_IDEAS }, (_, i) => ({
    titleKey: `DATE_IDEAS.IDEA_${i + 1}_TITLE`,
    textKey: `DATE_IDEAS.IDEA_${i + 1}_TEXT`,
    vibeKey: `DATE_IDEAS.IDEA_${i + 1}_VIBE`,
    vibeColor: VIBE_COLORS[VIBE_KEYS[i]] || VIBE_COLORS['Chill'],
  }));
}
