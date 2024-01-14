document.addEventListener('DOMContentLoaded', () => {
    const propiedades_alquiler = [
        {
            nombre: 'Departamento Unico',
            src: 'https://http2.mlstatic.com/D_NQ_NP_605030-MLC72528515756_102023-O.webp://http2.mlstatic.com/D_NQ_NP_833207-MLC50541607243_072022-O.webp',
            descripcion: 'Con gastos comunes fijos, administración propia, Wi-Fi en todos los espacios comunes.',
            ubicacion: 'Escanilla 1035, Independencia, Chile, Hospitales, Independencia, RM (Metropolitana)',
            habitaciones: '1 a 2',
            baños: '1 a 2',
            costo: '278.250',
            smoke: true,
            pets: true
        },
        {
            nombre: 'Avellanos',
            src: 'https://http2.mlstatic.com/D_NQ_NP_846599-MLC73684580813_122023-O.webp',
            descripcion: 'En Blue Home somos únicos dueños de nuestros edificios lo que nos permite entregar la mejor experiencia de arriendo en Chile.',
            ubicacion: 'Los Avellanos 2551, Ñuñoa, Chile, Estadio Nacional, Ñuñoa, RM (Metropolitana)',
            habitaciones: '1 a 2',
            baños: '1 a 2',
            costo: '330.072',
            smoke: false,
            pets: true,
        },
        {
            nombre: 'Home Inclusive Carmen',
            src: 'https://http2.mlstatic.com/D_NQ_NP_804406-MLC73688510083_122023-O.webp',
            descripcion: 'Home Inclusive te ofrece un moderno edificio para arriendo.',
            ubicacion: 'Carmen 668, Santiago, Chile, Barrio Diez de Julio, Santiago, RM (Metropolitana)',
            habitaciones: '1 a 2',
            baños: '1 a 2',
            costo: '322.910',
            smoke: true,
            pets: true,
        },
        {
            nombre: 'Edificio Seminario',
            src: 'https://http2.mlstatic.com/D_NQ_NP_758710-MLC48874367183_012022-O.webp',
            descripcion: 'Edificio Seminario posee una gran ubicación, excelente conectividad a pasos del barrio Italia.',
            ubicacion: 'Tucapel 261, Metro Irarrázaval, Ñuñoa, RM (Metropolitana)',
            habitaciones: '1 a 3',
            baños: '1 a 2',
            costo: '360.910',
            smoke: true,
            pets: false,
        },
        {
            nombre: 'Santa Victoria',
            src: 'https://http2.mlstatic.com/D_NQ_NP_778211-MLC70045042430_062023-O.webp',
            descripcion: 'Inmueble se encuentra ubicado en sector residencial en La Florida y con excelente conectividad a través Rojas Magallanes',
            ubicacion: 'Santa Victoria 9448, La Florida, Chile, La Florida Alto, La Florida, RM (Metropolitana)',
            habitaciones: '3',
            baños: '2',
            costo: '290.000',
            smoke: true,
            pets: false,
        },
        {
            nombre: 'Torres de Vicuña Mackenna',
            src: 'https://http2.mlstatic.com/D_NQ_NP_653785-MLC71776807014_092023-O.webp',
            descripcion: 'La mejor ubicación a pasos del metro, no se pierda la oportunidad.',
            ubicacion: 'Av. Vicuña Mackenna Pte. 6456, Metro Mirador, La Florida, RM (Metropolitana)',
            habitaciones: '2',
            baños: '1',
            costo: '382.000',
            smoke: true,
            pets: true,
        },
    ];

const propiedadesAlquiler = document.getElementById('alquiler')
let html = ""
for (let alquiler of propiedades_alquiler){  //Metodo for of
    html += `
<div class="col-md-4 mb-4">
   <div class="card">
     <img src="${alquiler.src}" class="card-img-top" alt="Imagen del departamento">
     <div class="card-body">
       <h5 class="card-title">${alquiler["nombre"]}</h5>
       <p class="card-text">${alquiler.descripcion}</p>
       <p>
         <i class="fas fa-map-marker-alt"></i> ${alquiler.ubicacion}
       </p>
       <p>
         <i class="fas fa-bed"></i> ${alquiler.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${alquiler.baños} Baños
       </p>
       <p>
         <i class="fas fa-dollar-sign"></i> ${alquiler.costo}
       </p>
       <p class="${alquiler.smoke ? 'text-success' : 'text-danger'}">
         <i class="fas ${alquiler.smoke ? 'fa-smoking' : 'fa-smoking-ban'}"></i> ${alquiler.smoke ? 'Permitido fumar' : 'No se permite fumar'}
       </p>
       <p class="${alquiler.pets ? 'text-success' : 'text-danger'}">
         <i class="fas ${alquiler.pets ? 'fa-paw' : 'fa-ban'}"></i> ${alquiler.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
       </p>
     </div>
   </div>
 </div>
    `
}
propiedadesAlquiler.innerHTML = html
});