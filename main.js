var dni= document.getElementById("dni").value
function buscar (dni) {
   for (var i = 0; i < asientos.length; i++) {
      if (asientos[i] != undefined ) 
         if (asientos[i].dni == dni)
            return asientos[i];
   }
   return ;
}



var celdas = document.getElementsByTagName("td");
for (var i = 0; i < celdas.length; i++) {
  celdas[i].addEventListener("click", redirect, false);
}

function redirect(event) {
  document.getElementById("mostrar").innerHTML = event.target.textContent;
}


