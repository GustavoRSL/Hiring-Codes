class Livro {
    constructor(titulo,autor,paginas) {
        this._titulo = titulo;
        this._autor = autor;
        this._paginas = paginas;
    }

    get titulo() {
        return this._titulo;
    }

    set titulo(novoTitulo) {
        this._titulo = novoTitulo;
    }

    read() {
        return `Lendo o livro ${this.titulo}`
    }
}

var livro = new Livro("JavaScript", "GustavoRSL", 500);

console.log(Livro);

//Herança

class ITLivro extends Livro {
    constructor(titulo,autor,paginas,tecnologia){
        super(titulo,autor,paginas);
        this.tecnologia = tecnologia;
    }
}

var itLivro = new ITLivro("Tecno","GustavoRSL",500,"Tecnologia");