function validacion() {


  var p1 = document.getElementById("nombre").value;
  var p2 = document.getElementById("password").value;



  if (p1.length == 0 || p2.length == 0) {
    alert("Error, los campos no pueden quedar vacios");
    return false;
  } else {
    if (p1 != "admin") {
      alert("no ha ingresado el usuario correcto")
    } else {
      if (p2 < "1234") {
        alert("La contraseña no es correcta")
      } else {
        if (p2 == "1234" || p1 == "admin") {
          location.href = "agregarcliente.html";

        }
      }
    }
  }
}
