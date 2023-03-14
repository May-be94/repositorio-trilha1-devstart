/*o .lenght é uma propriedade que retorna o comprimento (numero de itens)
da matriz;
o .lenght não é uma função. Então, o código .lenght() está errado.
em matrizes vazias, o .length retorna 0.*/

let numeros = [26,24, 281]

numeros.length //3
numeros.length()//Isso está errado

/*Complete a função obterMensagem() de forma que ela retorne a 
seguinte string: "Você tem X itens", onde X é o número de itens 
do parâmetro itens.*/

function obterMensagem(itens) {
    return "Você tem " + itens.length + " itens"
}

// Não modifique as linhas abaixo
console.log(obterMensagem([-5, 12, 15])) // "Você tem 3 itens"
console.log(obterMensagem([13, 10])) // "Você tem 2 itens"
console.log(obterMensagem([])) // "Você tem 0 itens"

/*ULTIMO ITEM DA MATRIZ
formula: matriz.length - 1

let matriz = [10, 20, 30]
matriz[matriz.length - 1] // 30 (ultimo item)

let numeros = [10, 50, 20, 40, 30]
melhor solução:
let ultimoItem = numero[numero.length - 1]

hardcoding 1 (não faça isso)
let ultimoItem = numeros[4]

hardcoding 2 (não faça isso)
let ultimoItem = 30*/

