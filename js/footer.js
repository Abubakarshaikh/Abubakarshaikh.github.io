// footer.js
document.addEventListener('DOMContentLoaded', () => {
    // Update current year
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Scroll to top functionality
    const scrollButton = document.getElementById('scrollToTop');

    if (scrollButton) {
        // Show/hide scroll button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                scrollButton.classList.add('visible');
            } else {
                scrollButton.classList.remove('visible');
            }
        });

        // Smooth scroll to top
        scrollButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Social links hover animation
    const socialLinks = document.querySelectorAll('.footer-social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'scale(1.2)';
        });

        link.addEventListener('mouseleave', () => {
            link.style.transform = 'scale(1)';
        });
    });
});