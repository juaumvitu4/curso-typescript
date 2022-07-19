// string

let nome: string = 'joao'
console.log(nome)
// nome = 24

// number
let idade: number = 24
// idade = 'Viroe'
idade = 27.5
console.log(idade)

//boolean
let possuiHobbies: boolean = false
// possuiHobbies = 1
console.log(possuiHobbies)


// tipos explícitos
let minhaIdade: number
minhaIdade = 24
console.log(typeof minhaIdade)
// minhaIdade = ' idade 24'
 
// tsc -w pasta raiz
// array

let hobbies: any[] = ["cozinhar", "Praticar Esportes"]
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [100, 200, 300]
// hobies = 100
console.log(hobbies)

// tuplas
let endereco: [string, number, string] = ["Av Principal", 99," "]
console.log(endereco)

endereco = ["Rua Importante", 1260, "Bloco C"]
console.log(endereco)

// enums

enum Cor {
    Cinza = 1,
    Verde = 3,
    Azul = 4,
    laranja,
    amarelo,
    vermelho = 3

}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)

console.log(Cor.vermelho)
console.log("Minha cor será " + Cor.Azul, Cor.amarelo)
console.log(Cor.Cinza, Cor.laranja)


// Any

let carro : any = 'BMW'
console.log(carro)
carro = {marca: 'bmw', ano :2020}
console.log(carro)
