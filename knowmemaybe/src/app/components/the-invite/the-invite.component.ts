import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FadeInDirective } from '../../directives/fade-in.directive';
import {
  OWNER_ALIAS,
  OWNER_EMAIL,
  EMAIL_SUBJECT_EN,
  EMAIL_SUBJECT_DE,
} from '../../constants/app.constants';

@Component({
  selector: 'app-the-invite',
  standalone: true,
  imports: [TranslateModule, FadeInDirective],
  templateUrl: './the-invite.component.html',
  styleUrls: ['./the-invite.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TheInviteComponent {
  private translate = inject(TranslateService);
  readonly ownerAlias = OWNER_ALIAS;

  get mailtoLink(): string {
    const lang = this.translate.currentLang || this.translate.defaultLang;
    const subject = lang === 'de' ? EMAIL_SUBJECT_DE : EMAIL_SUBJECT_EN;
    return `mailto:${OWNER_EMAIL}?subject=${encodeURIComponent(subject)}`;
  }
}
