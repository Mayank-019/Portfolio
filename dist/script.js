
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 0) {
        navbar.classList.add('nav-show');
    } else {
        navbar.classList.remove('nav-show');
    }
});
