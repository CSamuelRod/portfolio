import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language';

@Component({
  selector: 'app-about',
  template: `
    <section class="hero section-container" id="inicio">

      <div class="hero-content">

        <div class="about-photo">
          <img
            src="/assets/image/samuel.jpg"
            alt="Samuel Rodríguez Palomino - Java Backend Developer"
          />
        </div>

        <div class="availability">
          <span class="status-dot"></span>
          JAVA BACKEND DEVELOPER
        </div>

        <p class="eyebrow" id="sobre-mi">
          {{ language.t('about.greeting') }}
        </p>

        <h1>
          {{ language.t('about.title') }}
        </h1>

        <h2>Java Backend Developer | Java EE | JDBC | SQL / PL-SQL</h2>

<p class="hero-description">
  {{ language.t('about.description') }}
</p>
<div class="hero-stats">
  <div class="stat-item">
    <strong>2+</strong>
    <span>{{ language.t('about.experienceYears') }}</span>
  </div>

  <div class="stat-item">
    <strong>Java</strong>
    <span>{{ language.t('about.specialization') }}</span>
  </div>

  <div class="stat-item">
    <strong>SQL</strong>
    <span>{{ language.t('about.databases') }}</span>
  </div>
</div>
        <div class="hero-tags">
          <span>Java</span>
          <span>Java EE</span>
          <span>JDBC</span>
          <span>SQL</span>
          <span>Spring Boot test</span>
        </div>

        <div class="hero-actions">
          <a class="button-primary" href="#contacto">
            {{ language.t('about.talk') }} ↗
          </a>

          <a
            class="button-secondary"
            href="https://www.linkedin.com/in/carlos-samuel-rodriguez-palomino"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ language.t('about.linkedin') }} ↗
          </a>
        </div>

        <div class="hero-location">
          <span>⌖ {{ language.t('about.location') }}</span>
          <span>·</span>
        </div>

      </div>

      <aside class="hero-card">
        <div class="terminal-header">
          <span></span><span></span><span></span>
          <small>backend.java</small>
        </div>

        <div class="terminal-content">
          <p><span class="code-purple">public class</span> Developer {{ '{' }}</p>
          <p class="indent"><span class="code-purple">String</span> name = <span class="code-green">"Samuel"</span>;</p>
          <p class="indent"><span class="code-purple">String</span> role = <span class="code-green">"Backend Developer"</span>;</p>
          <p class="indent"><span class="code-purple">String</span> language = <span class="code-green">"Java"</span>;</p>
          <p class="indent"><span class="code-purple">boolean</span> learning = <span class="code-orange">true</span>;</p>
          <p>{{ '}' }}</p>
          <br />
          <p class="terminal-comment">{{ language.t('about.terminalComment') }}</p>
          <p class="terminal-cursor">▌</p>
        </div>

        <div class="terminal-footer">
          <span class="status-dot"></span>
          {{ language.t('about.evolution') }}
        </div>
      </aside>

    </section>
  `
})
export class AboutComponent {
  protected readonly language = inject(LanguageService);
}