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
   //encaminar(proyecto,respuesta,camino);
});

servidor.listen(8888);

console.log('Servidor web iniciado');