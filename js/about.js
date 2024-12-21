// about.js
document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');

                // Add staggered animation for expertise cards
                if (entry.target.classList.contains('expertise-grid')) {
                    const cards = entry.target.querySelectorAll('.expertise-card');
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, index * 200);
                    });
                }

                // Add staggered animation for skill chips
                if (entry.target.classList.contains('skills-container')) {
                    const chips = entry.target.querySelectorAll('.skill-chip');
                    chips.forEach((chip, index) => {
                        setTimeout(() => {
                            chip.style.opacity = '1';
                            chip.style.transform = 'translateY(0)';
                        }, index * 100);
                    });
                }
            }
        });
    }, observerOptions);

    // Observe elements with animations
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(element => observer.observe(element));

    // Add initial animation states
    const expertiseCards = document.querySelectorAll('.expertise-card');
    expertiseCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.5s ease';
    });

    const skillChips = document.querySelectorAll('.skill-chip');
    skillChips.forEach(chip => {
        chip.style.opacity = '0';
        chip.style.transform = 'translateY(30px)';
        chip.style.transition = 'all 0.3s ease';
    });
});