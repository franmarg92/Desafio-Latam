const listaDeTareas =[
    { id: 1, descripcion: "Llamar a papá", realizada: false },
    { id: 2, descripcion: "Comprar los regalos", realizada: true },
    { id: 3, descripcion: "Preparar la diapositiva", realizada: false },
    { id: 4, descripcion: "Hacer el informe", realizada: true }
];

ultimoID = listaDeTareas.length;
function actualizarTareas(){
    let htmlTarea = "";
    let totalRealizadas = 0;
    
    let tareas = document.querySelector("#listaTareas");
    for (const tarea of listaDeTareas) {
        let estaCheck = "";
        
        if(tarea.realizada){
            estaCheck = "checked"
            totalRealizadas ++;
        }
        htmlTarea += `  <div class="tareas">
                        <p>${tarea.id}</p>
                        <p>${tarea.descripcion}</p>
                        <input class="checkBox" type="checkbox" ${estaCheck} onclick="tareaRealizada(${tarea.id})" />
                        <button onclick="borrarTarea(${tarea.id})" class="accionBoton" type="button">X</button>
                        </div>
        `
        
    }
    document.querySelector("#realizadas").innerHTML = totalRealizadas;
    tareas.innerHTML = htmlTarea;
    
}
actualizarTareas();


function agregarTarea(event){
    event.preventDefault();
    const nuevaTarea = document.querySelector("#ingresoTarea");
    ultimoID ++;
    listaDeTareas.push({
        id: ultimoID,
        descripcion: nuevaTarea.value,
        realizada: false

    })
    actualizarTareas()
    actilizarTotal();
    
    nuevaTarea.value = "";

    

}

function borrarTarea(id){
    const posicionEliminar = listaDeTareas.findIndex((tarea) => tarea.id ===id);
    listaDeTareas.splice(posicionEliminar, 1);
    actualizarTareas();
    actilizarTotal();
}


const tareaRealizada  = function(id){
    const posicionAgregar = listaDeTareas.findIndex((tarea) => tarea.id ===id);
    listaDeTareas[posicionAgregar].realizada = !listaDeTareas[posicionAgregar].realizada;
    actualizarTareas();
    
}

function actilizarTotal(){
    const totalTareas = listaDeTareas.length;
    spanTotal = document.querySelector("#total");
    spanTotal.innerHTML = totalTareas;


}

actilizarTotal();


