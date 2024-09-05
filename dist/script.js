
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 0) {
        navbar.classList.add('nav-show');
    } else {
        navbar.classList.remove('nav-show');
    }
});

const navDialog = document.getElementById('nav-dialog');
const navLinks = document.querySelectorAll("#nav-dialog a");

function handleMenu() {
    // Toggle the translate and opacity classes
    if (navDialog.classList.contains('translate-x-full')) {
        navDialog.classList.remove('translate-x-full', 'opacity-0');
        navDialog.classList.add('translate-x-0', 'opacity-100');
    } else {
        navDialog.classList.add('translate-x-full', 'opacity-0');
        navDialog.classList.remove('translate-x-0', 'opacity-100');
    }
}

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        // Hide the menu when a link is clicked
        navDialog.classList.add('translate-x-full', 'opacity-0');
        navDialog.classList.remove('translate-x-0', 'opacity-100');
    });
});