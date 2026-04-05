import { Component, ChangeDetectionStrategy, HostListener, signal, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ThemeService } from '../../services/theme.service';
import { ScrollService } from '../../services/scroll.service';
import { NavLink } from '../../models/nav-link.interface';
import {
  SITE_NAME,
  LANGUAGE_STORAGE_KEY,
  THEME_DARK,
} from '../../constants/app.constants';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  private themeService = inject(ThemeService);
  private scrollService = inject(ScrollService);
  private translate = inject(TranslateService);

  readonly siteName = SITE_NAME;
  readonly isScrolled = signal(false);
  readonly mobileMenuOpen = signal(false);
  readonly isDark = this.themeService.currentTheme;
  readonly activeSection = this.scrollService.activeSection;
  readonly THEME_DARK = THEME_DARK;

  readonly navLinks: NavLink[] = [
    { labelKey: 'NAV.ABOUT', sectionId: 'about' },
    { labelKey: 'NAV.WHY_YOU', sectionId: 'why-you' },
    { labelKey: 'NAV.GETTING_TO_KNOW', sectionId: 'getting-to-know' },
    { labelKey: 'NAV.DATE_IDEAS', sectionId: 'date-ideas' },
    { labelKey: 'NAV.QUESTIONS', sectionId: 'questions' },
    { labelKey: 'NAV.FUN_FACTS', sectionId: 'fun-facts' },
    { labelKey: 'NAV.THE_INVITE', sectionId: 'the-invite' },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 50);
  }

  navigateTo(sectionId: string): void {
    this.scrollService.scrollTo(sectionId);
    this.mobileMenuOpen.set(false);
  }

  toggleTheme(): void {
    this.themeService.toggle();
  }

  toggleLanguage(): void {
    const current = this.translate.currentLang || this.translate.defaultLang;
    const next = current === 'en' ? 'de' : 'en';
    this.translate.use(next);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, next);
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update((v) => !v);
  }

  get currentLang(): string {
    return (this.translate.currentLang ?? this.translate.defaultLang ?? 'en').toUpperCase();
  }

  get otherLang(): string {
    return this.currentLang === 'EN' ? 'DE' : 'EN';
  }
}
