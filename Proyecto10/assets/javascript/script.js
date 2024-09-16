// inicio seccion 1 
let elemento1 = document.getElementById('selector1');
let elemento2 = document.getElementById('selector2');
let elemento3 = document.getElementById('selector3');


let validar = document.getElementById("validar");


validar.addEventListener('click', () => {
    
    let password = elemento1.value + elemento2.value + elemento3.value;

    
    if (password === '911' || password === '714') {
        document.getElementById('mensaje').innerText = 'Contraseña correcta';
    } else {
        document.getElementById('mensaje').innerText = 'Contraseña incorrecta';
    }
});
 // fin seccion 1 


 // inicio seccion 2 

 let input1 = document.getElementById('input1');
 let input2 = document.getElementById('input2');
 let input3 = document.getElementById('input3');
 
 let verificar = document.getElementById('verificar');
 
 verificar.addEventListener('click', () => {
    
     let sumaCanidades = Number(input1.value) + Number(input2.value) + Number(input3.value);
 
     let mensajeVerificador = document.querySelector('.mensaje_verificador');
 
     if (sumaCanidades <= 10) {
         mensajeVerificador.innerText = 'Llevas ' + sumaCanidades + ' stickers';
     } else {
         mensajeVerificador.innerText = 'Llevas demasiados stickers';
     }
 });
 

// fin seccion 2 

// inicio seccion 3 

let image = document.getElementById('toggleBorder');


let borderAdded = false;


image.addEventListener('click', () => {
    if (borderAdded) {
        
        image.style.border = 'none';
    } else {
        
        image.style.border = '5px solid red';
    }
    
    borderAdded = !borderAdded;
});

// fin seccion 3 