var abrir_menu = document.querySelector("#abrir_menu");
var navegacao = document.querySelector("#navegacao");
abrir_menu.addEventListener('click', menu_abrir);
abrir_menu.addEventListener('touchstart',menu_abrir);
function menu_abrir(event) {
    if(event.type == 'touchstart') event.preventDefault();
   navegacao.classList.toggle('ativo');

}