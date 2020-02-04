'use strict'
var http = new XMLHttpRequest();
var proyectos = [];
var isFiltro = false;

window.onload = () => {
    findProjects({});
}

var findProjects = filter => {
    proyectos = [];
    var endpoint = "http://localhost:3000/PEU/api/v1/buscar";
    http.open("POST", endpoint, true);
    http.setRequestHeader("Content-Type", "application/json");
    http.onreadystatechange = () => {
        if (http.readyState === 4) {
            if (http.status === 200) {
                var json = JSON.parse(http.responseText);
                proyectos = json;
                console.log(`Se obtuvieron ${proyectos.length} proyectos`)
                loadProjectTable();
            } else if (http.status === 404) {
                loadProjectTableEmpty();
            }
        }
    };
    http.send(JSON.stringify(filter));
}

var loadProjectTableEmpty = () => {
    $("#body-project-table").children(".proyect-row").remove();
    let rows = `<tr class="proyect-row">
        <th>
          No se han encontrado proyectos
        </th>
      </tr>`;
    $("#body-project-table").html(rows);
}


var loadProjectTable = () => {
    $("#body-project-table").children(".proyect-row").remove();
    let rows = "";
    proyectos.forEach((p, i) => {
        rows += `<tr class="proyect-row">
        <th>
          <a title="Click para ver los detalles" type="button" class="btn" data-toggle="modal" data-target="#DetalleProyecto"
            onclick="loadProjectDetail(${i});">
            ${p.nombre}
            </a>
        </th>
      </tr>`
    });
    $("#body-project-table").html(rows);
}

var setBusquedaAvanzada = () => {
    isFiltro = !isFiltro;
}

var buscarProyecto = () => {
    let filtros = {};
    let nombreProyecto = $("#input-nombre-proyecto").val();
    if (nombreProyecto) { filtros.proyecto_nombre = nombreProyecto };
    if (isFiltro) {
        let nombreResponsable = $("#input-nombre-responsable").val();
        if (nombreResponsable) { filtros.responsable_nombre = nombreResponsable };
        let adscripcion = $("#input-adscripcion-responsable").val();
        if (adscripcion) { filtros.responsable_adscripcion = adscripcion };
        let area = $("#input-area-proyecto").val();
        if (area) { filtros.proyecto_area = area };
        let monto = $("#input-monto-proyecto").val();
        if (monto) { filtros.proyecto_monto = monto };
        let asociados = $("#input-asociados").val();
        if (asociados) { filtros.proyecto_monto = asociados };
    }
    findProjects(filtros);
}

