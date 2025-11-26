// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', function() {
    // Create all icons
    lucide.createIcons();
});

// Smooth scroll function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Scroll animation observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections for animation on scroll
window.addEventListener('load', function() {
    const animatedElements = document.querySelectorAll(
        '.problem-card, .solution-card, .journey-card, .credit-card, .roadmap-card, .benefit-card, .revenue-card'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add scroll event listener for header effect (if needed)
window.addEventListener('scroll', function() {
    const scrolled = window.scrollY > 50;
    // You can add navbar effects here if needed
});

// Add hover effects for interactive elements
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});