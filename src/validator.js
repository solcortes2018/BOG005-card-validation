const validator = {};



function maskify(creditCardNumber) {

  if (creditCardNumber.length > 4) {
    let numeroOculto = "#".repeat(creditCardNumber.length - 4);
    let mostrar=creditCardNumber.substring=(creditCardNumber.length -4);
    let mascara=numeroOculto + mostrar;
    return mascara;}
    else{
      return creditCardNumber;
    }

}
export default validator;