// Boolean
const contaPaga: boolean = false; // Or true

// Number
const idade: number = 21;
const tamanho: number = 1.82;

// String

const nome: string = "GustavoRSL";

// Array
const idades: number[] = [23,28,45];
const idades2: Array<number> = [23,28,45]; // Outra forma de declarar um array

// Tuple

let jogadores: [string,string,string,string];
jogadores = ["Gustaov","R","S","L"];

// Enum

enum StatusAprovacao {
    Aprovado = "001",
    Pendente = "002",
    Rejeitado = "003"
}

const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;

// Any

const retornoDaAPI: any[] = [123,"GustavoRSL",false];
const retornoDaAPI2: any = {
    //.....
};

// Void 
function printarNaTela(msg: string): void {
    console.log(msg);
}

//Null e Undefined
const u: undefined = undefined;
const n: null = null;

// Object
function criar(object: object) {
    // ...
}

criar({
    propriedade: 1,
})

//criar("GustavoRSL");  Dá erro