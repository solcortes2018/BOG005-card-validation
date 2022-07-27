import validator from './validator.js';

//cambio de catalogo a tarjeta y viceversa//

let agregar1= document.getElementById("agregar1")
agregar1.addEventListener( "click",cambiarVista) 
let agregar2= document.getElementById("agregar2")
agregar2.addEventListener( "click",cambiarVista) 
let agregar3= document.getElementById("agregar3")
agregar3.addEventListener( "click",cambiarVista) 

function cambiarVista() {
    document.getElementById ("items").style.display ="none";
    document.getElementById ("container_formulario").style.display="block";
}


let catalogo=document.getElementById ("#catalogo")
 catalogo.addEventListener("click", mostrarCatalogo)

 function mostrarCatalogo(){
    document.getElementById("container_formulario").style.display="none"
    document.getElementById ("items").style.display="block"
 }

 //obtengo la información del campo de #de tarjeta y pongo la mascara//
 
 let validar1= document.getElementById("pagar")
 validar1.addEventListener("click", botonPagar)

 function botonPagar(){
    let creditCardNumber=document.getElementById("numero_tarjeta").value;
 
    if(numero_tarjeta.value == "") {
        alert("Ingresa el número de tarjeta de crédito");
    }
    else {
        let mostrarCuatro = maskify(creditCardNumber);
        cardNumber.value = mostrarCuatro;
    }
 }
 

//console.log(validator);//
