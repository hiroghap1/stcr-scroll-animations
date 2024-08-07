document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('[data-stcr-animation-type]');

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -20px 0px',
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const animationType = element.getAttribute('data-stcr-animation-type');
                if (animationType && !element.classList.contains('stcr-animated')) {
                    element.classList.add('stcr-animated', `stcr-${animationType}`);
                    observer.unobserve(element);
                }
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});
