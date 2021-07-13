class Data {
    public dia: number;
    private mes: number;
    ano: number;

    constructor(dia: number, mes: number, ano: number = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }

    //constructor(public dia: number, public mes: number, public ano: number = 1970) { Outra forma de declarar uma classe
    //}
}

const data = new Data(1,1,2020);
console.log(data.dia);

const data2 = new Data(1,1); // 1970 Ano default


// Modificadores de acesso

class Carro {
    private velocidadeAtual: number = 0;
    constructor(
        public marca: string, 
        public modelo: string, 
        private velocidadeMaxima: number = 220
    ){}

    private alterarVelocidade(delta: number) {
        if(delta == 5) { 
            if(this.velocidadeAtual + delta <= this.velocidadeMaxima)
            this.velocidadeAtual += delta;
        }
        else{
            if(this.velocidadeAtual - delta >= 0)
            this.velocidadeAtual -= delta;
        }
    }

    acelerar(){
        this.alterarVelocidade(5);
    }

    frear(){
        this.alterarVelocidade(-5);
    }
}

const carro = new Carro('Chevrolet', 'Prisma', 250);
