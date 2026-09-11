const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');

function closeMenu() {
    if (!menuButton || !navigation) return;
    menuButton.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('is-open');
    document.body.classList.remove('menu-open');
}

if (menuButton && navigation) {
    menuButton.addEventListener('click', () => {
        const willOpen = menuButton.getAttribute('aria-expanded') !== 'true';
        menuButton.setAttribute('aria-expanded', String(willOpen));
        navigation.classList.toggle('is-open', willOpen);
        document.body.classList.toggle('menu-open', willOpen);
    });

    navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') closeMenu();
    });
}

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealItems = document.querySelectorAll('.reveal');

if (reducedMotion || !('IntersectionObserver' in window)) {
    revealItems.forEach((item) => item.classList.add('is-visible'));
} else {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px' });

    revealItems.forEach((item) => observer.observe(item));
}

const newsletter = document.querySelector('[data-newsletter]');
if (newsletter) {
    newsletter.addEventListener('submit', (event) => {
        event.preventDefault();
        const status = newsletter.querySelector('.form-status');
        const input = newsletter.querySelector('input');
        status.textContent = 'Merci — votre curiosité est bien enregistrée.';
        input.value = '';
    });
}

document.querySelectorAll('[data-year]').forEach((element) => {
    element.textContent = new Date().getFullYear();
});
