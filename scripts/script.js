var abrir_menu = document.querySelector("#abrir_menu");
var navegacao = document.querySelector("#navegacao");
abrir_menu.addEventListener('click', menu_abrir);
function menu_abrir() {
   navegacao.classList.toggle('ativo');

}