function selecionarFabricante() {
    let fabricante = document.getElementById("fab").value;

    if (fabricante == "henry") {
        window.location.href = '../henry/ponto.html';
    } else {
        window.location.href = '../controlid/ponto.html';
    }

}