const alunosGama = ["Gustavo","R","S","L"];

// Acessar informações num array
console.log(alunosGama[0]);

// Operador spread (...)
const alunosXp = [...alunosGama,"Gustavão"];
console.log(alunosXp);

//Metodos de iteração
for(let i = 0; i < alunosXp.length; i++) {
    console.log(alunosXp[i]);
}

//Map
alunosXp.map(aluno => console.log(aluno));

//Filter
const numeros = [34,45,67,90,55,76];
const pares = numeros.filter(numero => numero%2 == 0);
console.log(pares)

//Sort
const Ordenados = numeros.sort();
console.log(Ordenados);

//Reduce = Reduz array a um resultado de uma operação matemática
const numeros2 = [1,24,25];
const soma =numeros2.reduce((valorAnterior, valorAtual)=>{
    return valorAnterior + valorAtual;
}5)

console.log(soma);