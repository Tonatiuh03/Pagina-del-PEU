/* 
 * Controlador para agregar proyecto 
 */

       
var form = document.getElementsByTagName('form')[0];
var nombreRes = document.getElementById('nombreRes');
var correo = document.getElementById('correo');
var entidades = document.getElementById('entidades');
var tel = document.getElementById('entidades');
var nombreProy = document.getElementById('nombreProy');
var resumen = document.getElementById('resumen');
var tipo = docuiment.getElementById('tipo');
var etapa = document.getElementById('etapa');
var esperado = document.getElementById('esperado');
var web = document.getElementById('web');
var logros = document.getElementById('logros');
var uniColaboran = document.getElementById('uniColaboran');
var financiadoras = document.getElementById('financiadoras');
var monto = document.getElementById('monto');
var fechaInicio = document.getElementById('fechaInicio');
var fechaTermino = document.getElementById('fechaTermino');
var sigEtapa = document.getElementById('sigEtapa');
var nuevo = document.getElementById('nuevo');
var colaboradores = document.getElementById('colaboradores');
var licenciatura = document.getElementById('licenciatura');
var maestria = document.getElementById('maestria');
var doctorado = document.getElementById('doctorado');
var aeroespacial = document.getElementById('aeroespacial');
var empresas = document.getElementById('empresas');
var normativa = document.getElementById('normativa');
var desarrollo = document.getElementById('desarrollo');
var area = document.getElementById('desarrollo');
var adscripcion = document.getElementById('adscripcion');



   
//Funcion para guardar cada proyecto
function guardarProyecto(nombreRes, correo, entidades, tel, nombreProy, resumen, tipo, etapa, esperado, web, logros, uniColaboran, financiadoras, monto, fechaInicio, fechaTermino, sigEtapa, nuevo, colaboradores, licenciatura, maestria, doctorado,  aeroespacial, empresas, normativa, 
 desarrollo, area, adscripcion, funcion_de_respuesta){
    db.transaction(function(tx){
        tx.executeSql('INSERT INTO responsable(nombre, correo, tel, adscripcion ) VALUES(?,?,?,?)',[nombreRes, correo,tel,adscripcion],function(tx,respuesta){
                    funcion_de_respuesta(true);
               }, function(tx, respuesta){
                    funcion_de_respuesta(false);
               });
       
        tx.executeSql('INSERT INTO proyecto(nombre) VALUES(?)',[nombreProy],function(tx,respuesta){
                    funcion_de_respuesta(true);
               }, function(tx, respuesta){
                    funcion_de_respuesta(false);
               });
        tx.executeSql('INSERT INTO proyecto(fecha_inicio) VALUES(?)',[fechaInicio],function(tx,respuesta){
                    funcion_de_respuesta(true);
               }, function(tx, respuesta){
                    funcion_de_respuesta(false);
               });
        tx.executeSql('INSERT INTO proyecto(resumen) VALUES(?)',[resumen],function(tx,respuesta){
                    funcion_de_respuesta(true);
               }, function(tx, respuesta){
                    funcion_de_respuesta(false);
               });
        tx.executeSql('INSERT INTO proyecto(tipo) VALUES(?)',[tipo],function(tx,respuesta){
                    funcion_de_respuesta(true);
               }, function(tx, respuesta){
                    funcion_de_respuesta(false);
               });
        tx.executeSql('INSERT INTO proyecto(etapa) VALUES(?)',[etapa],function(tx,respuesta){
                    funcion_de_respuesta(true);
               }, function(tx, respuesta){
                    funcion_de_respuesta(false);
               });
        tx.executeSql('INSERT INTO proyecto(producto_esperado) VALUES(?)',[esperado],function(tx,respuesta){
                    funcion_de_respuesta(true);
               }, function(tx, respuesta){
                    funcion_de_respuesta(false);
               });
        tx.executeSql('INSERT INTO proyecto(web) VALUES(?)',[web],function(tx,respuesta){
                    funcion_de_respuesta(true);
               }, function(tx, respuesta){
                    funcion_de_respuesta(false);
               });
        tx.executeSql('INSERT INTO proyecto(logros) VALUES(?)',[logros],function(tx,respuesta){
                    funcion_de_respuesta(true);
               }, function(tx, respuesta){
                    funcion_de_respuesta(false);
               });
        tx.executeSql('INSERT INTO proyecto(monto) VALUES(?)',[monto],function(tx,respuesta){
                    funcion_de_respuesta(true);
               }, function(tx, respuesta){
                    funcion_de_respuesta(false);
               });
        tx.executeSql('INSERT INTO proyecto(fecha_termino) VALUES(?)',[fechaTermino],function(tx,respuesta){
                    funcion_de_respuesta(true);
               }, function(tx, respuesta){
                    funcion_de_respuesta(false);
               });
        tx.executeSql('INSERT INTO proyecto(area) VALUES(?)',[area],function(tx,respuesta){
                    funcion_de_respuesta(true);
               }, function(tx, respuesta){
                    funcion_de_respuesta(false);
               });
        tx.executeSql('INSERT INTO colaboradores(asociados) VALUES(?)',[colaboradores],function(tx,respuesta){
                    funcion_de_respuesta(true);
               }, function(tx, respuesta){
                    funcion_de_respuesta(false);
               });
        tx.executeSql('INSERT INTO colaboradores(licenciatura) VALUES(?)',[licenciatura],function(tx,respuesta){
                    funcion_de_respuesta(true);
               }, function(tx, respuesta){
                    funcion_de_respuesta(false);
               });
        tx.executeSql('INSERT INTO colaboradores(maestria) VALUES(?)',[maestria],function(tx,respuesta){
                    funcion_de_respuesta(true);
               }, function(tx, respuesta){
                    funcion_de_respuesta(false);
               });
        tx.executeSql('INSERT INTO colaboradores(doctorado) VALUES(?)',[doctorado],function(tx,respuesta){
                    funcion_de_respuesta(true);
               }, function(tx, respuesta){
                    funcion_de_respuesta(false);
               });
        tx.executeSql('INSERT INTO entidades_academicas(participantes) VALUES(?)',[entidades],function(tx,respuesta){
                    funcion_de_respuesta(true);
               }, function(tx, respuesta){
                    funcion_de_respuesta(false);
               });
        tx.executeSql('INSERT INTO entidades_academicas(colaboran) VALUES(?)',[uniColaboran],function(tx,respuesta){
                    funcion_de_respuesta(true);
               }, function(tx, respuesta){
                    funcion_de_respuesta(false);
               });
        tx.executeSql('INSERT INTO entidades_academicas(financiadoras) VALUES(?)',[financiadoras],function(tx,respuesta){
                    funcion_de_respuesta(true);
               }, function(tx, respuesta){
                    funcion_de_respuesta(false);
        });
    });    
}
function cargarProyectos(funcion_de_respuesta){
    var lista = new Array();
    db.transaction(function(tx){
        tx.executeSql('SELECT id, nombre FROM proyecto', [], function(tx, respuesta){
            for(var i = 0; i < respuesta.rows.length; i++){
                lista.push({
                    id: respuesta.rows.item(i).id,
                    nombre: respuesta.rows.item(i).nombre
                });
            }
            funcion_de_respuesta(true, lista);
        }, function(){
            funcion_de_respuesta(false, lista);
        });
    });
}

