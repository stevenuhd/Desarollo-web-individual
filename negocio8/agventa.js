// @autor: Esteban Perez Castillo 
//   @versión: javascript
//  @objetivos del archivo: Crear y agregar funcionalidad para el proyecto. (validacion de datos js)
//


function agventa(){

var l1 = document.getElementById("idvent").value;
var l2 = document.getElementById("nombrev").value;
var l3 = document.getElementById("cant").value;
var errores = "";

if (l1 == null || l2 == null || l3 == null || l1.length == 0
                || l2.length == 0 || l3.length == 0) {
                errores += "Alguno de los campos no tiene datos<br/>";
            }
            if (isNaN(l1)) {
                errores += "El identificador no es un número<br/>";
            }
            else {
                var idnum = parseInt(l1);
                if (idnum <= 0 || idnum > 1000) {
                    errores += "El identificador no está dentro del rango esperado<br/>";
                }
            }

            if (l2.length > 50) {
                errores += "El nombre del vendedor tiene más de 50 caracteres<br/>";
            }

            if (isNaN(l3)) {
                errores += "La cantidad no es un número<br/>";
            }
            else {
                var cantidad = parseInt(l3);
                if (cantidad <= 0 || cantidad > 1000) {
                    errores += "La cantidad de artículos no está dentro del rango esperado<br/>";
                }
            }

            if (errores == null || errores == "" || errores.length == 0) {
                errores = "La validación no arrojó inconvenientes";
            }

            var divmensaje = document.getElementById("mensaje");
            divmensaje.innerHTML = errores;
        }
    
        
