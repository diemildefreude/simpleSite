const header = document.querySelector('.js-header');
const button = document.querySelector('.js-menu-button');
const openMenuImg = document.querySelector('.js-open-img');
let isMenuOpen = false;


button.addEventListener('click', toggleMenu);

function toggleMenu()
{
    isMenuOpen = !isMenuOpen; 
    button.setAttribute('aria-expanded', isMenuOpen);    
    header.classList.toggle('mobile-menu-open', isMenuOpen);
    openMenuImg.classList.toggle('mobile-menu-open', isMenuOpen);
}