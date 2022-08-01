const botaoMenu = document.querySelector('.cabecalho__button');
const menu = document.querySelector('.menu-lateral');
const logo = document.querySelector(".imagem__darkmode");

// MENU LATERAL MOBILE
botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral--ativo')
})

var toggle = "light"

function darkMode() {
    var element = document.body;

    element.classList.toggle("dark-mode");

    if (toggle == "light") {
        toggle = "dark";
        logo.src = "img/sol_1.svg";
    } else {
        toggle = "light";
        logo.src = "img/lua_1.svg";
    }
}

