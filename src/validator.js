const validator = {
  //validador
  isValid: function (creditCardNumber) {
    //pasar el # a un array en orden inverso
    let array_invertido = creditCardNumber.split('').reverse();
    for (let i = 0; i < array_invertido.length; i++) {
      if (i % 2 != 0) {
        //multiplico la segunda posicion*2
        array_invertido[i] = array_invertido[i] * 2;
        if (array_invertido[i] > 9) {
          let digitos = array_invertido[i].toString().split('');
          let agregar = 0;
          digitos.forEach(function (element) {
            agregar += parseInt(element);
          });
          array_invertido[i] = agregar;
        }
        else {
          array_invertido[i] = array_invertido[i] * 1;
        }
      }
      else {
        array_invertido[i] = array_invertido[i] * 1;
      }
    }

    let total = 0;
    array_invertido.forEach(function (value) {
      total += value;
    });
    let residue = total % 10;

    if (residue == 0) {
      return true;
    }
    else {
      return false;
    }
  },


  //mascara



  maskify: function (creditCardNumber) {


    if (creditCardNumber.length > 4) {
      const cantidadNumeros = creditCardNumber.split("");
      for (let i = 0; i < cantidadNumeros.length - 4; i++) {
        cantidadNumeros[i] = "#";
      }

      return cantidadNumeros.join("");
    }
    else {
      return creditCardNumber;
    }



  }


}
export default validator;