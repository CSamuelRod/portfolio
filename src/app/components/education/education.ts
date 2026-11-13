
import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language';

@Component({
  selector: 'app-education',
  template: `
    <section class="content-section section-container" id="formacion">
      <div class="section-heading">
        <p class="eyebrow">{{ language.t('education.eyebrow') }}</p>
        <h2>
          {{ language.t('education.title') }}
          <span>{{ language.t('education.titleHighlight') }}</span>
        </h2>
        <p>{{ language.t('education.subtitle') }}</p>
      </div>

      <div class="education-grid">
        <article class="education-card">
          <div class="education-icon">🎓</div>
          <div class="education-date">2023 — 2025</div>
          <span class="education-status">{{ language.t('education.completed') }}</span>
          <h3>{{ language.t('education.degree') }}</h3>
          <p>IES Enrique Tierno Galván</p>
          <div class="technology-tags">
            <span>Java</span>
            <span>SQL</span>
            <span>{{ language.t('education.appDevelopment') }}</span>
          </div>
        </article>

        <article class="education-card">
          <div class="education-icon">📚</div>
          <div class="education-date">2023</div>
          <span class="education-status">{{ language.t('education.hours') }}</span>
          <h3>Certificado de Profesionalidad IFCD0112</h3>
          <p>{{ language.t('education.certificateDescription') }}</p>
          <p class="education-center">Atrium Formación Pública</p>
        </article>
      </div>
    </section>
  `
})
export class EducationComponent {
  protected readonly language = inject(LanguageService);
}
