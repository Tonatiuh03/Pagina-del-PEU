'use strict'
var http = new XMLHttpRequest();
var proyectos = [];
var isFiltro = false;

window.onload = () => {
    findProjects({});
}

var findProjects = filter => {
    console.log("Buscando proyectos")
    console.log(filter);
    var endpoint = "http://localhost:3000/PEU/api/v1/proyectos";
    http.open("GET", endpoint, true);
    http.setRequestHeader("Content-Type", "application/json");
    http.onreadystatechange = () => {
        if (http.readyState === 4 && http.status === 200) {
            var json = JSON.parse(http.responseText);
            proyectos = json;
            var list_names = proyectos.map(p => p.nombre);
            console.log(`Se obtuvieron ${proyectos.length} proyectos`)
            loadProjectTable(list_names);
        }
    };
    http.send(JSON.stringify(filter));
}

var loadProjectTable = list_names => {
    $("#body-project-table").children(".proyect-row").remove();
    let rows = "";
    list_names.forEach(name => {
        rows += `<tr class="proyect-row">
        <th>
          <a title="Click para ver los detalles" type="button" class="btn" data-toggle="modal" data-target="#DetalleProyecto"
            onclick="LoadProjectDetail();">
            ${name}
            </button>
        </th>
      </tr>`
    });
    $("#body-project-table").html(rows);
}

var setBusquedaAvanzada = () => {
    isFiltro = !isFiltro;
    console.log(`Búsqueda con filtros ${isFiltro}`)
}

var buscarProyecto = () => {
    console.log("Aquí vamos a buscar los filtros de la página");
    console.log("Hacemos una llamada al server pasándole los filtros");
    console.log("Actualizaremos la tabla con el contenido de los proyectos y los mantenemos en memoria");
}

var LoadProjectDetail = () => {
    console.log("Aquí es donde debemos actualizar el modal para cargar los datos del proyecto correspondiente");
}