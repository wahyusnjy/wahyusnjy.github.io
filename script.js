// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking on a link
const mobileLinks = document.querySelectorAll('#mobile-menu a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// Contact form submission
const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simulate form submission
    setTimeout(() => {
        contactForm.reset();
        formSuccess.classList.remove('hidden');
        
        setTimeout(() => {
            formSuccess.classList.add('hidden');
        }, 3000);
    }, 1000);
});

// Animate skill bars when they come into view
const skillBars = document.querySelectorAll('.skill-bar');

const animateSkillBars = () => {
    skillBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        const isVisible = (rect.top <= window.innerHeight) && (rect.bottom >= 0);
        
        if (isVisible && !bar.hasAttribute('data-animated')) {
            bar.setAttribute('data-animated', 'true');
        }
    });
};

// Initial check
animateSkillBars();

// Check on scroll
window.addEventListener('scroll', animateSkillBars);