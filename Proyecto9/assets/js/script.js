var precio = 400000;
var cantidadProducto = 1;

function actilizarTotal(){
    var valorTotal = cantidadProducto * precio;
    var spanTotal = document.querySelector('.valor-total');
    spanTotal.innerHTML = valorTotal;
}



var precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

var cantidadSpan = document.querySelector(".cantidad");
cantidadSpan.innerHTML = cantidadProducto;

var botonSumar = document.querySelector(".boton-sumar");
var botonRestar = document.querySelector(".boton-restar");

botonSumar.addEventListener('click', () => {
    cantidadProducto = cantidadProducto + 1;
    cantidadSpan.innerHTML = cantidadProducto;
    actilizarTotal(); 
});
botonRestar.addEventListener('click', () => {
    cantidadProducto = cantidadProducto - 1 ;
    cantidadSpan.innerHTML = cantidadProducto; 
    actilizarTotal();
});



