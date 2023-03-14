//recomendado usar plural no none das matrizes
function obterPrimeiraNota(notas) {
    return notas[0]

}

// Não modifique as linhas abaixo
console.log(obterPrimeiraNota([13, 10, 18, 19, 20]))
console.log(obterPrimeiraNota([3, 0, 10, 17]))

/*Complete a função obterNomeCompleto de forma que ela retorne o nome 
completo da pessoa. Esse nome completo deverá ser composto pelos 
seguintes elementos, nesta ordem: O primeiro nome, que é o primeiro 
item da matriz recebida como parâmetro. Um caractere de espaço.
O sobrenome, que é o segundo item da matriz recebida como parâmetro.*/

function obterNomeCompleto(nomes) {
    return `${nomes[0]} ${nomes[1]}`

}

// Não modifique as linhas abaixo
console.log(obterNomeCompleto(["Samira", "Diniz"]))
console.log(obterNomeCompleto(["Alexandre", "Bessa"]))

/*"A loja está localizada em LAT, LON".
Importante: 
LAT será substituído pelo primeiro item do parâmetro de coordenadas 
(que é uma matriz)
LON será substuído pelo segundo item do parâmetro de coordenadas.*/

function localizacaoDaLoja(coordenadas) {
    return "A loja está localizada em " + coordenadas[0] + ", " + coordenadas[1]

}

// Não modifique as linhas abaixo
console.log(localizacaoDaLoja([5.123, 2.374]))
console.log(localizacaoDaLoja([-2.207, 9.319]))


/*Complete a função localizacaoDaLoja() de forma que ela retorne a string:
"NOME localiza-se na LAT, LON" Nessa string, devem acontecer as seguintes
substituições:
NOME deve receber o nome da loja com o respectivo artigo 
(é o primeiro parâmetro da função).
LAT deve receber o primeiro item da matriz de coordenadas 
(essa matriz é o segundo parâmetro da função).
LON deve receber o segundo item da matriz de coordenadas.*/

function localizacaoDaLoja(loja, coordenadas) {
    return loja + " localiza-se na " + coordenadas[0] + ", " + coordenadas[1]
}

// Não modifique as linhas abaixo 
console.log(localizacaoDaLoja("O supermercado", [5.123, 2.374]))
console.log(localizacaoDaLoja("A academia", [-2.207, 9.319]))

/*Projeto 9 - Diferença de área de superfície
Complete a função calcularDiferenca() de forma que ela retorne 
um número representando a diferença (subtração) entre a área da 
superfície dos dois retângulos que ela recebe.
Aqui está um exemplo do que a função calcularDiferenca() recebe:
CalcularDiferenca([10, 20], [5, 10])
Ele sempre receberá a largura e o comprimento de dois retângulos. 
No exemplo acima, isso significa que o primeiro retângulo tem uma 
largura de 10 e um comprimento de 20. Logo, sua área de superfície 
é 10 * 20 = 200.
E o segundo retângulo tem uma largura de 5 e comprimento de 10, 
o que significa que sua área de superfície é 5 * 10 = 50.
Nesse exemplo, o resultado de calcularDiferenca deve ser:
10 * 20 - 5 * 10 = 150.*/

function calcularDiferenca(primeiroRetangulo, segundoRetangulo) {
    return (primeiroRetangulo[0]*primeiroRetangulo[1]) - 
    (segundoRetangulo[0]*segundoRetangulo[1]) 

    console.log("Primeiro Retângulo", primeiroRetangulo)
    console.log("Segundo Retângulo", segundoRetangulo)
    
}

/* Corrigir primeiro número
Complete a função corrigirPrimeiroNumero() de forma que ela 
mude o primeiro item da matriz recebida por parâmetro para 2.
A função deve, além de modificar esse primeiro item, retornar 
a matriz já modificada.*/

function corrigirPrimeiroNumero(numeros) {
    numeros[0] = 2
    return numeros
}

// Não modifique as linhas abaixo
console.log(corrigirPrimeiroNumero([1, 4, 6, 8]))
console.log(corrigirPrimeiroNumero([1, 10, 13, 19]))

function corrigirSegundoNumero(numeros) {
    numeros[1]= 5
    return numeros
}

// Não modifique as linhas abaixo
console.log(corrigirSegundoNumero([1, 4, 6, 8]))
console.log(corrigirSegundoNumero([1, 10, 13, 19]))


function incrementarPrimeiraTemperatura(temperaturas) {
    temperaturas[0] = temperaturas[0]+1
    return temperaturas
}

// Não modifique as linhas abaixo
console.log(incrementarPrimeiraTemperatura([3, 5, 4, 7]))
console.log(incrementarPrimeiraTemperatura([-5, 12, 15, 18, 13]))