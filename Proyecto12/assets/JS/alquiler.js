const propiedades_alquiler = [
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        banos: 2,
        costo:  2000,
        smoke: false,
        pets: true
    },

    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar.',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 3,
        banos: 3,
        costo:  2500,
        smoke: true,
        pets: true
    },

    {
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        banos: 2,
        costo:  2200,
        smoke: false,
        pets: false
    }
    ]




function presentaInmueble(propiedades_alquiler){

    let htmlAlquiler = `
    <img src="${propiedades_alquiler.src}" >
    <h2>${propiedades_alquiler.nombre}</h2>
    <p>${propiedades_alquiler.descripcion}</p>
    <p><i class="fas fa-map-marker-alt"></i> ${propiedades_alquiler.ubicacion}</p>
    <p>Habitaciones:  <i class="fas fa-bed"></i> ${propiedades_alquiler.habitaciones} -  Baños: <i class="fas fa-bath"></i> ${propiedades_alquiler.banos}</p>
    <p>Costo $: ${propiedades_alquiler.costo}</p>
`;
    if(propiedades_alquiler.pets === true){
       htmlAlquiler += `<p class="acepta"> <i class="fas fa-paw"></i> Se aceptan mascotas</p>`
    } else{
        htmlAlquiler += `<p class="noAcepta"> <i class="fa-solid fa-ban"></i>No se aceptan mascotas</p>`

    }

    if(propiedades_alquiler.smoke === true){
        htmlAlquiler += `<p class="acepta"> <i class="fas fa-smoking"></i></i> Se permite fumar</p>`
     } else{
         htmlAlquiler += `<p class="noAcepta"> <i class="fas fa-smoking-ban"></i></i>No se permite fumar</p>`
     }
    return htmlAlquiler;
}

const divAlquiler = document.querySelector("#inmueblesAlquiler");
let htmlEnAlquiler = ""

for (propiedad of propiedades_alquiler){
    const divEnAlquiler = presentaInmueble(propiedad);

    htmlEnAlquiler += `
    <div class=" col-md-3 inmueble ">
    ${divEnAlquiler}
    </div>
    `

}

divAlquiler.innerHTML = htmlEnAlquiler;
