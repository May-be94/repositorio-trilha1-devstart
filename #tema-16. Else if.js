/* o par if else avalia apenas dois cenarios: a condição e 
a respectiva condição oposta. Para lidar com outros cenarios alem desses, 
podemos usar o else if. O else if só pode ser usado após uma condicional if.*/

function transformaNotaEmLetra(nota) {
    if (nota >= 15) {
        return "A"
    } else if (nota >= 10) {
        return "B"
    } else {
        return "F"
    }
}

// Classificação de notas A-F 1

function obterLetraDaNota(nota) {
    if (nota >= 15) {
        return "A"

    } else if (nota >= 10) {
        return "B"

    } else {
        return "F"

    }
}

// Classificação de notas A-F 2
/*Complete a função obterLetraDaNota() de forma que ela retorne a letra correta 
("A", "B" ou "F") com base no número da nota. A regra para as notas é a seguinte:
Igual ou maior a 15: nota A.
Igual ou maior a 10, e menor que 15: nota B.
Menor que 10: nota F.
Nós escrevemos a lógica de uma maneira diferente. Tente retornar as letras corretas  
com base nas condições especificadas. Implemente a funcionalidade solicitada.*/

function obterLetraDaNota(nota) {
    if (nota < 10) {
        return "F"

    } else if (nota < 15) {
        return "B"

    } else {
        return "A"

    }
}

/* ERROS COMUNS AO USAR ELSE IF
1. escrever else if de um jeito diferenter (elseif, elsif etc);
2. acrescentar else if depois do else;
3. misturar parentese () e {};

if else pode ser utilizado para comparar strings, senão vejamos:*/

if(resultado === "sucesso") {
    //o usuario pagou
}else if (resposta === "credito_insuficiente") {
        //o cartao do usuario nao tinha cresito
    } else {
        //tratar todos os outros cenarios
    }

/*Complete a função obterLetraDaNota() de forma que ela retorne a letra correta 
("A", "B" ou "F") com base na nota recebida por parâmetro. 
A regra para as notas é a seguinte:
Igual ou maior a 15: nota A.
Igual ou maior a 10, e menor que 15: nota B.
Menor que 10: nota F.
Note que:
Você já tem uma condição if e else.
Você precisa inserir uma condição else if para lidar com o caso em que a nota é "B".
NÃO copie e cole a resposta, escreva você mesmo.
Implemente a situação pedida.*/

function obterLetraDaNota(nota) {
    if (nota >= 15) {
        return "A"

    } else if (nota >= 10) {
        return "B"
    } else {
        return "F"
    }
}
/* Complete a função receberSaudacaoPorPeriodoDoDia() de forma que ela 
retorne uma das seguintes strings, dependendo da hora do dia:
"Bom dia", quando a hora for estritamente antes das 12.
"Boa tarde", quando a hora estiver entre as 12 (inclusive), mas estritamente antes das 20.
"Boa noite" em todos os outros casos.
Implemente a função receberSaudacaoPorPeriodoDoDia() conforme especificado.*/

function receberSaudacaoPorPeriodoDoDia(hora) {
    if (hora < 12) {
      return "Bom dia"
    } else if (hora < 20) {
        return "Boa tarde"
    } else {
        return "Boa noite"
    }
}
//Não modifique as linhas abaixo
console.log(receberSaudacaoPorPeriodoDoDia(11)) // "Bom dia"
console.log(receberSaudacaoPorPeriodoDoDia(12)) // "Boa tarde"
console.log(receberSaudacaoPorPeriodoDoDia(14)) // "Boa tarde"
console.log(receberSaudacaoPorPeriodoDoDia(22)) // "Boa noite"

//atalho
function podeVotar(idade) {
    return (idade >= 16)
}

// Não modifique as linhas abaixo
console.log(podeVotar(25))
console.log(podeVotar(13))


