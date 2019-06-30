function enviarDescricaoProduto() {
    let produto = document.title;
    window.location.href = '../contato/contato.html?produto=' + produto;
}
