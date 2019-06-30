window.onload = initPage;

function initPage() {
    //captura a url da página
    let url = window.location.href;
    let res = url.split('=');
    let produto = res[1].split('&');
    let str = new String(produto);

    let replaced = str.split("%20").join(" ");

    document.getElementById('produto').value = replaced;


}

