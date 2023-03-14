/*1.definir uma variável para armazenar a soma e inicializá-la com zero;
2. Adicionar as notas(uma por uma) a essa variável;
3. a iteração nos permite executar uma tarefa repetitiva para cada item de uma matriz,
sem a necessidade de escrever o mesmo código várias vezes;
4. Uma tarefa comum que podemos resolver com iteração é calcular a soma dos
itens de uma matriz.

Método .forEach()

1. o método .forEach() permite iterar com os elementos da matriz;
2. a função que você passar como parâmetro para o .forEach() será chamada
para cada item da matriz.*/

//let notas = [10, 8, 4, 5] //primeiro se cria uma matriz

//notas.forEach(function(nota) { após add a função dentro do método .forEach
    console.log(nota)
//}) 
//o forEach chama a mesma função para cadam item da matriz (processo de iteração)

/* Callback

1. A função callback é passada como parâmetro do .forEach(), e será chamada 
automaticamente pela linguagem de programação;
2. Podemos remover o nome de uma função callback. Ela passa, então, a ser considerada
uma função anônima; 
3. O "for each" chama a função callback e passa a ela um item da matriz
como parâmetro. Esse processo é repetido para todos os itens dessa matriz.*/

//Sintaxe do forEach

//notas.forEach() forEach isolado; 
//function() {} a função callback () para identificar o parâmetro e {} para identificar 
/*
Quando estiver trabalhando com iteração em matrizes, fique atento a dois elementos:
1. a chamada do .forEach();
2. A função callback passada para o .forEach() como parâmetro. 
3. o nome da matriz deve ficar no plural e o parâmetro no singular
(se refere a um item da matriz);*/

let numeros = [10, 30, 20, 40, 30]

numeros.forEach(function(numero) {

    console.log(numero)
})

let notas = [10, 18, 14, 15]
    notas.forEach(function(nota) {
    console.log(nota)  
    })

let temperaturas = [-5, 12, 15, 18, 13]
    temperaturas.forEach(function(temperatura){
      console.log(temperatura)
    })    
    
let ids = [1042, 1401, 1269, 2051, 1256, 1560]
    ids.forEach(function(id){
      console.log(id)
    })    