document.addEventListener('DOMContentLoaded', () => {

    /* ---- Scroll reveal ---- */
    const reveals = document.querySelectorAll('[data-reveal]');
    const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in');
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach((el) => io.observe(el));

    /* ---- Nav background on scroll ---- */
    const nav = document.querySelector('.nav');
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    /* ---- Mobile menu ---- */
    const toggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');

    const setMenu = (open) => {
        toggle.setAttribute('aria-expanded', String(open));
        toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
        mobileNav.classList.toggle('open', open);
        document.body.style.overflow = open ? 'hidden' : '';
    };

    toggle.addEventListener('click', () => {
        setMenu(toggle.getAttribute('aria-expanded') !== 'true');
    });
    mobileNav.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => setMenu(false));
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') setMenu(false);
    });

    /* ---- Email (light obfuscation) ---- */
    const user = 'hello';
    const domain = 'markjebens.com';
    const email = document.getElementById('email-link');
    if (email) {
        email.href = `mailto:${user}@${domain}`;
        email.textContent = `${user}@${domain}`;
    }

    /* ---- Footer year ---- */
    const year = document.getElementById('current-year');
    if (year) year.textContent = new Date().getFullYear();
});
