function pintar(variable, color = 'green'){
    variable.style.backgroundColor = color;
}

let nuevoDiv;

 function crearDiv(){
     nuevoDiv = document.createElement("div");
        nuevoDiv.classList.add("colores");
        nuevoDiv.textContent = "Nuevo div";
        container.appendChild(nuevoDiv);
 }

    

var colores = document.querySelector(".colores");


const container = document.querySelector(".container");

document.addEventListener('keydown', function (event) {
    console.log('Tecla presionada:', event.key);
    if (event.key === 'a') {
        pintar(colores, 'pink');
    } else if (event.key === 's') {
        pintar(colores, 'orange');
    } else if (event.key === 'd') {
        pintar(colores, '#87CEEB');
    } else if (event.key === 'q') {
        
        crearDiv()
        pintar(nuevoDiv, '#800080');
    } else if (event.key === 'w') {
        
        crearDiv()
        pintar(nuevoDiv, '#cdcdcd');
    } else if (event.key === 'e') {
        crearDiv()
               
        pintar(nuevoDiv, '#6F4E37');
    }
});