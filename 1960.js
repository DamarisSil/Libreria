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
        },
        {
            id: 5,
            title: "Santa Biblia Grande",
            Price: "950",
            imgSrc: ["images/1960/IMG_3147.jpeg", "images/1960/IMG_3148.jpeg"]
        },
        {
            id: 6,
            title: "Santa Biblia XV",
            Price: "800",
            imgSrc: ["images/1960/IMG_3151.jpeg", "images/1960/IMG_3152.jpeg"]
        },
        {
            id: 7,
            title: "Santa Biblia",
            Price: "600",
            imgSrc: ["images/1960/IMG_3153.jpeg", "images/1960/IMG_3154.jpeg"]
        },
        {
            id: 8,
            title: "Santa Biblia Aguila",
            Price: "750",
            imgSrc: ["images/1960/IMG_3157.jpeg", "images/1960/IMG_3158.jpeg"]
        },
        {
            id: 9,
            title: "Santa Biblia para Faro",
            Price: "450",
            imgSrc: ["images/1960/IMG_3159.jpeg", "images/1960/IMG_3160.jpeg"]
        },
        {
            id: 10,
            title: "Santa Biblia para mujer",
            Price: "680",
            imgSrc: ["images/1960/IMG_3161.JPG", "images/1960/IMG_3162.JPG"]
        },
        {
            id: 11,
            title: "Santa Biblia para mujer",
            Price: "750",
            imgSrc: ["images/IMG_3163.jpeg.png", "images/IMG_3164.jpeg.png"]
        },

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
        image.className = 'img-fluid'; // Añade esta clase para que las imágenes sean responsivas
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