function mostrarProyectos(lista){
    document.getElementById('lista').innerHTML = '';
    var id;
    var nombre;
    var item;
    for(var i = 0; i < lista.length; i++){
        ide = lista[i].id;
        nombre = lista[i].nombre;
        item = crearItemProyecto(ide, nombre);
        document.getElementById('lista').appendChild(item);
    }
}

function crearItemInstrumento(ide, nombre){
    var li = document.createElement('li');
    var nombre_item = document.createElement('p');
    nombre_item.innerHTML = nombre;
   
    li.appendChild(nombre_item);
    return li;
}
function refrescarListaProyectos(){
    cargarProyectos(function(respuesta, lista){
        if(respuesta){
            mostrarProyectos(lista);
        }else{
            alert('No se han podido cargar la lista de instrumentos');
        }
    });
}

window.onload = function(){
    iniciarDB();
    refrescarListaInstrumentos();
    document.getElementById('boton_guardar').onclick = function(){
    if(document.getElementById('formulario').checkValidity()){
        var nombreRes = document.getElementById('nombreRes');
        var correo = document.getElementById('correo');
        var entidades = document.getElementById('entidades');
        var tel = document.getElementById('entidades');
        var nombreProy = document.getElementById('nombreProy');
        var resumen = document.getElementById('resumen');
        var tipo = document.getElementById('tipo');
        var etapa = document.getElementById('etapa');
        var esperado = document.getElementById('esperado');
        var web = document.getElementById('web');
        var logros = document.getElementById('logros');
        var uniColaboran = document.getElementById('uniColaboran');
        var financiadoras = document.getElementById('financiadoras');
        var monto = document.getElementById('monto');
        var fechaInicio = document.getElementById('fechaInicio');
        var fechaTermino = document.getElementById('fechaTermino');
        var sigEtapa = document.getElementById('sigEtapa');
        var nuevo = document.getElementById('nuevo');
        var colaboradores = document.getElementById('colaboradores');
        var licenciatura = document.getElementById('licenciatura');
        var maestria = document.getElementById('maestria');
        var doctorado = document.getElementById('doctorado');
        var aeroespacial = document.getElementById('aeroespacial');
        var empresas = document.getElementById('empresas');
        var normativa = document.getElementById('normativa');
        var desarrollo = document.getElementById('desarrollo');
        var area = document.getElementById('desarrollo');
        var adscripcion = document.getElementById('adscripcion');
        guardarProyecto(nombreRes.value, correo.value, entidades.value, tel.value, nombreProy.value, resumen.value, tipo.value, etapa.value, esperado.value, web.value, logros.value, uniColaboran.value, financiadoras.value, monto.value, fechaInicio.value, fechaTermino.value, sigEtapa.value, nuevo.value, colaboradores.value, licenciatura.value, maestria.value, doctorado.value,  aeroespacial.value, empresas.value, normativa.value, 
 desarrollo.value, area.value, adscripcion.value, function(respuesta){
            if(respuesta){
                nombreRes.value = '';
                correo.value = '';
                entidades.value = '';
                tel.value = '';
                nombreProy.value = '';
                resumen.value = '';
                tipo.value = '';
                etapa.value = '';
                esperado.value = '';
                web.value = '';
                logros.value = '';
                uniColaboran.value = '';
                financiadoras.value = '';
                monto.value = '';
                fechaInicio.value = '';
                fechaTermino.value = '';
                sigEtapa.value = '';
                nuevo.value = '';
                colaboradores.value = '';
                licenciatura.value = '';
                maestria.value = '';
                doctorado.value = '';
                aeroespacial.value = '';
                empresas.value = '';
                normativa.value = '';
                desarrollo.value = '';
                area.value = '';
                adscripcion.value = '';

                refrescarListaProyectos();
                alert('El registro ha sido guardado con exito');
                }else{
                   alert('El registro no ha podido ser guardado');
                }
            });
        }
    };
}



