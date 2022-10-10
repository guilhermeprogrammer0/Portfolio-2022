var abrir_menu = document.querySelector("#abrir_menu");
var navegacao = document.querySelector("#navegacao");
abrir_menu.addEventListener('click', menu_abrir);
abrir_menu.addEventListener('touchstart',menu_abrir);
function menu_abrir(event) {
    if(event.type == 'touchstart') event.preventDefault();
   navegacao.classList.toggle('ativo');

}
var back_top = document.querySelector("#back_top");
back_top.addEventListener('click',voltar_topo);

function voltar_topo()
{
    window.scrollTo(0,0);
}