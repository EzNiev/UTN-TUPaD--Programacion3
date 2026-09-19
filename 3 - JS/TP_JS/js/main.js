// PASO 3 - Logica de renderizado
// Los arrays "categorias" y "productos" vienen de js/data.js (se carga antes que este archivo)

// A. Renderizar categorias -----------------------------------------------
// Recorremos el array de categorias y armamos un <li> con un link por cada una
const cargarCategorias = () => {
    const listaCategorias = document.getElementById("lista-categorias");

    categorias.forEach((categoria) => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="#">${categoria}</a>`;
        listaCategorias.appendChild(li);
    });
};

// B. Renderizar productos -------------------------------------------------
// Mismo criterio que arriba pero con el array de productos, que ahora son objetos
const cargarProductos = () => {
    const contenedorProductos = document.getElementById("contenedor-productos");

    productos.forEach((producto) => {
        // Creo el nodo article vacio y despues le lleno el contenido con el template string
        const article = document.createElement("article");

        // Uso backticks para meter las variables del producto adentro del HTML
        article.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <p>Precio: <strong>$${producto.precio.toLocaleString("es-AR")}</strong></p>
            <button type="button">Agregar al carrito</button>
        `;

        contenedorProductos.appendChild(article);

        // La interactividad la agrego aca porque el boton recien existe una vez
        // que el article ya se insertó en el contenedor
        const botonAgregar = article.querySelector("button");
        botonAgregar.addEventListener("click", () => {
            alert(`Agregaste "${producto.nombre}" al carrito`);
        });
    });
};

// Punto de entrada: se ejecuta cuando el DOM está listo
document.addEventListener("DOMContentLoaded", () => {
    cargarCategorias();
    cargarProductos();
});
