const livros = require('./database');

// Input do usuário.

const readline = require('readline-sync');

const entradaInicial = readline.question("Deseja buscar um livro? S/N\n");

//Caso Sim, mostrar categorias disponiveis e perguntar qual categoria.
if(entradaInicial.toLocaleUpperCase() === "S"){
    console.log("Essas são as categorias disponiveis:");
    console.log("Produtividade e estilo de vida","    Produtividade e comercio","   Melhor cachorro literario");

    const entradaCategoria = readline.question("Qual categoria você escolhe: \n");
    const retorno = livros.filter(livro => livro.categoria.toLowerCase() === entradaCategoria.toLocaleLowerCase());
    console.table(retorno);
}
//Caso Não, mostrar todos os livros em ordem crescente pela quantidade de páginas.
else {
    const livrosOrdenados = livros.sort((a,b)=> a.paginas - b.paginas);
    console.log("Esses são todos os livros disponiveis:");
    console.table(livrosOrdenados);
}