const validator = {
isvalid: function (creditCardNumber){
//pasar el # a un array en orden inverso
let arrayReversed = creditCardNumber.split('').reverse();
for (let i = 0; i < arrayReversed.length; i++) {
  if (i % 2 != 0) {
    arrayReversed[i] = arrayReversed[i] * 2;
    if (arrayReversed[i] > 9) {
      let getDigits = arrayReversed[i].toString().split('');
      let addDigits = 0;
      getDigits.forEach(function(element) {
        addDigits += parseInt(element);
      });
      arrayReversed[i] = addDigits;
    }
    else {
      arrayReversed[i] = arrayReversed[i] * 1;
    }
  }
  else {
    arrayReversed[i] = arrayReversed[i] * 1;
  }
}

let addTotal = 0;
arrayReversed.forEach(function(value) {
  addTotal += value;
});
let residue = addTotal % 10;

if (residue == 0) {
  return true;
}
else {
  return false;
}
},






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