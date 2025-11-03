// TYPING EFFECT
const typed = new Typed('#typed', {
    strings: ["Web Developer", "Software Developer", "Full Stack Developer"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
});

// BACK TO TOP BUTTON
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// AUTO CURRENT YEAR
const year = document.getElementById('year');
year.textContent = new Date().getFullYear();
