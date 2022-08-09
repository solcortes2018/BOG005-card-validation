import validator from "./validator.js";


//cambio de catalogo a tarjeta y viceversa//

let agregar1 = document.getElementById("agregar1")
agregar1.addEventListener("click", cambiarVista)
let agregar2 = document.getElementById("agregar2")
agregar2.addEventListener("click", cambiarVista)
let agregar3 = document.getElementById("agregar3")
agregar3.addEventListener("click", cambiarVista)

function cambiarVista() {
   document.getElementById("items").style.display = "none";
   document.getElementById("container_formulario").style.display = "block";
}

const creditCardNumber = document.querySelector("#numero_tarjeta");
let catalogo = document.getElementById("#catalogo")
catalogo.addEventListener("click", mostrarCatalogo)

function mostrarCatalogo() {
   document.getElementById("container_formulario").style.display = "none"
   document.getElementById("items").style.display = "block"
}

//tarjeta valida//

function validacion() {
   let validation = validator.isValid(creditCardNumber.value);
   if (validation == true && creditCardNumber.value != 0) {
      alert('Transacción Aprobada ¡Gracias por tu compra!') ;
   }
   else {
      alert('Tarjeta inválida, comunicate con tu entidad bancaria');
   }
}

let pagar = document.querySelector(".pagar");
pagar.addEventListener("click", validacion);




const numeroPlastico = document.querySelector(".numeroT");

creditCardNumber.addEventListener("keyup", function () {
   let mascara = validator.maskify(creditCardNumber.value);
   numeroPlastico.textContent = mascara;
})



//console.log(validator);//
