document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const bookId = parseInt(params.get('id')); // Parse ID as integer

    const novedades = [
        { 
            id: 1,
            title: "Santa Biblia para Mujer",
            Price: "680",
            dimensions: "13.5 x 21 cm",
            format: "Hecho a Mano",
            imgSrc: "images/1960/IMG_3137-Morada flores.jpeg",
            additionalImages: [
                "images/1960/IMG_3138-Morada flores.jpeg", // Ejemplo adicional
            ],
        },
        {
            id: 2,
            title: "Santa Biblia para mujer",
            Price: "850",
            author: "Biblias Holman",
            dimensions: "",
            editorial: "",
            format: "",
            fontSize: "Letra Gigante 14 puntos",
            imgSrc: "images/1960/IMG_3139.jpeg",
            additionalImages: [
                "images/1960/IMG_3140.jpeg", // Ejemplo adicional
            ],
        },
        {
            id: 3,
            title: "Santa Biblia",
            Price: "600",
            author: "",
            dimensions: "",
            editorial: "",
            format: "Canto Azúl",
            fontSize: "",
            imgSrc: "images/1960/IMG_3143.JPG",
            additionalImages: [
                "images/1960/IMG_3144.JPG", // Ejemplo adicional
            ],
        },
        {
            id: 4,
            title: "Santa Biblia Holman para premios",
            Price: "750",
            author: "",
            dimensions: "",
            editorial: "",
            format: "",
            fontSize: " 8 puntos",
            imgSrc: "images/1960/IMG_3145.JPG",
            additionalImages: [
                "images/1960/IMG_3146.JPG", // Ejemplo adicional
            ],
        },
        {
            id: 5,
            title: "Santa Biblia Grande",
            Price: "950",
            author: "Biblias Holman",
            dimensions: "",
            editorial: "",
            format: "Canto Dorado",
            fontSize: "Letra Super Gigante 16 puntos",
            imgSrc: "images/1960/IMG_3147.jpeg",
            additionalImages: [
                "images/1960/IMG_3148.jpeg", // Ejemplo adicional
            ],
        },
        {
            id: 6,
            title: "Santa Biblia XV",
            Price: "800",
            author: "",
            dimensions: "",
            editorial: "",
            format: "Canto Plateado",
            fontSize: "",
            imgSrc: "images/1960/IMG_3151.jpeg",
            additionalImages: [
                "images/1960/IMG_3152.jpeg", // Ejemplo adicional
            ],
        },
        {
            id: 7,
            title: "Santa Biblia",
            Price: "600",
            author: "",
            dimensions: "",
            editorial: "",
            format: "",
            fontSize: "",
            imgSrc: "images/1960/IMG_3153.jpeg",
            additionalImages: [
                "images/1960/IMG_3154.jpeg", // Ejemplo adicional
            ],
        },
        {
            id: 8,
            title: "Santa Biblia Aguila",
            Price: "750",
            author: "",
            dimensions: "",
            editorial: "",
            format: "",
            fontSize: "",
            imgSrc: "images/1960/IMG_3157.jpeg",
            additionalImages: [
                "images/1960/IMG_3158.jpeg", // Ejemplo adicional
            ],
        },
        {
            id: 9,
            title: "Santa Biblia para Faro",
            Price: "450",
            author: "",
            dimensions: "",
            editorial: "",
            format: "",
            fontSize: "",
            imgSrc: "images/1960/IMG_3159.jpeg",
            additionalImages: [
                "images/1960/IMG_3159.jpeg", // Ejemplo adicional
            ],
        },
        {
            id: 10,
            title: "Santa Biblia para mujer",
            Price: "680",
            author: "",
            dimensions: "",
            editorial: "",
            format: "",
            fontSize: "",
            imgSrc: "images/1960/IMG_3161.JPG",
            additionalImages: [
                "images/1960/IMG_3162.JPG", // Ejemplo adicional
            ],
        },
        {
            id: 11,
            title: "Santa Biblia para mujer",
            Price: "750",
            author: "",
            dimensions: "",
            editorial: "",
            format: "",
            fontSize: "",
            imgSrc: "images/IMG_3163.jpeg.png",
            additionalImages: [
                "images/IMG_3164.jpeg.png", // Ejemplo adicional
            ],
        },
    ];

    const book = novedades.find(n => n.id === bookId);

    if (book) {
        const detailContainer = document.getElementById('bookDetail');

        // Crear div contenedor principal con flexbox
        const container = document.createElement('div');
        container.className = 'd-flex justify-content-center align-items-start flex-wrap';

        // Crear carrusel de imágenes
        const carouselContainer = document.createElement('div');
        carouselContainer.className = 'carousel-container';

        const carousel = document.createElement('div');
        carousel.className = 'carousel slide mt-3 mx-auto';
        carousel.id = `carousel-${book.id}`;
        carousel.setAttribute('data-ride', 'carousel');

        const carouselInner = document.createElement('div');
        carouselInner.className = 'carousel-inner';

        // Agregar imagen principal como primer elemento activo
        const firstImage = document.createElement('div');
        firstImage.className = 'carousel-item active';

        const mainCarouselImage = document.createElement('img');
        mainCarouselImage.src = book.imgSrc;
        mainCarouselImage.className = 'd-block w-100';

        // Agregar enlace de Lightbox para la imagen principal
        const mainImageLink = document.createElement('a');
        mainImageLink.href = book.imgSrc;
        mainImageLink.setAttribute('data-lightbox', `book-${book.id}`);
        mainImageLink.appendChild(mainCarouselImage);

        firstImage.appendChild(mainImageLink);
        carouselInner.appendChild(firstImage);

        // Agregar imágenes adicionales al carrusel
        book.additionalImages.forEach((imageSrc, index) => {
            const carouselItem = document.createElement('div');
            carouselItem.className = 'carousel-item';

            const image = document.createElement('img');
            image.src = imageSrc;
            image.className = 'd-block w-100';

            // Agregar enlace de Lightbox para cada imagen adicional
            const imageLink = document.createElement('a');
            imageLink.href = imageSrc;
            imageLink.setAttribute('data-lightbox', `book-${book.id}`);
            imageLink.appendChild(image);

            carouselItem.appendChild(imageLink);
            carouselInner.appendChild(carouselItem);
        });

        carousel.appendChild(carouselInner);

        // Agregar controles de carrusel
        const prevButton = document.createElement('a');
        prevButton.className = 'carousel-control-prev';
        prevButton.href = `#carousel-${book.id}`;
        prevButton.setAttribute('role', 'button');
        prevButton.setAttribute('data-slide', 'prev');

        const prevIcon = document.createElement('span');
        prevIcon.className = 'carousel-control-prev-icon';
        prevIcon.setAttribute('aria-hidden', 'true');
        prevButton.appendChild(prevIcon);

        const prevSrOnly = document.createElement('span');
        prevSrOnly.className = 'sr-only';
        prevSrOnly.textContent = 'Anterior';
        prevButton.appendChild(prevSrOnly);

        carousel.appendChild(prevButton);

        const nextButton = document.createElement('a');
        nextButton.className = 'carousel-control-next';
        nextButton.href = `#carousel-${book.id}`;
        nextButton.setAttribute('role', 'button');
        nextButton.setAttribute('data-slide', 'next');

        const nextIcon = document.createElement('span');
        nextIcon.className = 'carousel-control-next-icon';
        nextIcon.setAttribute('aria-hidden', 'true');
        nextButton.appendChild(nextIcon);

        const nextSrOnly = document.createElement('span');
        nextSrOnly.className = 'sr-only';
        nextSrOnly.textContent = 'Siguiente';
        nextButton.appendChild(nextSrOnly);

        carousel.appendChild(nextButton);

        // Agregar carrusel al contenedor de carrusel
        carouselContainer.appendChild(carousel);

        // Crear miniaturas
        const thumbnailContainer = document.createElement('div');
        thumbnailContainer.className = 'd-flex justify-content-center mt-3';

        // Crear miniatura de la imagen principal
        const mainThumbnail = document.createElement('img');
        mainThumbnail.src = book.imgSrc;
        mainThumbnail.className = 'img-thumbnail mx-1'; // Clase para ajustar tamaño de la miniatura
        mainThumbnail.style.width = '60px'; // Ajustar tamaño de la miniatura
        mainThumbnail.style.cursor = 'pointer'; // Cambiar cursor al hacer hover

        // Añadir evento clic para activar la imagen principal
        mainThumbnail.addEventListener('click', function() {
            $('.carousel').carousel(0); // Activar la primera imagen del carrusel
        });

        thumbnailContainer.appendChild(mainThumbnail);

        // Agregar miniaturas adicionales
        book.additionalImages.forEach((imageSrc, index) => {
            const thumbnail = document.createElement('img');
            thumbnail.src = imageSrc;
            thumbnail.className = 'img-thumbnail mx-1'; // Clase para ajustar tamaño de la miniatura
            thumbnail.style.width = '60px'; // Ajustar tamaño de la miniatura
            thumbnail.style.cursor = 'pointer'; // Cambiar cursor al hacer hover

            // Añadir evento clic para activar la imagen correspondiente en el carrusel
            thumbnail.addEventListener('click', function() {
                $('.carousel').carousel(index + 1); // Activar la imagen correspondiente en el carrusel
            });

            thumbnailContainer.appendChild(thumbnail);
        });

        // Agregar contenedor de miniaturas al contenedor de carrusel
        carouselContainer.appendChild(thumbnailContainer);

        // Agregar contenedor de carrusel al contenedor principal
        container.appendChild(carouselContainer);

        // Crear contenedor de descripciones
        const descriptionContainer = document.createElement('div');
        descriptionContainer.className = 'description-container ml-3';

        // Crear título
        const title = document.createElement('h2');
        title.textContent = book.title;
        descriptionContainer.appendChild(title);

        // Crear precios
        const priceContainer = document.createElement('div');
        priceContainer.className = 'd-flex flex-column';
        const Price = document.createElement('div');
        Price.className = 'price';
        Price.textContent = `$${book.Price}`;
        priceContainer.appendChild(Price);
        descriptionContainer.appendChild(priceContainer);

        // Crear autor
        if (book.author) {
            const author = document.createElement('p');
            author.innerHTML = `<strong>Autor:</strong> ${book.author}`;
            descriptionContainer.appendChild(author);
        }

        // Crear dimensiones
        if (book.dimensions) {
            const dimensions = document.createElement('p');
            dimensions.innerHTML = `<strong>Dimensiones:</strong> ${book.dimensions}`;
            descriptionContainer.appendChild(dimensions);
        }

        // Crear editorial
        if (book.editorial) {
            const editorial = document.createElement('p');
            editorial.innerHTML = `<strong>Editorial:</strong> ${book.editorial}`;
            descriptionContainer.appendChild(editorial);
        }

        // Crear formato
        if (book.format) {
            const format = document.createElement('p');
            format.innerHTML = `<strong>Formato:</strong> ${book.format}`;
            descriptionContainer.appendChild(format);
        }

        // Crear tamaño de fuente
        if (book.fontSize) {
            const fontSize = document.createElement('p');
            fontSize.innerHTML = `<strong>Tamaño de fuente:</strong> ${book.fontSize}`;
            descriptionContainer.appendChild(fontSize);
        }

        // Agregar contenedor de descripciones al contenedor principal
        container.appendChild(descriptionContainer);

        // Agregar contenedor principal al detalle del libro
        detailContainer.appendChild(container);

        // Iniciar el carrusel usando jQuery
        $(document).ready(function() {
            $('.carousel').carousel();
        });
    }
});
