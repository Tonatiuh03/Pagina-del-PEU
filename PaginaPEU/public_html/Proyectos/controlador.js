var http=require('http');
var url=require('url');
var fs=require('fs');
var querystring = require('querystring');

var mysql=require('mysql');

var conexion=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'proyectos'
});

conexion.connect(function(error){
   if(error)
       console.log('Imposible conectar con MySQL');
});

var mime = {
    'html' : 'text/html',
    'css' : 'text/css',
    'jpg'  : 'image/jpg',
    'ico'  : 'image/x-icon',
    'mp3'  : 'audio/mpeg3',
    'mp4'  : 'video/mp4'
};

var servidor=http.createServer(function(proyecto,respuesta){
   var objurl = url.parse(proyecto.url);
   var camino = 'public_html' + objurl.pathname;
   if(camino === 'public_html/')
       camino = 'public_html/agregarProyecto.html';
   encaminar(proyecto,respuesta,camino);
});

servidor.listen(8888);

function encaminar(proyecto,respuesta,camino){
    if(camino === 'public_html/agregarProyecto.html'){
        agregar(proyecto,respuesta);
    }else {
        respuesta.writeHead(404, {'Content-Type': 'text/html'});
	respuesta.write('<!doctype html><html><head></head><body>Recurso inexistente</body></html>');		
	respuesta.end();
    }
}

function alta(proyecto,respuesta) {
    var info = '';
    proyecto.on('data', function(datosparciales){
         info += datosparciales;
    });
    proyecto.on('end', function(){
        var formulario = querystring.parse(info);
	var registro={
	    nombreRes:formulario['nombreRes'],
	    correo:formulario['correo']
  	};
	conexion.query('insert into responsable set ?',registro, function (error,resultado){
	    if (error) {
	        console.log(error);
		return;
            }	  
	});		
        
    respuesta.writeHead(200, {'Content-Type': 'text/html'});
        respuesta.write('<!doctype html><html><head></head><body>'+
	                'Se cargo el articulo<br><a href="index.html">Retornar</a></body></html>');		
	respuesta.end();
    });  	
}

console.log('Servidor web iniciado');