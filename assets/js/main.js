var asiento = -1;
var asientos = document.getElementsByTagName("td");

for (var i = 0; i < asientos.length; i++) {
  asientos[i].addEventListener("click", redirect, false);
}
function redirect(event) {
  asiento = event.target.textContent;

  var mostrar = document.getElementById("mostrar");
  mostrar.innerHTML = asiento;
  event.target.style.backgroundColor =
    event.target.style.backgroundColor == "rgb(248, 237, 80)"
      ? "transparent"
      : "#F8ED50";
}
function buscar() {
  var ingreso = document.getElementById("dnibuscar").value;
  for (var i = 0; i < 32; i++) {
    if (pasajero[i] != undefined && pasajero[i].dni == ingreso) {
      document.getElementById("nombre").value = pasajero[i].nombre;
      document.getElementById("apellido").value = pasajero[i].apellido;
      document.getElementById("dni").value = pasajero[i].dni;
    }
  }
}
function mostrarLista(pasajero) {
  var resultado = "";
}

var pasajero = new Array(32);
for (var i = 0; i < 32; i++) {
  pasajero[i] = undefined;
}

function reservar() {
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var dni = document.getElementById("dni").value;

  pasajero[asiento - 1] = {
    nombre: nombre,
    apellido: apellido,
    dni: dni
  };
  alert("registrado");
  limpiar();
  console.log(pasajero);
}

function limpiar() {
  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("dni").value = "";
}

