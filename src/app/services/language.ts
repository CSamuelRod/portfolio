import { Injectable, signal } from '@angular/core';
import {
  translations,
  Language,
  TranslationKey
} from '../data/translations';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  // El idioma inicial será siempre español.
  readonly currentLanguage = signal<Language>('es');

  setLanguage(language: Language): void {
    this.currentLanguage.set(language);
  }

  t(key: TranslationKey): string {
    return translations[this.currentLanguage()][key];
  }
}