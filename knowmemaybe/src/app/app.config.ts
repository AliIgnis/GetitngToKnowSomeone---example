import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { TranslateHttpLoader, provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { provideTranslateService, provideTranslateLoader } from '@ngx-translate/core';
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES, LANGUAGE_STORAGE_KEY } from './constants/app.constants';

function detectLanguage(): string {
  const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
  if (stored && (SUPPORTED_LANGUAGES as readonly string[]).includes(stored)) {
    return stored;
  }
  const browserLang = navigator.language?.split('-')[0];
  if (browserLang && (SUPPORTED_LANGUAGES as readonly string[]).includes(browserLang)) {
    return browserLang;
  }
  return DEFAULT_LANGUAGE;
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
    provideTranslateService({
      defaultLanguage: detectLanguage(),
      loader: provideTranslateLoader(TranslateHttpLoader),
    }),
    provideTranslateHttpLoader({
      prefix: './assets/i18n/',
      suffix: '.json',
    }),
  ],
};