var loadProjectDetail = index => {
    clearModal();
    let p = proyectos[index];
    $("#ModalLabel").text(`${p.nombre}`);
    $("#proyecto-tipo").text(`${p.tipo ? p.tipo : "N/A"}`);
    if (p.pag_web) {
        $("#proyecto-web-page").html(`<a href="${p.pag_web}">${p.pag_web}</a>`);
    } else {
        $("#proyecto-web-page").text(`N/A`);
    }

    $("#proyecto-monto").text(`${p.monto ? p.monto : "N/A"}`);
    $("#proyecto-area").text(`${p.area ? p.area : "N/A"}`);
    if (p.fecha_inicio) {
        let fi = new Date(p.fecha_inicio)
        $("#proyecto-f-inicio").text(`${fi.getFullYear()}-${fi.getUTCMonth() + 1}-${fi.getDate()}`);
    } else {
        $("#proyecto-f-inicio").text(`N/A`);

    }

    if (p.fecha_termino) {
        let ff = new Date(p.fecha_termino)
        $("#proyecto-f-fin").text(`${ff.getFullYear()}-${ff.getUTCMonth() + 1}-${ff.getDate()}`);
    } else {
        $("#proyecto-f-fin").text(`N/A`);

    }

    $("#proyecto-descripcion").text(`${p.resumen ? p.resumen : "N/A"}`);
    $("#proyecto-prod-esperado").text(`${p.producto_esperado ? p.producto_esperado : "N/A"}`);
    $("#proyecto-etapa").text(`${p.etapa ? p.etapa : "N/A"}`);
    $("#proyecto-logros").text(`${p.logros ? p.logros : "N/A"}`);

    if (p.responsable) {
        $("#responsable-nombre").text(`${p.responsable.nombre ? p.responsable.nombre : "N/A"}`);
        $("#responsable-adscripcion").text(`${p.responsable.adscripcion ? p.responsable.adscripcion : "N/A"}`);
        $("#responsable-telefono").text(`${p.responsable.tel ? p.responsable.tel : "N/A"}`);
        if (p.responsable.correo) {
            $("#responsable-email").html(`<a href="mailto:${p.responsable.correo}">${p.responsable.correo}</a>`);
        }
    }

    if (p.colaboradores) {
        $("#colaboradores-asociados").text(`${p.colaboradores.asociados ? p.colaboradores.asociados : "N/A"}`);
        $("#colaboradores-licenciatura").text(`Personal de Licenciatura: ${p.colaboradores.licenciatura}`);
        $("#colaboradores-maestria").text(`Personal de Maestría: ${p.colaboradores.maestria}`);
        $("#colaboradores-doctorado").text(`Personal de Doctorado: ${p.colaboradores.doctorado}`);
    }

    if (p.entidades_academicas) {
        $("#entidad-participante").text(`${p.entidades_academicas.participantes ? p.entidades_academicas.participantes : "N/A"}`);
        $("#entidad-colaboran").text(`${p.entidades_academicas.uni_colaboran ? p.entidades_academicas.uni_colaboran : "N/A"}`);
        $("#entidad-financiadora").text(`${p.entidades_academicas.financiadoras ? p.entidades_academicas.financiadoras : ""}`);
    }
    if (p.preguntas) {
        $("#p-siguiente-etapa").text(`${p.preguntas.sig_etapa ? p.preguntas.sig_etapa : "N/A"}`);
        $("#p-nuevo-proyecto").text(`${p.preguntas.nuevo_proyecto ? p.preguntas.nuevo_proyecto : "N/A"}`);
        $("#p-tecnologia").text(`${p.preguntas.desarrollo_tecno ? p.preguntas.desarrollo_tecno : "N/A"}`);
        $("#p-empresas").text(`${p.preguntas.empresas ? p.preguntas.empresas : "N/A"}`);
        $("#p-normativa").text(`${p.preguntas.normativas ? p.preguntas.normativas : "N/A"}`);
        $("#p-otro-proyecto").text(`${p.preguntas.otro_proyecto ? p.preguntas.otro_proyecto : "N/A"}`);
    }

}

var clearModal = () => {
    $("#ModalLabel").text("N/A");
    $("#proyecto-tipo").text("N/A");
    $("#proyecto-web-page").text("N/A");
    $("#proyecto-monto").text("N/A");
    $("#proyecto-area").text("N/A");
    $("#proyecto-f-inicio").text("N/A");
    $("#proyecto-f-fin").text("N/A");
    $("#proyecto-descripcion").text("N/A");
    $("#proyecto-prod-esperado").text("N/A");
    $("#proyecto-etapa").text("N/A");
    $("#proyecto-logros").text("N/A");
    $("#responsable-nombre").text("N/A");
    $("#responsable-adscripcion").text("N/A");
    $("#responsable-telefono").text("N/A");
    $("#responsable-email").text("N/A");
    $("#colaboradores-asociados").text("N/A");
    $("#colaboradores-licenciatura").text("N/A");
    $("#colaboradores-maestria").text("N/A");
    $("#colaboradores-doctorado").text("N/A");
    $("#entidad-participante").text("N/A");
    $("#entidad-colaboran").text("N/A");
    $("#entidad-financiadora").text("N/A");
    $("#p-siguiente-etapa").text("N/A");
    $("#p-nuevo-proyecto").text("N/A");
    $("#p-tecnologia").text("N/A");
    $("#p-empresas").text("N/A");
    $("#p-normativa").text("N/A");
    $("#p-otro-proyecto").text("N/A");
}