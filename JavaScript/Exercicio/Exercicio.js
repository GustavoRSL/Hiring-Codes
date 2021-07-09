/* FizzBuzz

Divisivel por 3 => Fizz
Divisivel por 5 => Buzz
Divisivel por 3 e 5 => FizzBuzz
Se não for um número => Não é um número
Se não for divisivel nem por 3 e nem por 5 => Entrada.

*/

let resultado = fizzBuzz(23);
console.log(resultado);

function fizzBuzz(entrada) {
    if(typeof(entrada) == "number") {
        if((entrada%5 === 0) || (entrada%3 === 0)){
            if((entrada%5 === 0) && (entrada%3 === 0)){
                return "FizzBuzz";
            }
            else if(entrada%3 === 0){
                return "Fizz";
            }
            else {
                return "Buzz";
            }
        }
        else {
            return "Entrada";
        }
    }
    else {
        return entrada;
    }
}

// Reverte String

var palavra = reverter("Entrada");

function reverter(entrada) {
    for(let i = entrada.length; i >= 0; i--){
        console.log(entrada[i]);
    }
}
