interface Humano {
    nome : string
    idade ?: number
    [prop: string]: any // nomes dinamicos
    saudar(sobrenome: string): void
}


function saudarComOi(pessoa: Humano) {
    console.log('Olá,' + pessoa.nome)
}


function mudarNome(pessoa: Humano) {
    pessoa.nome = 'Marcela'
}

const pessoa: Humano = {
    nome: 'João',
    idade: 27,
    saudar(sobrenome: string) {
        console.log('olá, meu nome é ' + this.nome + ' ' + sobrenome)
    }

}

saudarComOi(pessoa)
mudarNome(pessoa)
saudarComOi(pessoa)
//saudarComOi({nome: 'Jonas', idade: 27, xyz: true})
pessoa.saudar('Skywalker')

// usando classes...

class Cliente implements Humano {
    nome: string = ''
    ultimaCompra: Date = new Date
    saudar(sobrenome: string){
        console.log('Olá, Meu Nome é '+ this.nome + ' ' + sobrenome)
        
    }
}

const meuCliente = new Cliente()
meuCliente.nome = 'Han'
saudarComOi(meuCliente)
meuCliente.saudar('Solo')
console.log(meuCliente.ultimaCompra)

// Interface Função
interface funcaoCalculo {

    (a: number, b:number): number
}

let potencia: funcaoCalculo
potencia = function(base:number, exp: number): any {
    console.log(potencia(3, 8))
}