/*1. O método .map() permite que voce aplique uma transformação para cada 
item de uma matriz;
2. o resultado do .map()será uma outra matriz contendo o mesmo número
de itens da matriz original, mas com a transformação aplicada.
3. a função callback passada como parâmetro para o .map() será aplicada 
para cada item da matriz;
4. está função permite que você realize uma transformação em cada  item;
5. Ao usar o .map(), não esqueça de inserir o return;
6. Não confunda .forEach() e .map() - o primeiro serve pra fazer iteração 
na matriz, e o segundo serve para  gerar uma nova  matriz com alguma transformação
aplicada em relação à matriz  original.*/


let notas = [10, 15, 13]

let notasDobradas = notas.map(function(nota) {
    return nota*2
})

function notasTriplicadas(notas) {
    let notasTriplicadas = notas.map(function(nota){
       return nota*3 
     })
     return notasTriplicadas
 }
 
 // Não modifique as linhas abaixo
 console.log(notasTriplicadas([10, 20])) // [30, 60]
 console.log(notasTriplicadas([5, 12, 20, 10])) // [15, 36, 60, 30]

 
 let caracteres = ["a","b", "c"]

 let resultado = caracteres.map(function(caractere){
    
    return caractere.toUpperCase()
}).includes("B") //ou 
//let resultado = maiusculas.includes("B")

console.log(resultado) //true
