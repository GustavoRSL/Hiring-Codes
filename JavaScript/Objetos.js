const pessoa = {
    nome: "Gustavo",
    idade: "20",
    cidade: "Passos"
}

// Notação de ponto

console.log(pessoa.nome);

// Notação de colchetes

console.log(pessoa['idade']);

// Desestruturação de objetos

const{nome,idade,cidade} = pessoa;

console.log(nome);
console.log(idade);
console.log(cidade);

// Vetor de objetos

const filmes = [
    {
        id: 1,
        titulo: "Dilema das Redes",
        descricao: "Documentario sobre tecnologia.",
        duracao: 120
    },
    {
        id: 2,
        titulo: "Us",
        descricao: "Terror",
        duracao: 110
    }
]

const {id,titulo,descricao,duracao} = filmes

filmes.map(filme => console.log(filme.descricao));