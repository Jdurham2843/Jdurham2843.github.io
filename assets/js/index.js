 document.getElementById('menu').onclick = toggleMenu;  



function toggleMenu() {
    let menu = document.getElementById('drop-down');
    if (menu.classList.contains('show-menu')) {
        menu.classList.remove('show-menu');
        menu.classList.add('hide-menu');
    } else {
        menu.classList.remove('hide-menu');
        menu.classList.add('show-menu');
    }
}