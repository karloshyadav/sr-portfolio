(() => {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('is-open');
            navToggle.setAttribute('aria-expanded', isOpen);
        });

        navMenu.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('is-open');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const feedback = document.getElementById('formFeedback');

            const name = contactForm.querySelector('#name')?.value.trim();
            const email = contactForm.querySelector('#email')?.value.trim();
            const phone = contactForm.querySelector('#phone')?.value.trim();
            const message = contactForm.querySelector('#message')?.value.trim();
            const subjectField = contactForm.querySelector('#subject');
            const subject = subjectField ? subjectField.value.trim() : 'Portfolio inquiry';

            if (!name || !email || !message || (subjectField && !subject)) {
                if (feedback) {
                    feedback.textContent = 'Please complete the required fields before sending.';
                }
                return;
            }

            const emailTarget = contactForm.dataset.email || 'hello@drkaranyadav.com';
            const body = [
                `Name: ${name}`,
                `Email: ${email}`,
                phone ? `Phone: ${phone}` : null,
                '',
                message
            ]
                .filter(Boolean)
                .join('\n');

            const mailto = `mailto:${emailTarget}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.location.href = mailto;

            if (feedback) {
                feedback.textContent = 'Thanks! Your email client is opening now.';
            }
        });
    }

    const hero = document.querySelector('.hero');
    const heroTitle = document.querySelector('.hero-title');
    if (hero && heroTitle) {
        hero.addEventListener('mousemove', (event) => {
            const rect = hero.getBoundingClientRect();
            const x = ((event.clientX - rect.left) / rect.width) * 100;
            const y = ((event.clientY - rect.top) / rect.height) * 100;
            heroTitle.style.setProperty('--spot-x', `${x}%`);
            heroTitle.style.setProperty('--spot-y', `${y}%`);
        });

        hero.addEventListener('mouseleave', () => {
            heroTitle.style.setProperty('--spot-x', '40%');
            heroTitle.style.setProperty('--spot-y', '40%');
        });
    }
})();
