// main.js
document.addEventListener('DOMContentLoaded', () => {
    // Particles Animation
    const particlesContainer = document.getElementById('particles');

    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';

        const size = Math.random() * 3 + 1;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        const startPos = Math.random() * 100;
        particle.style.left = `${startPos}%`;
        particle.style.top = '-20px';

        particlesContainer.appendChild(particle);

        const animation = particle.animate([
            { transform: 'translateY(0) rotate(0)', opacity: 1 },
            { transform: `translateY(${window.innerHeight}px) rotate(360deg)`, opacity: 0 }
        ], {
            duration: Math.random() * 2000 + 3000,
            easing: 'linear'
        });

        animation.onfinish = () => particle.remove();
    }

    setInterval(createParticle, 100);

    // Typing Animation
    const roles = ['Flutter Developer', 'Mobile App Expert', 'UI/UX Enthusiast'];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const roleElement = document.getElementById('role-text');

    function typeRole() {
        const currentRole = roles[roleIndex];

        if (isDeleting) {
            roleElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            roleElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 100 : 200;

        if (!isDeleting && charIndex === currentRole.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex++;
            if (roleIndex === roles.length) roleIndex = 0;
            typeSpeed = 500;
        }

        setTimeout(typeRole, typeSpeed);
    }

    typeRole();

    // Mobile Menu
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });

                if (mobileMenu.classList.contains('active')) {
                    menuBtn.classList.remove('active');
                    mobileMenu.classList.remove('active');
                }
            }
        });
    });

    // Scroll Animation
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
});