
import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language';

@Component({
  selector: 'app-skills',
  template: `
    <section class="content-section section-container" id="habilidades">
      <div class="section-heading">
        <p class="eyebrow">{{ language.t('skills.eyebrow') }}</p>
        <h2>
          {{ language.t('skills.title') }}
          <span>{{ language.t('skills.titleHighlight') }}</span>
        </h2>
        <p>{{ language.t('skills.subtitle') }}</p>
      </div>

<div class="skills-grid">
  <article class="skill-group">
    <div class="skill-group-heading">
      <span class="skill-group-icon">⌘</span>
      <h3>{{ language.t('skills.languages') }}</h3>
    </div>

    <div class="skill-items">
      <span>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/java/java-original.svg" alt="Java" />
        Java
      </span>

      <span>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/kotlin/kotlin-original.svg" alt="Kotlin" />
        Kotlin
      </span>

<span>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/javascript/javascript-original.svg" alt="JavaScript" />
  JavaScript
</span>

<span>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/angular/angular-original.svg" alt="Angular" />
  Angular
</span>

      <span>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/azuresqldatabase/azuresqldatabase-original.svg" alt="SQL" />
        SQL
      </span>

      <span>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/azuresqldatabase/azuresqldatabase-original.svg" alt="PL/SQL" />
        PL/SQL
      </span>
    </div>
  </article>

        <article class="skill-group">
          <div class="skill-group-heading">
            <span class="skill-group-icon">⚙</span>
            <h3>{{ language.t('skills.backend') }}</h3>
          </div>
          <div class="skill-items">
            <span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/spring/spring-original.svg" alt="" /> Spring Boot</span>
            <span>Java EE</span>
            <span>Java SE</span>
            <span>JDBC</span>
            <span>Servlets</span>
            <span>JSP</span>
            <span>Spring Data JPA</span>
            <span>Spring Security</span>
            <span>APIs REST</span>
          </div>
        </article>

        <article class="skill-group">
          <div class="skill-group-heading">
            <span class="skill-group-icon">▤</span>
            <h3>{{ language.t('skills.databases') }}</h3>
          </div>
          <div class="skill-items">
            <span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/postgresql/postgresql-original.svg" alt="" /> PostgreSQL</span>
            <span>Informix</span>
            <span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/oracle/oracle-original.svg" alt="" /> Oracle</span>
            <span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/mysql/mysql-original.svg" alt="" /> MySQL</span>
              <span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/firebase/firebase-plain.svg" alt="" /> Firebase</span>
            <span>{{ language.t('skills.storedProcedures') }}</span>
          </div>
        </article>

        <article class="skill-group">
          <div class="skill-group-heading">
            <span class="skill-group-icon">⇄</span>
            <h3>{{ language.t('skills.dataProcessing') }}</h3>
          </div>
          <div class="skill-items">
            <span>{{ language.t('skills.batch') }}</span>
            <span>{{ language.t('skills.scheduledTasks') }}</span>
            <span>{{ language.t('skills.fileProcessing') }}</span>
            <span>{{ language.t('skills.reporting') }}</span>
            <span>{{ language.t('skills.sqlOptimization') }}</span>
          </div>
        </article>

        <article class="skill-group">
          <div class="skill-group-heading">
            <span class="skill-group-icon">✓</span>
            <h3>{{ language.t('skills.testing') }}</h3>
          </div>
          <div class="skill-items">
            <span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/junit/junit-original.svg" alt="" /> JUnit</span>
            <span>Mockito</span>
            <span>POO</span>
            <span>{{ language.t('skills.issueResolution') }}</span>
          </div>
        </article>

        <article class="skill-group">
          <div class="skill-group-heading">
            <span class="skill-group-icon">⌨</span>
            <h3>{{ language.t('skills.tools') }}</h3>
          </div>
          <div class="skill-items">
            <span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/git/git-original.svg" alt="" /> Git</span>
            <span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/github/github-original.svg" alt="" /> GitHub</span>
            <span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/maven/maven-original.svg" alt="" /> Maven</span>
            <span>Gradle</span>
            <span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/docker/docker-original.svg" alt="" /> Docker</span>
            <span>Swagger</span>
          </div>
        </article>
      </div>
    </section>
  `
})
export class SkillsComponent {
  protected readonly language = inject(LanguageService);
}
