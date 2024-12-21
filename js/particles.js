// particles.js
document.addEventListener('DOMContentLoaded', () => {
    const particlesContainer = document.getElementById('particles');
    let particles = [];

    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = Math.random() * 3 + 1;
            this.speedX = Math.random() * 2 - 1;
            this.speedY = Math.random() * 2 - 1;
            this.opacity = Math.random() * 0.5 + 0.1;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x < 0 || this.x > window.innerWidth) this.speedX *= -1;
            if (this.y < 0 || this.y > window.innerHeight) this.speedY *= -1;
        }

        draw() {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.left = `${this.x}px`;
            particle.style.top = `${this.y}px`;
            particle.style.width = `${this.size}px`;
            particle.style.height = `${this.size}px`;
            particle.style.backgroundColor = `rgba(255, 255, 255, ${this.opacity})`;
            particle.style.borderRadius = '50%';
            particle.style.pointerEvents = 'none';
            return particle;
        }
    }

    function initParticles() {
        const numberOfParticles = Math.floor(window.innerWidth / 20);

        for (let i = 0; i < numberOfParticles; i++) {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            particles.push(new Particle(x, y));
        }
    }

    function animate() {
        if (!particlesContainer) return;

        particlesContainer.innerHTML = '';

        particles.forEach(particle => {
            particle.update();
            particlesContainer.appendChild(particle.draw());
        });

        requestAnimationFrame(animate);
    }

    function handleResize() {
        if (!particlesContainer) return;

        particles = [];
        initParticles();

        particlesContainer.style.width = `${window.innerWidth}px`;
        particlesContainer.style.height = `${window.innerHeight}px`;
    }

    // Initialize
    if (particlesContainer) {
        particlesContainer.style.position = 'absolute';
        particlesContainer.style.top = '0';
        particlesContainer.style.left = '0';
        particlesContainer.style.width = '100%';
        particlesContainer.style.height = '100%';
        particlesContainer.style.overflow = 'hidden';
        particlesContainer.style.pointerEvents = 'none';

        initParticles();
        animate();

        window.addEventListener('resize', handleResize);
    }

    // Optional: Add mouse interaction
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        particles.forEach(particle => {
            const dx = mouseX - particle.x;
            const dy = mouseY - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
                const angle = Math.atan2(dy, dx);
                particle.speedX -= Math.cos(angle) * 0.2;
                particle.speedY -= Math.sin(angle) * 0.2;
            }
        });
    });
});