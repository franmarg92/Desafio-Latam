
const propiedades_venta = [
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        banos: 4,
        costo: 5000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        banos: 1,
        costo: 1200,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 3,
        banos: 3,
        costo: 4500,
        smoke: false,
        pets: true
    },

    {
        nombre: 'Cabaña de lujo',
        src: 'https://imgar.zonapropcdn.com/avisos/resize/1/00/53/98/27/80/1200x1200/1919296341.jpg?isFirstImage=true',
        descripcion: 'Cabaña equipada para pasar un lindo invierno y excelentes vistas',
        ubicacion: 'Chapelco Golf Club, Chapelco Golf & Resort, San Martín de los Andes',
        habitaciones: 5,
        banos: 3,
        costo: 9000,
        smoke: false,
        pets: true
    },

    {
        nombre: 'Casa con terraza panorámica',
        src: 'https://imgar.zonapropcdn.com/avisos/resize/1/00/53/95/03/38/1200x1200/1918732739.jpg?isFirstImage=true',
        descripcion: 'Esta Casa de lujo ofrece una terraza con vistas al lago',
        ubicacion: 'Chapelco Golf, San Martin de los Andes, Chapelco Golf & Resort, San Martín de los Andes',
        habitaciones: 4,
        banos: 2,
        costo: 12500,
        smoke: true,
        pets: true
    },

    {
        nombre: 'Penthouse de lujo en San Martin',
        src: 'https://imgar.zonapropcdn.com/avisos/resize/1/00/54/36/40/52/1200x1200/1929299541.jpg?isFirstImage=true',
        descripcion: 'Este penthouse de lujo ofrece buena calefacion para el invierno',
        ubicacion: 'Carlos Lorenzani 0, Los Faldeos de Chapelco, San Martín de los Andes',
        habitaciones: 5,
        banos: 5,
        costo: 8500,
        smoke: false,
        pets: false
    }
];



function presentaInmuebleVenta(propiedades_venta){
    let htmlVenta = `
    <img src="${propiedades_venta.src}" >
    <h2>${propiedades_venta.nombre}</h2>
    <p>${propiedades_venta.descripcion}</p>
    <p><i class="fas fa-map-marker-alt"></i> ${propiedades_venta.ubicacion}</p>
    <p>Habitaciones:  <i class="fas fa-bed"></i> ${propiedades_venta.habitaciones} -  Baños: <i class="fas fa-bath"></i> ${propiedades_venta.banos}</p>
    <p>Costo $: ${propiedades_venta.costo}</p>`;
    if(propiedades_venta.pets){
        htmlVenta += `<p class="acepta"> <i class="fas fa-paw"></i> Se aceptan mascotas</p>`;
    } else {
        htmlVenta += `<p class="noAcepta"> <i class="fa-solid fa-ban"></i>No se aceptan mascotas</p>`;
    }
    if(propiedades_venta.smoke){
        htmlVenta += `<p class="acepta"> <i class="fas fa-smoking"></i> Se permite fumar</p>`;
    } else {
        htmlVenta += `<p class="noAcepta"> <i class="fas fa-smoking-ban"></i>No se permite fumar</p>`;
    }
    return htmlVenta;
}




let divVenta = document.getElementById("inmueblesVenta");
let htmlEnVenta = "";
for (let venta of propiedades_venta){
    const divEnVenta = presentaInmuebleVenta(venta);
    htmlEnVenta += `
    <div class="col-md-3 mt-3 inmueble">${divEnVenta}
    </div>
    `;
}

divVenta.innerHTML = htmlEnVenta;
