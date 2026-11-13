
# 👨‍💻 Samuel Rodríguez Palomino | Portfolio

Portfolio personal desarrollado con **Angular**, donde presento mi perfil como Java Backend Developer, experiencia, proyectos y conocimientos tecnológicos.

🌐 **Web:** https://csamuelrod.github.io/portfolio/

---

## 🚀 Tecnologías utilizadas

- **Angular** – Framework frontend basado en componentes.
- **TypeScript** – Tipado estático y programación orientada a objetos.
- **HTML5** – Estructura de la aplicación.
- **CSS3** – Diseño responsive, animaciones y estilos personalizados.
- **Git & GitHub** – Control de versiones y repositorio.
- **Docker** – Entorno de desarrollo contenerizado.
- **GitHub Actions** – Integración y despliegue automático.
- **GitHub Pages** – Publicación del portfolio.

## 🧩 Conceptos de Angular aplicados

- **Standalone Components:** aplicación organizada en componentes independientes.
- **Componentes reutilizables:** Navbar, About, Experience, Projects, Skills, Education, Contact y Footer.
- **Signals:** gestión reactiva del estado, como el idioma seleccionado y la experiencia mostrada.
- **Servicios e inyección de dependencias:** servicio centralizado para gestionar los idiomas.
- **Interpolación:** renderizado dinámico de textos mediante plantillas Angular.
- **Control Flow:** uso de `@if` para mostrar contenido dinámicamente.
- **Data Binding:** comunicación entre la lógica TypeScript y las plantillas HTML.
- **Responsive Design:** adaptación a dispositivos móviles, tablets y escritorio.

## 🌍 Funcionalidades

- Diseño moderno con temática dark y detalles en ámbar.
- Navegación entre secciones.
- Selector de idioma: español, inglés y francés.
- Experiencia profesional interactiva.
- Presentación de proyectos y tecnologías.
- Diseño adaptable a diferentes pantallas.

## 📂 Estructura del proyecto

```text
src/
├── app/
│   ├── components/
│   │   ├── navbar/
│   │   ├── about/
│   │   ├── experience/
│   │   ├── projects/
│   │   ├── skills/
│   │   ├── education/
│   │   ├── contact/
│   │   └── footer/
│   ├── data/
│   │   └── translations.ts
│   ├── services/
│   │   └── language.ts
│   ├── app.ts
│   └── app.html
├── assets/
└── styles.css

.github/
└── workflows/
    └── deploy.yml
```

## 🛠️ Instalación y desarrollo

Clonar el repositorio:

```bash
git clone https://github.com/CSamuelRod/portfolio.git
cd portfolio
```

Instalar dependencias:

```bash
npm install
```

Iniciar el servidor de desarrollo:

```bash
npx ng serve
```

Abrir en el navegador:

```text
http://localhost:4200/
```

## 📦 Despliegue

El proyecto utiliza **GitHub Actions** para compilar y desplegar automáticamente en GitHub Pages cada vez que se actualiza la rama `main`.

---

## 📬 Contacto

- **Email:** samuel.rodpal@gmail.com
- **LinkedIn:** [Samuel Rodríguez Palomino](https://www.linkedin.com/in/carlos-samuel-rodriguez-palomino)
- **GitHub:** [CSamuelRod](https://github.com/CSamuelRod)

---

<p align="center">
  Desarrollado con ❤️ por <strong>Samuel Rodríguez Palomino</strong>
</p>
