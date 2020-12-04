function detalleventa() 
{
  var productos = document.getElementById("producto").value;
                var cantidad = parseInt(document.getElementById("cantidad").value);
                var ventas = document.getElementById("venta").value;
                if (productos == "producto"){
                    alert("no ha seleccionado producto")
                } else {
                if (productos == "producto"){
                    alert("no ha seleccionado producto")
                } else {
                    if (cantidad<1 || cantidad>1001){
                        alert("ingrese una cantidad valida")
                    } else{

                         document.getElementById("demo").innerHTML += "<li>" + ventas + productos + " / Cantidad de articulos = " + cantidad + "</li>";
                          
                    }
                }
            }
        }