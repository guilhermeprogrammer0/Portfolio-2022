var abrir_menu = document.querySelector("#abrir_menu");
var menu = document.querySelector("#menu");
var cabecalho = document.querySelector(".cabecalho");
abrir_menu.addEventListener('click', menu_abrir);
function menu_abrir() {
    if (menu.style.display == 'none') {
        menu.style.display = 'block';
        cabecalho.classList.add('ativo')
    }
    else {
        menu.style.display = 'none';
        cabecalho.classList.remove("ativo")
    }
}