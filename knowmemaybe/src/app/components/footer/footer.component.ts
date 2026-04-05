import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ThemeService } from '../../services/theme.service';
import { OWNER_ALIAS, LANGUAGE_STORAGE_KEY, THEME_DARK } from '../../constants/app.constants';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  private themeService = inject(ThemeService);
  private translate = inject(TranslateService);

  readonly ownerAlias = OWNER_ALIAS;
  readonly isDark = this.themeService.currentTheme;
  readonly THEME_DARK = THEME_DARK;

  toggleTheme(): void {
    this.themeService.toggle();
  }

  toggleLanguage(): void {
    const current = this.translate.currentLang || this.translate.defaultLang;
    const next = current === 'en' ? 'de' : 'en';
    this.translate.use(next);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, next);
  }

  get currentLang(): string {
    return (this.translate.currentLang ?? this.translate.defaultLang ?? 'en').toUpperCase();
  }

  get otherLang(): string {
    return this.currentLang === 'EN' ? 'DE' : 'EN';
  }
}
