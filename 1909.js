document.addEventListener('DOMContentLoaded', function() {
    /*const novedades = [
         {
            id: 2,
            editorial: "Biblia [Mundo Biblia",
            letra: "Letra Grande 12 Puntos",
            tamaño: "138x212mm",
            paginas: "300 pg",
            Precio: "450",
            imgSrc: ["...", "..."]
        },

        {
            id: 3,
            title: "Hechos 13-28 para ti",
            author: "R. Albert Mohler, Jr.",
            oldPrice: "233.81",
            newPrice: "210.43",
            imgSrc: ["path/to/image3.jpg", "path/to/image3-2.jpg"]
        },
        {
            id: 4,
            title: "Sorprendido por Jesús",
            author: "Dane Ortlund",
            oldPrice: "233.81",
            newPrice: "210.43",
            imgSrc: ["path/to/image4.jpg", "path/to/image4-2.jpg"]
        }
    ];
*/
    const container = document.getElementById('novedadesContainer');

    novedades.forEach(novedad => {
        const col = document.createElement('div');
        col.className = 'col-md-3 col-sm-6 mb-4';

        const novedadElement = document.createElement('div');
        novedadElement.className = 'novedad';
        novedadElement.dataset.id = novedad.id;

        const image = document.createElement('img');
        image.src = novedad.imgSrc[0];
        novedadElement.appendChild(image);

        const title = document.createElement('div');
        title.className = 'title';
        title.textContent = novedad.title;
        novedadElement.appendChild(title);

        if (novedad.editorial) {
            const editorial = document.createElement('div');
            editorial.className = 'editorial';
            editorial.textContent = `Editorial: ${novedad.editorial}`;
            novedadElement.appendChild(editorial);
        }

        if (novedad.letra) {
            const letra = document.createElement('div');
            letra.className = 'letra';
            letra.textContent = `Letra: ${novedad.letra}`;
            novedadElement.appendChild(letra);
        }

        if (novedad.tamaño) {
            const tamaño = document.createElement('div');
            tamaño.className = 'tamaño';
            tamaño.textContent = `Tamaño: ${novedad.tamaño}`;
            novedadElement.appendChild(tamaño);
        }

        if (novedad.paginas) {
            const paginas = document.createElement('div');
            paginas.className = 'paginas';
            paginas.textContent = `Páginas: ${novedad.paginas}`;
            novedadElement.appendChild(paginas);
        }

        const Precio = document.createElement('div');
        Precio.className = 'Precio';
        Precio.textContent = `Precio: $${novedad.Precio}`;
        novedadElement.appendChild(Precio);

        novedadElement.addEventListener('click', function() {
            window.location.href = `detail.html?id=${novedad.id}`;
        });

        col.appendChild(novedadElement);
        container.appendChild(col);
    });
});
