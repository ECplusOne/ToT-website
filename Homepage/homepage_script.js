// Applies the rotation animation
function menuAnimation(x) {
    x.classList.toggle("rotate");
}

// Testing this to switch between navbar and hamburger menu
function toggleMenu(){
    document.querySelector('nav').classList.toggle('active');
    document.querySelector('menu-container').classList.toggle('active');
}