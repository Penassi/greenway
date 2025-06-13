// selecionando ekementos no HTML

let menu = document.getElementById("menu")
let iconebarras = document.getElementById("iconebarras")
let iconeX = document.getElementById("iconeX")

function abrefechamenu() {

    // se o menu esta fechado 
    if (menu.classList.contains("menu-fechado")) {

        // abrir o menu
        menu.classList.remove("menu-fechado")


        // mostrar o icone x
        iconeX.style.display = "inline"

        // esconder o icone barras
        iconebarras.style.display = "none"


    }

    else {
        // fechar o menu
        menu.classList.add("menu-fechado")

        // esconder o menu icone x

        iconeX.style.display = "none"

        // mostrar o icone barras
        iconebarras.style.display = "inline"
    }

}

onresize = () => {
    menu.classList.remove("menu-fechado")

    // mostra o icone x

    iconeX.style.display = "inline"

    // esconda o icone barras

    iconebarras.style.display = "none"

}