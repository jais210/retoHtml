var numeroAsiento = -1;
var asientos = document.getElementsByTagName("td");

for (var i = 0; i < asientos.length; i++) {
  asientos[i].addEventListener("click", redirect, false);
}

function redirect(event) {
  numeroAsiento = event.target.textContent;

  var mostrar = document.getElementById("mostrar");
  mostrar.innerHTML = numeroAsiento;
  event.target.style.backgroundColor =
    event.target.style.backgroundColor == "rgb(248, 237, 80)" ?
    "transparent" :
    "#F8ED50";
}

function buscar() {
  var ingreso = document.getElementById("dnibuscar").value;
  for (var i = 0; i < 32; i++) {
    if (pasajeros[i] != undefined && pasajeros[i].dni == ingreso) {
      document.getElementById("nombre").value = pasajeros[i].nombre;
      document.getElementById("apellido").value = pasajeros[i].apellido;
      document.getElementById("dni").value = pasajeros[i].dni;
    }
  }
}

var pasajeros = new Array(32);
for (var i = 0; i < 32; i++) {
  pasajeros[i] = undefined;
}

function reservar() {
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var dni = document.getElementById("dni").value;

  pasajeros[numeroAsiento - 1] = {
    nombre: nombre,
    apellido: apellido,
    dni: dni
  };
  alert("registrado");
  limpiar();
  console.log(pasajeros);
}

function limpiar() {
  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("dni").value = "";
}

function mostrarLista() {
  var lista = "";

  for (var i = 0; i < 32; i++) {

    if (pasajeros[i] != undefined) {
      document.getElementById("nombre").value = pasajeros[i].nombre;
      document.getElementById("apellido").value = pasajeros[i].apellido;
      document.getElementById("dni").value = pasajeros[i].dni;
    }

    

  }

  return lista;

}