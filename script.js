document.addEventListener('DOMContentLoaded', function() {
    const novedades = [
        {
            id: 1,
            title: "Santa Biblia para Mujer",
            Price: "680",
            imgSrc: ["images/1960/IMG_3137-Morada flores.jpeg", "images/1960/IMG_3138-Morada flores.jpeg"]
        },
        {
            id: 2,
            title: "Santa Biblia para Mujer",
            Price: "850",
            imgSrc: ["images/1960/IMG_3139.jpeg", "images/1960/IMG_3140.jpeg"]
        },
        {
            id: 3,
            title: "Santa Biblia",
            Price: "600",
            imgSrc: ["images/1960/IMG_3143.JPG", "images/1960/IMG_3144.JPG"]
        },
        {
            id: 4,
            title: "Santa Biblia Holman para premios",
            Price: "750",
            imgSrc: ["images/1960/IMG_3145.JPG", "images/1960/IMG_3146.JPG"]
        }
    ];

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

        const Price = document.createElement('div');
        Price.className = 'price';
        Price.textContent = `Precio: $${novedad.Price}`;
        novedadElement.appendChild(Price);

        novedadElement.addEventListener('click', function() {
            window.location.href = `detail.html?id=${novedad.id}`;
        });

        col.appendChild(novedadElement);
        container.appendChild(col);
    });
});
