"use strict";
// string
let nome = 'joao';
console.log(nome);
// nome = 24
// number
let idade = 24;
// idade = 'Viroe'
idade = 27.5;
console.log(idade);
//boolean
let possuiHobbies = false;
// possuiHobbies = 1
console.log(possuiHobbies);
// tipos explícitos
let minhaIdade;
minhaIdade = 24;
console.log(typeof minhaIdade);
// minhaIdade = ' idade 24'
// tsc -w pasta raiz
// array
let hobbies = ["cozinhar", "Praticar Esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100, 200, 300];
// hobies = 100
console.log(hobbies);
// tuplas
let endereco = ["Av Principal", 99, " "];
console.log(endereco);
endereco = ["Rua Importante", 1260, "Bloco C"];
console.log(endereco);
// enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 1] = "Cinza";
    Cor[Cor["Verde"] = 3] = "Verde";
    Cor[Cor["Azul"] = 4] = "Azul";
    Cor[Cor["laranja"] = 5] = "laranja";
    Cor[Cor["amarelo"] = 6] = "amarelo";
    Cor[Cor["vermelho"] = 3] = "vermelho";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.vermelho);
console.log("Minha cor será " + Cor.Azul, Cor.amarelo);
console.log(Cor.Cinza, Cor.laranja);
// Any
let carro = 'BMW';
console.log(carro);
carro = { marca: 'bmw', ano: 2020 };
console.log(carro);
