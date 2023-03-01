const menuBtn = document.querySelector('.burger-menu');
const menuList = document.querySelector('.menu-list');

menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('active');
});