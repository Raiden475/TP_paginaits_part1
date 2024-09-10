document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const menu = document.getElementById('menu');
    const menuClose = document.getElementById('menu-close');

    menuIcon.addEventListener('click', () => {
        menu.classList.add('open');
    });

    menuClose.addEventListener('click', () => {
        menu.classList.remove('open');
    });
});
