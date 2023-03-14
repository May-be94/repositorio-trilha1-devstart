//Como somar números 

/*1. Antes de calcular a soma, precisamos criar uma variável para
armazenar o resultado do cálculo;
2. Essa variável precisa ser inicializada com o valor 0;
3. Para adicionar um novo valor à soma, podemos escrever: soma = soma
+ 10. Assim, o número 10 será somado ao valor que a variável já tem.
4. Use a iteração de matriz com .forEach() para calcular a soma 
dos itens da matriz/
5. O local correto para inicializar a variável da soma é antes do
.forEach()*/

let notas = [10, 8, 4, 5]

let soma = 0
notas.forEach(function(nota) {
    soma = soma + nota
})
console.log(soma)//27

function calcular(itens){
    let soma = 0
    itens.forEach(function(item) {
        soma = soma + item
    })
    return soma
}
function obterMediaDeTodasAsNotas(notas) {
    let media = obterSomaDeTodasAsNotas(notas)/notas.length
    return media
}

function somaNotasAcimaDe6(notas) {
    let soma = 0
    notas.forEach(function(nota){
        if(nota >= 6) {
        soma = soma + nota  
        }
    })
    return soma
}