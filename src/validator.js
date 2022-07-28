//const validator = {};

export function maskify(creditCardNumber) {

  if (creditCardNumber.length > 4){
    const cantidadNumeros = creditCardNumber.split("");
    for (i=0; i <cantidadNumeros.length -4; i++ ){
      cantidadNumeros[i]= "#";
      return cantidadNumeros.join("");
    }
  }
  else{
    return creditCardNumber;
  }

}
//export default validator;