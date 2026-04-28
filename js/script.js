document.addEventListener('DOMContentLoaded', () => {
    
    // --- LÓGICA MENÚ HAMBURGUESA ---
    const menuToggle = document.querySelector('#mobile-menu');
    const navLinksContainer = document.querySelector('#nav-list');
    const allNavLinks = document.querySelectorAll('.nav-links a');

    // Abrir y cerrar menú
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('is-active');
        navLinksContainer.classList.toggle('active');
        
        // Bloquear scroll del cuerpo cuando el menú está abierto
        document.body.style.overflow = navLinksContainer.classList.contains('active') ? 'hidden' : 'auto';
    });

    // Cerrar al hacer click en un link
    allNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('is-active');
            navLinksContainer.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

    // --- AÑO AUTOMÁTICO ---
    const yearSpan = document.getElementById('year');
    if(yearSpan) yearSpan.textContent = new Date().getFullYear();

    // --- ANIMACIONES DE REVELACIÓN (SCROLL) ---
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target); // Animación solo una vez
            }
        });
    };

    const revealObserver = new IntersectionObserver(revealCallback, observerOptions);

    // Seleccionamos elementos para animar
    const elementsToReveal = document.querySelectorAll('.stack-card, .project-card, .container, .section-header');

    elementsToReveal.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)";
        revealObserver.observe(el);
    });

    // --- EFECTO NAVBAR AL HACER SCROLL ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = "0.8rem 10%";
            navbar.style.background = "rgba(15, 23, 42, 0.98)";
        } else {
            navbar.style.padding = "1rem 10%";
            navbar.style.background = "rgba(15, 23, 42, 0.95)";
        }
    });
});