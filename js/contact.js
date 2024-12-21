// contact.js
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

                // Add staggered animation for social links
                if (entry.target.classList.contains('contact-content')) {
                    const socialLinks = entry.target.querySelectorAll('.social-link');
                    socialLinks.forEach((link, index) => {
                        setTimeout(() => {
                            link.style.opacity = '1';
                            link.style.transform = 'translateY(0)';
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
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.style.opacity = '0';
        link.style.transform = 'translateY(20px)';
        link.style.transition = 'all 0.3s ease';
    });

    // Email copy functionality
    const emailButton = document.querySelector('.email-button');
    if (emailButton) {
        emailButton.addEventListener('click', async (e) => {
            // Prevent default only if the user is on mobile
            if (window.innerWidth <= 600) {
                e.preventDefault();

                try {
                    await navigator.clipboard.writeText('shaikhabubakar983@gmail.com');

                    // Show success message
                    const originalText = emailButton.innerHTML;
                    emailButton.innerHTML = '✓ Email Copied!';

                    setTimeout(() => {
                        emailButton.innerHTML = originalText;
                    }, 2000);
                } catch (err) {
                    // Fallback to default mailto behavior
                    window.location.href = 'mailto:shaikhabubakar983@gmail.com';
                }
            }
        });
    }
});