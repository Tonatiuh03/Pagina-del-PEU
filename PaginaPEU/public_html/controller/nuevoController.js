'use strict'
var http = new XMLHttpRequest();
var proyectos = [];

var nombreRes = $("#nombreRes");
var correo = $("#correo");
var entidades = $("#entidades");
var tel = $("#tel");
var nombreProy = $("#nombreProy");
var resumen = $("#resumen");
var tipo = $("#tipo");
var etapa = $("#etapa");
var esperado = $("#esperado");
var web = $("#web");
var uniColaboran = $("#uniColaboran");
var financiadoras = $("#financiadoras");
var monto = $("#monto");
var fechaInicio = $("#fechaInicio");
var fechaTermino = $("#fechaTermino");
var sigEtapa = $("#sigEtapa");
var nuevo = $("#nuevo");
var colaboradores = $("#colaboradores");
var licenciatura = $("#licenciatura");
var maestria = $("#maestria");
var doctorado = $("#doctorado");
var aeroespacial = $("#aeroespacial");
var empresas = $("#empresas");
var normativa = $("#normativa");
var desarrollo = $("#desarrollo");
var area = $("#area");
var adscripcion = $("#adscripcion");


window.onload = () => {
    procesar_autorizacion({});
}

var proyectoNuevo = {"colaboradores" : "colaboradores","licenciatura" : "licenciatura","maestria" : "maestria", "doctorado" :"doctorado", "nombreRes" : "nombreRes",
   "correo" : "correo","tel" : "tel", "adscripcion" : "adscripcion","sigEtapa" : "sigEtapa", "nuevo" : "nuevo", "aeroespacial":"aeroespacial","empresas" : "empresas"
   "normativa" : "normativa", "desarrollo":"desarrollo", "entidades":"entidades","uniColaboran":"uniColaboran","financiadoras":"financiadoras",
   id_responsable, id_EntidadAcademica, id_preguntas, id_colaboradores, "nombreProy":"nombreProy", "resumen":"resumen", "tipo":"tipo", "etapa":"etapa",
   "esperado":"esperado", "web":"web", "logros":"logros", "monto":"monto", "fechaInicio":"fechaInicio", "fechaTermino":"fechaTermino", "area":"area"};

var procesar_autorizacion = proyectoNuevo =>{
    console.log("Agregar proyecto");
    console.log(proyectoNuevo);
    var endpoint = "http://localhost:3000/PEU/api/v1/autorizacion";
    http.open("POST", endpoint, true);
    http.setRequestHeader("Content-Type", "application/json");
    http.onreadystatechange = () => {
        if (http.readyState === 4 && http.status === 200) {
            var json = JSON.parse(http.responseText);
            proyectos = json;
            procesar_autorizacion();
            console.log(`Se agrego el proyecto`)            
        }
    };
    http.send(JSON.stringify(proyectoNuevo));
}