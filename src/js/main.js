/* Your JS here. */
console.log('Hello World!')

// Navbar
// Resizing
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function () {
    if (window.scrollY > 60) {
        navbar.classList.add('navbar--scrolled');
    } else {
        navbar.classList.remove('navbar--scrolled');
    }
});

window.addEventListener('load', function () {
    navbar.classList.add('navbar--ready');
});

// Position Indicator
const sections = document.querySelectorAll('section, footer');
const navLinks = document.querySelectorAll('nav a');

function updateActiveLink() {
    let currentId = '';

    sections.forEach(function (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 65) {
            currentId = section.id;
        }
    });

    // Footer
    const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 2;
    if (isAtBottom) {
        currentId = sections[sections.length - 1].id;
    }

    navLinks.forEach(function (link) {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentId) {
            link.classList.add('active');
        }
    });
}

updateActiveLink();
window.addEventListener('scroll', updateActiveLink);
