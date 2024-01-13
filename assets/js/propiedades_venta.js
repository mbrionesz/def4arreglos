document.addEventListener('DOMContentLoaded', () => {
    const propiedades_venta = [
        {
            nombre: 'Apartamento de lujo en zona exclusiva',
            src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
            descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
            ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
            habitaciones: 4,
            baños: 4,
            costo: 5000,
            smoke: false,
            pets: false
        },
        // ... otras propiedades
        {
            nombre: 'Apartamento de lujo en zona exclusiva',
            src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
            descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
            ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
            habitaciones: 4,
            baños: 4,
            costo: 50002,
            smoke: false,
            pets: false
        },
    ];

    function renderizarPropiedadesVenta() {
        let htmlVenta = '';
        propiedades_venta.forEach(propiedad => {
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


