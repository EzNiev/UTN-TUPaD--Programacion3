const URL_API = "https://thesimpsonsapi.com/api/characters";
const URL_IMAGENES = "https://cdn.thesimpsonsapi.com/500";
const contenedor = document.getElementById("personajes");

// Actividad 1: función async que hace fetch a URL_API, convierte a JSON
// y muestra datos.results por consola
const obtenerPersonajes = async () => {
    const respuesta = await fetch(URL_API);
    const datos = await respuesta.json();
    console.log(datos.results);
    mostrarPersonajes(datos.results);
};

// Actividad 2: por cada personaje, crea un div.personaje-card con
// imagen, nombre, ocupación, status y edad, y lo agrega a contenedor
const mostrarPersonajes = (personajes) => {
    personajes.forEach((personaje) => {
        const card = document.createElement("div");
        card.className = "personaje-card";

        const img = document.createElement("img");
        img.src = URL_IMAGENES + personaje.portrait_path;
        img.alt = personaje.name;

        const nombre = document.createElement("h3");
        nombre.textContent = personaje.name;

        const ocupacion = document.createElement("p");
        ocupacion.textContent = "Ocupación: " + personaje.occupation;

        const estado = document.createElement("p");
        estado.textContent = "Estado: " + personaje.status;

        const edad = document.createElement("p");
        edad.textContent = "Edad: " + personaje.age;

        card.appendChild(img);
        card.appendChild(nombre);
        card.appendChild(ocupacion);
        card.appendChild(estado);
        card.appendChild(edad);

        contenedor.appendChild(card);
    });
};

obtenerPersonajes();