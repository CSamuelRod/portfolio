
import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language';

@Component({
  selector: 'app-contact',
  template: `
    <section class="contact-section section-container" id="contacto">
      <div class="contact-content">
        <p class="eyebrow">{{ language.t('contact.eyebrow') }}</p>

        <h2>
          {{ language.t('contact.title') }}
          <span>{{ language.t('contact.titleHighlight') }}</span>
        </h2>

        <p>{{ language.t('contact.description') }}</p>

        <div class="contact-actions">
          <a class="button-primary" href="mailto:samuel.rodpal@gmail.com">
            ✉ {{ language.t('contact.emailButton') }}
          </a>

          <a
            class="button-secondary"
            href="https://www.linkedin.com/in/carlos-samuel-rodriguez-palomino"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>


        </div>

        <div class="contact-details">
          <a href="mailto:samuel.rodpal@gmail.com">
            samuel.rodpal&#64;gmail.com
          </a>

          <a href="tel:+34640084196">
            +34 640 084 196
          </a>

          <span>{{ language.t('contact.location') }}</span>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent {
  protected readonly language = inject(LanguageService);
}
