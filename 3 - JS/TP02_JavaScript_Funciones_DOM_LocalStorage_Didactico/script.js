// Actividad 2: cargar tareas guardadas (o array vacío si no hay nada)
let todos = JSON.parse(localStorage.getItem("todos")) || []; // si nunca guarde nada, arranco con lista vacia

const guardarTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos)); // paso el array a texto (JSON) para poder guardarlo
};

const form = document.getElementById("todo-form"); // el <form> del HTML
const input = document.getElementById("todo-input"); // el input donde escribo la tarea nueva
const lista = document.getElementById("todo-list"); // el <ul> donde van los <li>

const renderTodos = () => {
    lista.innerHTML = ""; // borro toda la lista antes de redibujarla, si no se duplican los <li>

    todos.forEach((tarea) => { // recorro cada tarea del array
        const li = document.createElement("li"); // creo un <li> nuevo (todavía no existe en la página)
        li.textContent = tarea.texto; // le pongo el texto de la tarea adentro

        if (tarea.completada) { // si esta tarea ya está marcada como completada
            li.style.textDecoration = "line-through"; // la tacho
        }

        li.addEventListener("click", () => { // si clickeo el texto de la tarea
            toggleTodo(tarea.id); // la tildo o destildo según el id
        });

        const btnEliminar = document.createElement("button"); // creo un botón nuevo
        btnEliminar.textContent = "Eliminar"; // le pongo el texto "Eliminar"
        btnEliminar.addEventListener("click", (evento) => { // si clickeo el botón
            evento.stopPropagation(); // corto la propagación, así no dispara también el click del <li> (el toggle)
            eliminarTodo(tarea.id); // borro la tarea según el id
        });

        li.appendChild(btnEliminar); // meto el botón adentro del <li>
        lista.appendChild(li); // meto el <li> ya armado adentro del <ul>
    });
};

const agregarTodo = (texto) => {
    todos.push({ id: Date.now(), texto: texto, completada: false }); // agrego la tarea nueva al array (id = marca de tiempo, arranca sin completar)
    guardarTodos(); // guardo el array actualizado en localStorage
    renderTodos(); // vuelvo a dibujar la lista con la tarea nueva
};

const eliminarTodo = (id) => {
    todos = todos.filter((tarea) => tarea.id !== id); // me quedo con todas las tareas MENOS la de ese id
    guardarTodos(); // guardo el array sin esa tarea
    renderTodos(); // redibujo la lista actualizada
};

const toggleTodo = (id) => {
    const tarea = todos.find((tarea) => tarea.id === id); // busco la tarea puntual por su id
    tarea.completada = !tarea.completada; // invierto el estado: si estaba en true pasa a false y viceversa
    guardarTodos(); // gurdo el cambio
    renderTodos(); // redibujo para que se vea tachada o destachada
};

form.addEventListener("submit", (evento) => { // cuando se envía el formulario
    evento.preventDefault(); // evito que la página se recargue (comportamiento por defecto del form)
    const texto = input.value.trim(); // leo lo que escribí en el input, sacando espacios de los costados
    if (texto !== "") { // si no está vacío
        agregarTodo(texto); // agrego la tarea
        input.value = ""; // limpio el input para la próxima
    }
});

renderTodos(); // al cargar la página, dibujo lo que ya había guardado (o nada si está vacío)