// document.addEventListener('DOMContentLoaded', () => {
//     let lastScrollTop = 0;
//     const navbar = document.querySelector('nav');

//     window.addEventListener('scroll', () => {
//         let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//         if (scrollTop > lastScrollTop) {
//             // Scrolling down
//             navbar.classList.add('nav-hidden');
//             navbar.classList.remove('nav-visible');
//         } else {
//             // Scrolling up
//             navbar.classList.add('nav-visible');
//             navbar.classList.remove('nav-hidden');
//         }

//         lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
//     });
// });

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 0) {
        navbar.classList.add('nav-show');
    } else {
        navbar.classList.remove('nav-show');
    }
});
