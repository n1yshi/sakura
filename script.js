document.querySelector('.cta-button').addEventListener('click', function() {
    window.open('placeholderforurl(i add it when im finished)', '_blank');
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });


document.addEventListener('DOMContentLoaded', function() {
    const animatedSections = document.querySelectorAll('.features, .status');

    animatedSections.forEach(section => {
        observer.observe(section);
    });
});
