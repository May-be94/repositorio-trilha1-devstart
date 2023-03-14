/*Complete a função obterMensagemDaUltimaTemperatura() 
de forma que ela retorne a seguinte string: 
"A última temperatura está na posição X", onde X é o número 
que representa a posição do último item da matriz de temperaturas.
Por exemplo, para uma matriz de 4 itens, a função deve retornar:
 "A última temperatura está na posição 3".*/

 function obterMensagemDaUltimaTemperatura(temperaturas) {
    return "A última temperatura está na posição " + [temperaturas.length -1]
}

// Não modifique as linhas abaixo
console.log(obterMensagemDaUltimaTemperatura([-5, 12, 15])) 
// "A última temperatura está na posição 2"
console.log(obterMensagemDaUltimaTemperatura([13, 10]))
// "A última temperatura está na posição 1"

function obterNumeroTotalDeNotas(notas) {
    return notas.length
}

function obterPrimeiraNota(notas) {
    return notas[0]
}

function obterUltimaNota(notas) {
    return notas[notas.length -1]
}