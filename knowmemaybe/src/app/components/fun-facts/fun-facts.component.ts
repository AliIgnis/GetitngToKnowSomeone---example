import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FadeInDirective } from '../../directives/fade-in.directive';
import { FunFact } from '../../models/fun-fact.interface';
import { TOTAL_FUN_FACTS } from '../../constants/app.constants';

@Component({
  selector: 'app-fun-facts',
  standalone: true,
  imports: [TranslateModule, FadeInDirective],
  templateUrl: './fun-facts.component.html',
  styleUrls: ['./fun-facts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FunFactsComponent {
  readonly facts: FunFact[] = Array.from({ length: TOTAL_FUN_FACTS }, (_, i) => ({
    labelKey: `FUN_FACTS.FACT_${i + 1}_LABEL`,
    valueKey: `FUN_FACTS.FACT_${i + 1}_VALUE`,
  }));
}
