function crearElemento  (tagName) {
    return document.createElement(tagName)
}

function crearElementoContexto (tagName, textTag) {
    var elemento = crearElemento(tagName);
    var elemetText = document.createTextNode(textTag);
    elemento.appendChild(elemetText);
    return elemento;
}


function agregarAlBody (elemento) {
    document.body.appendChild(elemento);
}


function agregarHijo  (padre, child) {
    padre.appendChild(child);
}


function crearImagen(urlImagen) {

    var img = crearElemento("img");
    img.src = urlImagen;
    return img;

}