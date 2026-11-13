import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language';

@Component({
  selector: 'app-projects',
  template: `
    <section class="content-section section-container" id="proyectos">
      <div class="section-heading">
        <p class="eyebrow">{{ language.t('projects.eyebrow') }}</p>
        <h2>
          {{ language.t('projects.title') }}
          <span>{{ language.t('projects.titleHighlight') }}</span>
        </h2>
        <p>{{ language.t('projects.subtitle') }}</p>
      </div>

      <div class="projects-grid">

        <!-- HEALTHY BOT -->
        <article class="project-card">
          <div class="project-visual project-visual-blue">
            <span class="project-number">01</span>
            <div class="project-symbol">🧠</div>
            <span class="project-label">SPRING BOOT · KOTLIN</span>
          </div>

          <div class="project-body">
            <div class="project-meta">
              <span>TFG</span>
              <span>2025</span>
            </div>

            <h3>Healthy Bot</h3>

            <p>{{ language.t('projects.healthyBot') }}</p>

            <div class="technology-tags">
              <span>Java 17</span>
              <span>Spring Boot</span>
              <span>Kotlin</span>
              <span>MySQL</span>
              <span>Spring Security</span>
            </div>

            <div class="project-links">
              <a href="https://github.com/CSamuelRod/healthy.bot"
                 target="_blank" rel="noopener noreferrer">
                Backend <span>↗</span>
              </a>
              <a href="https://github.com/CSamuelRod/HealthyBotFront"
                 target="_blank" rel="noopener noreferrer">
                Frontend <span>↗</span>
              </a>
            </div>
          </div>
        </article>

        <!-- HOME SUPER DASHBOARD -->
        <article class="project-card">
          <div class="project-visual project-visual-dark">
            <span class="project-number">02</span>
            <div class="project-symbol">🏡</div>
            <span class="project-label">WEB APPLICATION</span>
          </div>

          <div class="project-body">
            <div class="project-meta">
              <span>Proyecto personal</span>
              <span>2025</span>
            </div>

            <h3>Home Super Dashboard</h3>

            <p>{{ language.t('projects.homeDashboard') }}</p>

            <div class="technology-tags">
              <span>JavaScript</span>
              <span>Firebase</span>
              <span>Firestore</span>
              <span>HTML</span>
              <span>CSS</span>
            </div>

            <div class="project-links">
              <a href="https://homesuperdashboard.netlify.app/"
                 target="_blank" rel="noopener noreferrer">
                Ver web <span>↗</span>
              </a>
              <a href="https://github.com/CSamuelRod/HomeDashBoard"
                 target="_blank" rel="noopener noreferrer">
                GitHub <span>↗</span>
              </a>
            </div>
          </div>
        </article>

        <!-- SPRING BOOT + SQL -->
        <article class="project-card project-placeholder">
          <div class="project-visual project-visual-blue">
            <span class="project-number">03</span>
            <div class="project-symbol">⚙️</div>
            <span class="project-label">{{ language.t('projects.inProgress') }}</span>
          </div>

          <div class="project-body">
            <div class="project-meta">
              <span>{{ language.t('projects.learning') }}</span>
            </div>

            <h3>Spring Boot & SQL</h3>

            <p>{{ language.t('projects.springSql') }}</p>

            <div class="technology-tags">
              <span>Java</span>
              <span>Spring Boot</span>
              <span>SQL</span>
              <span>JPA</span>
              <span>Maven</span>
            </div>
          </div>
        </article>

      </div>
    </section>
  `
})
export class ProjectsComponent {
  protected readonly language = inject(LanguageService);
}