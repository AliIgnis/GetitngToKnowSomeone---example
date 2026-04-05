import { Injectable, signal } from '@angular/core';
import { THEME_STORAGE_KEY, THEME_LIGHT, THEME_DARK } from '../constants/app.constants';

type Theme = typeof THEME_LIGHT | typeof THEME_DARK;

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly currentTheme = signal<Theme>(THEME_LIGHT);

  constructor() {
    this.initTheme();
    this.listenToSystemPreference();
  }

  toggle(): void {
    const next = this.currentTheme() === THEME_LIGHT ? THEME_DARK : THEME_LIGHT;
    this.applyTheme(next);
    localStorage.setItem(THEME_STORAGE_KEY, next);
  }

  private initTheme(): void {
    const stored = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
    if (stored === THEME_LIGHT || stored === THEME_DARK) {
      this.applyTheme(stored);
      return;
    }

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.applyTheme(prefersDark ? THEME_DARK : THEME_LIGHT);
  }

  private applyTheme(theme: Theme): void {
    document.documentElement.setAttribute('data-theme', theme);
    this.currentTheme.set(theme);
  }

  private listenToSystemPreference(): void {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    mq.addEventListener('change', (e) => {
      if (!localStorage.getItem(THEME_STORAGE_KEY)) {
        this.applyTheme(e.matches ? THEME_DARK : THEME_LIGHT);
      }
    });
  }
}
