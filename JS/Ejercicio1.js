document.addEventListener("DOMContentLoaded", () => {
    const tareaInput = document.getElementById("tareaInput");
    const addTareaBtn = document.getElementById("addTarea");
    const listaTareas = document.getElementById("listaTareas");
    const contadorCompletas = document.getElementById("contadorCompletas");
    const contadorIncompletas = document.getElementById("contadorIncompletas");

    const editarInput = document.getElementById("editarInput");
    const guardarEdicionBtn = document.getElementById("guardarEdicion");
    const cancelarEdicionBtn = document.getElementById("cancelarEdicion");
    const editarTareaDiv = document.querySelector(".editarTarea");

    let tareas = [];
    let tareaEnEdicion = null;
    const limiteCaracteres = 30;

    function actualizarContadores() {
        const tareasCompletadas = tareas.filter(tarea => tarea.completada).length;
        contadorCompletas.textContent = tareasCompletadas;
        contadorIncompletas.textContent = tareas.length - tareasCompletadas;
    }

    function renderizarTareas() {
        listaTareas.innerHTML = "";
        tareas.forEach((tarea, index) => {
            const li = document.createElement("li");

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = tarea.completada;
            checkbox.classList.add("checkbox");
            checkbox.addEventListener("change", () => alternarCompletada(index));

            const textoCorto = tarea.texto.length > limiteCaracteres 
                ? tarea.texto.substring(0, limiteCaracteres) + "..." 
                : tarea.texto;

            const textoTarea = document.createElement("span");
            textoTarea.textContent = textoCorto;
            textoTarea.title = "Haz clic para ver la tarea completa";
            textoTarea.classList.toggle("tarea-completada", tarea.completada);

            const botonContainer = document.createElement("div");
            botonContainer.classList.add("boton-container");

            const botonEditar = document.createElement("button");
            botonEditar.innerHTML = "✏️";
            botonEditar.addEventListener("click", () => editarTarea(index));

            const botonEliminar = document.createElement("button");
            botonEliminar.innerHTML = "❌";
            botonEliminar.addEventListener("click", () => eliminarTarea(index));

            botonContainer.appendChild(botonEditar);
            botonContainer.appendChild(botonEliminar);

            li.appendChild(checkbox);
            li.appendChild(textoTarea);
            li.appendChild(botonContainer);
            listaTareas.appendChild(li);
        });
        actualizarContadores();
    }

    function agregarTarea() {
        const textoTarea = tareaInput.value.trim();
        if (textoTarea !== "") {
            tareas.push({ texto: textoTarea, completada: false });
            tareaInput.value = "";
            renderizarTareas();
        }
    }

    function alternarCompletada(index) {
        tareas[index].completada = !tareas[index].completada;
        renderizarTareas();
    }

    function editarTarea(index) {
        tareaEnEdicion = index;
        editarInput.value = tareas[index].texto;
        editarTareaDiv.style.display = "block";
    }

    function guardarEdicion() {
        if (tareaEnEdicion !== null) {
            tareas[tareaEnEdicion].texto = editarInput.value;
            tareaEnEdicion = null;
            editarTareaDiv.style.display = "none";
            renderizarTareas();
        }
    }

    function eliminarTarea(index) {
        tareas.splice(index, 1);
        renderizarTareas();
    }

    addTareaBtn.addEventListener("click", agregarTarea);
    tareaInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") agregarTarea();
    });

    guardarEdicionBtn.addEventListener("click", guardarEdicion);
    cancelarEdicionBtn.addEventListener("click", () => editarTareaDiv.style.display = "none");

    renderizarTareas();
});
