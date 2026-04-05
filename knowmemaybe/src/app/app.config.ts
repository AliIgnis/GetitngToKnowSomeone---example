import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { TranslateModule, TranslateLoader, TranslationObject } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { DEFAULT_LANGUAGE } from './constants/app.constants';
import { EN_TRANSLATIONS } from './i18n/en';
import { DE_TRANSLATIONS } from './i18n/de';

const TRANSLATIONS: Record<string, TranslationObject> = {
  en: EN_TRANSLATIONS as unknown as TranslationObject,
  de: DE_TRANSLATIONS as unknown as TranslationObject,
};

class InlineTranslateLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<TranslationObject> {
    return of(TRANSLATIONS[lang] || TRANSLATIONS[DEFAULT_LANGUAGE]);
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    importProvidersFrom(
      TranslateModule.forRoot({
        defaultLanguage: DEFAULT_LANGUAGE,
        loader: {
          provide: TranslateLoader,
          useClass: InlineTranslateLoader,
        },
      })
    ),
  ],
};
