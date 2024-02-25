var indice = 0;

function mostrarImagenes(n) {
    var i;
    var elementos = document.getElementsByClassName("carrusel-imagenes")[0].children;
    if (n >= elementos.length) { indice = 0 }
    if (n < 0) { indice = elementos.length - 1 }
    for (i = 0; i < elementos.length; i++) {
      elementos[i].style.display = "none";
    }
    elementos[indice].style.display = "block";
  }
  
  mostrarImagenes(indice);
  
  function mover(n) {
    mostrarImagenes(indice += n);
  }
  
