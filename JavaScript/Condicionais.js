var num = 1;

// === igualdade de valor e tipo

if (num === 1) {
    console.log("Numero é igual a 1.")
}
else if (num === 2) {
    console.log("Numero é igual a 2")
}
else {
    console.log("Esse número é diferente de 1 e 2.")
}

var mes = "Janeiro"

switch(mes) {
    case "Fevereiro":
        console.log("Mes 2");
        break;
    
    case "Janeiro":
        console.log("Mes 1");
        break;
    
    default:
        console.log("Nenhum dos casos acima")
}