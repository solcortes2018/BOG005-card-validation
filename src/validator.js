const validator = {
  maskify: function (creditCardNumber) {


    if (creditCardNumber.length > 4) {
      const cantidadNumeros = creditCardNumber.split("");
      for (let i = 0; i < cantidadNumeros.length - 4; i++) {
        cantidadNumeros[i] = "#";
      }
      console.log(cantidadNumeros);
      return cantidadNumeros.join("");
    }
    else {
      return creditCardNumber;
    }



  }


}
export default validator;