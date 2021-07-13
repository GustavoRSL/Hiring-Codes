interface Usuario {
    nome: string;
    email: string;
    address?: string;
}

function getUser(): Usuario{
    return{
        nome: 'GustavoRSL',
        email: 'Gustavo@gustavo.com'
    }
}

function setUser(usuario: Usuario){
    // ...
}