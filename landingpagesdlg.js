// Navigation function for navbar links to go to the clicked page
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            const targetElement = document.querySelector(href);
            if (targetElement) {
                // Smooth scroll to the section on the same page
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            } else {
                // Navigate to the corresponding page
                if (href === '#video') {
                    window.location.href = 'videoanimasi.html';
                } else {
                    window.location.href = href.slice(1) + '.html';
                }
            }
        } else {
            // Navigate to the external page
            window.location.href = href;
        }
    });
});

// Add active class to navbar links based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Simple animation for hero button on click
document.querySelector('.btn-petualang').addEventListener('click', function() {
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 150);
});

// HAMBURGER MENU TOGGLE
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('show');
});

