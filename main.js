/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function coleccion(datos){
    var _datos = datos;
    return {
        edadesLimites: function(){
            var objeto;
            var edadMinima = parseInt(_datos[0].edad);
            var edadMaxima = parseInt(_datos[0].edad);
            for (var i = 1; i < _datos.lenght ; i ++){
                if(parseInt(_datos[i].edad) > edadMinima)
                    edadMinima = parseInt(_datos[i].edad);
                if(parseInt(_datos[i].edad) < edadMaxima)
                    edadMaxima = parseInt(_datos[i].edad);
            }
            objeto = {'edad minima': edadMinima,
                      'edad maxima': edadMaxima};
            return objeto;
        }
    };
}
module.exports = coleccion;


