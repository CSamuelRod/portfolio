import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="navbar">
      <a class="brand" href="#sobre-mi">SAMUEL.DEV</a>

      <div class="nav-links">
        <a href="#sobre-mi">{{ language.t('nav.about') }}</a>
        <a href="#experiencia">{{ language.t('nav.experience') }}</a>
        <a href="#proyectos">{{ language.t('nav.projects') }}</a>
        <a href="#habilidades">{{ language.t('nav.skills') }}</a>
        <a href="#formacion">{{ language.t('nav.education') }}</a>
        <a href="#contacto">{{ language.t('nav.contact') }}</a>
      </div>

      <div class="language-selector">
        <button
          type="button"
          [class.active]="language.currentLanguage() === 'es'"
          (click)="language.setLanguage('es')">
          ES
        </button>

        <button
          type="button"
          [class.active]="language.currentLanguage() === 'en'"
          (click)="language.setLanguage('en')">
          EN
        </button>

        <button
          type="button"
          [class.active]="language.currentLanguage() === 'fr'"
          (click)="language.setLanguage('fr')">
          FR
        </button>
      </div>
    </nav>
  `
})
export class NavbarComponent {
  protected readonly language = inject(LanguageService);
}