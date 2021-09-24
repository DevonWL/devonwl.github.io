
/* change menuBtn to menuBtn.open */
const menuBtn = document.querySelector('.menu-btn');
const navBar = document.querySelector('.nav-bar');
const mainContent = document.querySelector('.main-content');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
        navBar.classList.add('open')
        mainContent.classList.add('open');

    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
        navBar.classList.remove('open');
        mainContent.classList.remove('open');
    }
})


