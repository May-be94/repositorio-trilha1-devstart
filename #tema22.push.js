/*o metodo .push() adiciciona um item em uma matriz;
a propriedade .length sempre reflete o numero correto de itens dentro da matriz.*/

numeros = [10,20]

let valor = numeros.push(15)
console.log(valor) // 3 (novo comprimento da matriz)

/*o .push retorna o comprimento da matriz, e não retorna uma matriz. Ele retorna um numero, 
que é o novo comprimento da matriz após o acrescimo do novo item que você solicitou
Ao escrever uma função, verifique se o valor que ela deve retornar é o resultado do metodo 
.push(), ou se é uma matriz.

-Complete a função adicionarNovaNota() de forma que ela adicione a 
nota 18 à matriz de notas que ela recebe como parâmetro.
Observe os exemplos de uso para ver o que a função deve retornar.*/

function adicionarNovaNota(notas) {
    notas.push(18)
    return notas
}

// Não modifique as linhas abaixo
console.log(adicionarNovaNota([15, 13, 17])) // [15, 13, 17, 18]
console.log(adicionarNovaNota([10, 7])) // [10, 7, 18]

let dados = [10, 20]
let numeros = 15
dados.push(numeros)
console.log(dados) //[10, 20, 15]

/*Este projeto é igual ao anterior, com exceção da função adicionarNota(), 
que não funciona no momento. Isso acontece porque você mesmo terá que 
escrever essa funcionalidade. As funções restantes são semelhantes 
ao projeto anterior, permitindo que você aproveite o conhecimento adquirido.
Complete as quatro funções fornecidas de forma que elas façam o seguinte:
-Acrescentar à matriz notas uma nota individual recebida como parâmetro 
e retornar a matriz atualizada.
-Retornar o número total de notas.
-Retornar a primeira nota (a primeira que foi submetida, não a mais alta).
-Retornar a última nota (a última que foi submetida, não a mais baixa).*/


function adicionarNota(notas, nota) {
    notas.push(nota)
    return notas
}

function obterTotalDeNotas(notas) {
    return notas.length
}

function obterPrimeiraNota(notas) {
    return notas[0]
}

function obterUltimaNota(notas) {
    return notas[notas.length -1]
    
}