import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
      <a class="brand" href="#inicio">SAMUEL<span>.DEV</span></a>

      <p>
        © {{ currentYear }} Samuel Rodríguez Palomino.
        {{ language.t('footer.description') }}
      </p>

      <a href="#inicio">{{ language.t('footer.backToTop') }} ↑</a>
    </footer>
  `
})
export class FooterComponent {
  readonly currentYear = new Date().getFullYear();
  protected readonly language = inject(LanguageService);
}