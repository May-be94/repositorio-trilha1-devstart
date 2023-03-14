/*-O metodo .includes() permite verificar se um item existe dentro da matriz;
- O retorno desse método é do tipo booleano. Ele será true se o item
for encontrado dentro da matriz, e false caso contrário;
- O .includes() só poder ser chamado a partir de uma matriz.

O professor de uma turma gostaria de verificar se a prova que ele 
aplicou foi muito fácil. Ele tem uma verificação simples para isso: 
se pelo menos um dos alunos tirou nota 20 naquela prova, então ela 
é considerada muito fácil. Complete a função oTesteEhMuitoFacil() 
de forma que ela retorne true quando a prova for muito fácil, 
e false caso contrário.*/

function oTesteEhMuitoFacil(notas) {
    return notas.includes(20)
}

// Não modifique as linhas abaixo
console.log(oTesteEhMuitoFacil([10, 15, 13, 19])) // deveria retornar false
console.log(oTesteEhMuitoFacil([7, 13, 20, 15])) // deveria retornar true

/*-O metodo .join() converte a matriz em uma string;
- na string retornada pelo .join(), os caracteres passados como parâmetro são
inseridos entre os itens da matriz.
- CSV significa "Comma Separated Values", ou valores separados por vírgula.
Trata-se de um formato de arquivo que pode ser importado pelo Excel.

Complete a função converterParaFormatoCSV() de forma que ela retorne uma 
string gerada a partir da matriz notas que ela recebe como parâmetro.
A string deve ser composta por todos os itens da matriz separados pelo 
caractere ; (ponto-e-vírgula).*/

function converterParaFormatoCSV(notas) {
    return notas.join(";")
}

// Não modifique as linhas abaixo
console.log(converterParaFormatoCSV([10, 15, 13, 19])) // "10;15;13;19"
console.log(converterParaFormatoCSV([7, 13, 20, 15])) // "7;13;20;15"


function juntarComEComercial(notas) {
    return notas.join(" & ")
}

// Não modifique as linhas abaixo
console.log(juntarComEComercial([10, 15, 13, 19])) // "10 & 15 & 13 & 19"
console.log(juntarComEComercial([7, 13, 20, 15])) // "7 & 13 & 20 & 15"


function exportarCSV(notas) {
    return notas.join(", ")
}

function adicionarNota(notas, nota) {
    notas.push(nota)
    return notas
}

function obterNumeroDeTestes(notas) {
    return notas.length
}

function obterPrimeiraNota(notas) {
    return notas[0]
}

function obterUltimaNota(notas) {
    return notas[notas.length -1]
}

function aProvaEhMuitoFacil(notas) {
    return notas.includes(20)
}

function aNotaExiste(notas, nota) {
    return notas.includes(nota)
}

function exportarCSV(notas) {
    return notas.join(", ")
}