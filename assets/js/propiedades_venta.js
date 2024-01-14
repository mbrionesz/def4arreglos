document.addEventListener('DOMContentLoaded', () => {
    const propiedades_venta = [
        {
            nombre: 'Apartamento de lujo en zona exclusiva',
            src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
            descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
            ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
            habitaciones: 4,
            baños: 4,
            costo: "5.000",
            smoke: false,
            pets: false
        },
        {
            nombre: 'Apartamento acogedor en la montaña',
            src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
            descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
            ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
            habitaciones: 2,
            baños: 1,
            costo: "1.200",
            smoke: true,
            pets: true
        },
        {
            nombre: 'Penthouse de lujo con terraza panorámica',
            src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
            descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
            ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
            habitaciones: 3,
            baños: 3,
            costo: '4.500',
            smoke: false,
            pets: true
        },
        {
            nombre: 'Condominio los Nogales II',
            src: 'https://http2.mlstatic.com/D_NQ_NP_817408-MLC53948835544_022023-O.webp',
            descripcion: 'Un proyecto para llenar las nuevas historias',
            ubicacion: 'Av. Santa Leonor 400, Padre Hurtado, RM (Metropolitana)',
            habitaciones: 3,
            baños: 3,
            costo: "4.890",
            smoke: true,
            pets: true,
        },
        {
            nombre: 'Edificio Step',
            src: 'https://http2.mlstatic.com/D_NQ_NP_812412-MLC54249901497_032023-O.webp',
            descripcion: 'Edificio Step fue concebido en una ubicación privilegiada, con espacios de vanguardia y departamentos para disfrutar tu vida a pasos de todo.',
            ubicacion: 'Marchant Pereira 3350, Metro Ñuñoa, Ñuñoa, RM (Metropolitana)',
            habitaciones: '1 a 2',
            baños: 1,
            costo: "2.550",
            smoke: true,
            pets: false
        },
        {
            nombre: 'Karun',
            src: 'https://http2.mlstatic.com/D_NQ_NP_833207-MLC50541607243_072022-O.webp',
            descripcion: 'En un barrio residencial de Vitacura, con una excelente conectividad, cercano a colegios.',
            ubicacion: 'El Arcángel 4710, Pío XI, Vitacura, RM (Metropolitana)',
            habitaciones: '2 a 3',
            baños: '2 a 3',
            costo: "11.047",
            smoke: false,
            pets: true
        },

    ];

    function renderizarPropiedadesVenta() {
        let htmlVenta = '';
        propiedades_venta.forEach(propiedad => {  // Metodo con forEach
            htmlVenta += `
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="${propiedad.src}" class="card-img-top" alt="Imagen del departamento">
                        <div class="card-body">
                            <h5 class="card-title">${propiedad.nombre}</h5>
                            <p class="card-text">${propiedad.descripcion}</p>
                            <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
                            <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${propiedad.baños} Baños</p>
                            <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
                            <p class="${propiedad.smoke ? 'text-success' : 'text-danger'}">
                                <i class="fas ${propiedad.smoke ? 'fa-smoking' : 'fa-smoking-ban'}"></i> ${propiedad.smoke ? 'Permitido fumar' : 'No se permite fumar'}
                            </p>
                            <p class="${propiedad.pets ? 'text-success' : 'text-danger'}">
                                <i class="fas ${propiedad.pets ? 'fa-paw' : 'fa-ban'}"></i> ${propiedad.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
                            </p>
                        </div>
                    </div>
                </div>
            `;
        });

        document.getElementById('venta').innerHTML = htmlVenta;
    }

    renderizarPropiedadesVenta();
});


