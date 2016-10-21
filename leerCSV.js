/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var fs = require('fs');
var coleccion = require('./main');
//lectura del argumento
//que posiblemente sea el nombre
//del fchero a procesar
//var fichero = process.argv[2];
var fichero = 'datos.csv';
if(!fichero){
    console.log('No existe el fichero');
    process.exit(1);
}
fs.readFile(fichero,'UTF-8', function(err,data){
  if (err)
      throw err;
  //procesamos el fichero
  var personas = data.split('\n');
  var coleccion_personas = [];
  for(var i = 1; i < personas.length -1; i++){
      var linea =  personas[i].split(',');
      var persona = {
            'nombre': linea[0],
            'apellido': linea[1],
            'email': linea[2],
            'sexo': linea[3],
            'edad': linea[4]
     };
       coleccion_personas.push(persona);
  }
  //console.log(coleccion_personas);
  console.log(coleccion(coleccion_personas).edadesLimites());
});
console.log('fin del programa');

