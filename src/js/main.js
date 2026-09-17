/* Your JS here. */
console.log('Hello World!')

// Navbar
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function () {
    console.log(window.scrollY);

    if (window.scrollY > 60) {
        navbar.classList.add('navbar--scrolled');
    } else {
        navbar.classList.remove('navbar--scrolled');
    }
});

window.addEventListener('load', function () {
    navbar.classList.add('navbar--ready');
});
