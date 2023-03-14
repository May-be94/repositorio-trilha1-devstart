/*1. O método reduce() é usado para calcular um unico valor a partir 
de uma matriz;
2. Ao trabalhar com matrizes de numeros, os casos de uso mais comuns do reduce()
são a soma e a multiplicação;
3. O metodo reduce() aceita um redutor;
4. O redutor é um callback que determina a lógica usada para reduzir a matriz a um 
unico numero;
5. O metodo reduce() recebe dois parametros: o redutor e o valor inicial;
6. Para a redução por soma, o valor inicial é sempre zero;
7. O redutor é uma função callback que recebe dois argumentos: total e atual;
8. A variável total (acumulador) é atualizada a cada passo da redução. Na redução por soma,
ela contém a soma acumulada dos itens anteriores da matriz, mais o item atual;
9. A variável atual representa um item da matriz.
10. O redutor é chamado para cada item da matriz.
11. o return é obrigatório
12. Na redução por multiplicação, usamos o valor inicial igual a 1.*/

let notas = [10, 5, 15, 20]

let valorInicial = 0;

let soma = notas.reduce(function(total, atual) {
    console.log(`Total é ${total}`)
//o valor de total começa em 0 (que é dado pelo valorInicial);    
    console.log(`Atual é ${atual}`)
//o valor de atual é de um único item da matriz para cada iteração    
    console.log("---")
    return total + atual
}, valorInicial);
//o valor de total no fim, é o resultado da última iteração do redutor.
console.log(`A soma é ${soma}`)

function multipliqueNumeros(numeros) {
    return numeros.reduce(function(total, atual){
    return total*atual  
    }, 1)
}

// Não modifique as linhas abaixo:
console.log(multipliqueNumeros([10, 20, 30])) // 6000
console.log(multipliqueNumeros([2, 4, 2, 10])) // 160