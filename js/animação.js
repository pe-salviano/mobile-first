function typeWrite(elemento) {
    const textoBanner = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoBanner.forEach((letra, i) => {
        setTimeout(function(){
            elemento.innerHTML += letra;
        }, 150 * i)
    });
}
const tituloBanner = document.querySelector('.banner__titulo');
typeWrite(tituloBanner);
