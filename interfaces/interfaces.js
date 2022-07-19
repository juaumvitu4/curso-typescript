"use strict";
function saudarComOi(pessoa) {
    console.log('Olá,' + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = 'Marcela';
}
const pessoa = {
    nome: 'João',
    idade: 27,
    saudar(sobrenome) {
        console.log('olá, meu nome é ' + this.nome + ' ' + sobrenome);
    }
};
saudarComOi(pessoa);
mudarNome(pessoa);
saudarComOi(pessoa);
//saudarComOi({nome: 'Jonas', idade: 27, xyz: true})
pessoa.saudar('Skywalker');
// usando classes...
class Cliente {
    constructor() {
        this.nome = '';
        this.ultimaCompra = new Date;
    }
    saudar(sobrenome) {
        console.log('Olá, Meu Nome é ' + this.nome + ' ' + sobrenome);
    }
}
const meuCliente = new Cliente();
meuCliente.nome = 'Han';
saudarComOi(meuCliente);
meuCliente.saudar('Solo');
console.log(meuCliente.ultimaCompra);
let potencia;
potencia = function (base, exp) {
    console.log(potencia(3, 8));
};
