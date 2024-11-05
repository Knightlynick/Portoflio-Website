// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle navigation menu on smaller screens
const navToggle = document.createElement('button');
navToggle.classList.add('nav-toggle');
navToggle.innerText = 'Menu';

const navbar = document.querySelector('.navbar');
navbar.appendChild(navToggle);

navToggle.addEventListener('click', () => {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
});