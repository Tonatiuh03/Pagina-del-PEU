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

console.log('Servidor web iniciado');