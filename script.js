const revealItems = document.querySelectorAll('.reveal');
const heroArt = document.querySelector('.hero-art');

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.14 });

    revealItems.forEach((item) => observer.observe(item));
} else {
    revealItems.forEach((item) => item.classList.add('visible'));
}

window.addEventListener('pointermove', (event) => {
    if (!heroArt || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const x = (event.clientX / window.innerWidth - 0.5) * 10;
    const y = (event.clientY / window.innerHeight - 0.5) * 10;
    heroArt.style.transform = `scale(1.025) translate(${x}px, ${y}px)`;
});
