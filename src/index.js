import  validator  from "./validator.js";

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

 //tarjeta//
 
 const creditCardNumber = document.querySelector("#numero_tarjeta");
 const numeroPlastico = document.querySelector(".numeroT");
 console.log(creditCardNumber);

 creditCardNumber.addEventListener("keyup", function(event){
  let mascara= validator.maskify(creditCardNumber.value);
  console.log(mascara);
   
})


 
 

//console.log(validator);//
