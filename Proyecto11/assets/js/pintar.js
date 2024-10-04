    const elemento = document.getElementById("ele1")

    function pintar(variable, color = 'green'){
        variable.style.backgroundColor = color;
        }

     elemento.addEventListener("click", function(){
         pintar( elemento, 'yellow')
     });


    pintar(elemento)
    


    const caja = document.querySelector(".caja")


  