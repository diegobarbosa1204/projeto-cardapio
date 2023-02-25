function rolarLanches() {
    let hLanches = document.getElementById("itens0").offsetTop;
    Number(hLanches);
    window.scroll(0, hLanches-12);
}

function rolarSobremesas() {
    let hSobremesas = document.getElementById("itens1").offsetTop;
    Number(hSobremesas);
    window.scroll(0, hSobremesas-12);
}

function rolarCafes() {
    let hCafes = document.getElementById("itens2").offsetTop;
    Number(hCafes);
    window.scroll(0, hCafes-12);
}

function rolarBebidas() {
    let hBebidas = document.getElementById("itens3").offsetTop;
    Number(hBebidas);
    window.scroll(0, hBebidas-12);
}

function rolarBebidasAlcoolicas() {
    let hBebidasAlcoolicas = document.getElementById("itens4").offsetTop;
    Number(hBebidasAlcoolicas);
    window.scroll(0, hBebidasAlcoolicas-12);
}

function rolarCima() {
    window.scroll(0, 0);
}