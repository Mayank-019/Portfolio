
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
    navDialog.classList.toggle('hidden');
}

// Close the navbar when clicking on a navigation link
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navDialog.classList.add('hidden');
    });
});