import { Component, inject, signal } from '@angular/core';
import { LanguageService } from '../../services/language';

@Component({
  selector: 'app-experience',
  template: `
    <section class="content-section section-container" id="experiencia">

      <div class="section-heading">
        <p class="eyebrow">{{ language.t('experience.eyebrow') }}</p>
        <h2>
          {{ language.t('experience.title') }}
          <span>{{ language.t('experience.titleHighlight') }}</span>
        </h2>
        <p>{{ language.t('experience.subtitle') }}</p>
      </div>

      <!-- SELECTOR DE EXPERIENCIA -->
      <div class="experience-selector">

        <button
          type="button"
          class="experience-tab"
          [class.active]="selectedExperience() === 'deister'"
          [attr.aria-pressed]="selectedExperience() === 'deister'"
          (click)="selectedExperience.set('deister')"
        >
          <span class="tab-number">01</span>
          <span class="tab-info">
            <strong>Deister Consulting</strong>
            <small>{{ language.t('experience.job1.date') }}</small>
          </span>
          <span class="tab-arrow">↗</span>
        </button>

        <button
          type="button"
          class="experience-tab"
          [class.active]="selectedExperience() === 'simon'"
          [attr.aria-pressed]="selectedExperience() === 'simon'"
          (click)="selectedExperience.set('simon')"
        >
          <span class="tab-number">02</span>
          <span class="tab-info">
            <strong>SIMON DICE SK</strong>
            <small>{{ language.t('experience.job2.date') }}</small>
          </span>
          <span class="tab-arrow">↗</span>
        </button>

      </div>

      <!-- EXPERIENCIA DEISTER -->
      @if (selectedExperience() === 'deister') {
        <article class="experience-card">

          <div class="experience-top">
            <div>
              <p class="experience-date">
                {{ language.t('experience.job1.date') }}
              </p>
              <h3>{{ language.t('experience.job1.role') }}</h3>
              <h4>Deister Consulting</h4>
            </div>

            <span class="experience-type">
              {{ language.t('experience.job1.type') }}
            </span>
          </div>

          <p class="experience-description">
            {{ language.t('experience.job1.description') }}
          </p>

          <ul class="experience-list">
            <li>{{ language.t('experience.job1.task1') }}</li>
            <li>{{ language.t('experience.job1.task2') }}</li>
            <li>{{ language.t('experience.job1.task3') }}</li>
            <li>{{ language.t('experience.job1.task4') }}</li>
            <li>{{ language.t('experience.job1.task5') }}</li>
            <li>{{ language.t('experience.job1.task6') }}</li>
            <li>{{ language.t('experience.job1.task7') }}</li>
          </ul>

          <div class="experience-technologies">
            <p class="technologies-heading">
              {{ language.t('skills.tools') }}
            </p>

            <div class="technology-logos">

              <div class="technology-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/java/java-original.svg" alt="Java">
                <span>Java EE</span>
              </div>

              <div class="technology-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/postgresql/postgresql-original.svg" alt="PostgreSQL">
                <span>PostgreSQL</span>
              </div>

              <div class="technology-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/oracle/oracle-original.svg" alt="SQL">
                <span>SQL / PL-SQL</span>
              </div>

              <div class="technology-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/oracle/oracle-original.svg" alt="Informix">
                <span>Informix</span>
              </div>

              <div class="technology-item">
<img
  src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/java/java-original.svg"
  alt="Java"
/>                <span>JDBC</span>
              </div>

            </div>
          </div>

        </article>
      }

      <!-- EXPERIENCIA SIMON DICE -->
      @if (selectedExperience() === 'simon') {
        <article class="experience-card">

          <div class="experience-top">
            <div>
              <p class="experience-date">
                {{ language.t('experience.job2.date') }}
              </p>
              <h3>{{ language.t('experience.job2.role') }}</h3>
              <h4>SIMON DICE SK</h4>
            </div>

            <span class="experience-type">
              {{ language.t('experience.job2.type') }}
            </span>
          </div>

          <p class="experience-description">
            {{ language.t('experience.job2.description') }}
          </p>

          <ul class="experience-list">
            <li>{{ language.t('experience.job2.task1') }}</li>
            <li>{{ language.t('experience.job2.task2') }}</li>
            <li>{{ language.t('experience.job2.task3') }}</li>
            <li>{{ language.t('experience.job2.task4') }}</li>
          </ul>

          <div class="experience-technologies">
            <p class="technologies-heading">
              {{ language.t('skills.tools') }}
            </p>

            <div class="technology-logos">

              <div class="technology-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/javascript/javascript-original.svg" alt="JavaScript">
                <span>JavaScript</span>
              </div>

              <div class="technology-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/firebase/firebase-original.svg" alt="Firebase">
                <span>Firebase</span>
              </div>

              <div class="technology-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/html5/html5-original.svg" alt="HTML">
                <span>HTML5</span>
              </div>

              <div class="technology-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/css3/css3-original.svg" alt="CSS">
                <span>CSS3</span>
              </div>

            </div>
          </div>

        </article>
      }

    </section>
  `
})
export class ExperienceComponent {
  protected readonly language = inject(LanguageService);

  protected readonly selectedExperience = signal<'deister' | 'simon'>('deister');
}