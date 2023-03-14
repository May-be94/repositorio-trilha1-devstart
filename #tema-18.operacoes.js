//concatenação de strings

//let nome = "Gabriela"
let mensagem = "Olá, " + nome
console.log(mensagem) // "Olá, Gabriela"

function cumprimentaUsuario(nome) {
    return "Olá, " + nome
}
console.log(cumprimentaUsuario("Gabriela")) // "Olá, Gabriela"
console.log(cumprimentaUsuario("Eduardo")) // "Olá, Eduardo"

function informaIdade(idade) {
    return "Você tem " + idade + "anos"
}
//exemplos de uso
informalidade(20) // "Você tem 20 anos"
informalidade(34) // "Você tem 34 anos"

let total = 300
let nota = 5
//let nome = "Vinicius"

total + nota // 35 (adição)
20 + total // 50 (adição)
"olá " + nome //"olá, Vinicius" (concatenação)

/*Complete a função obterDescricaoDaIdade(), de forma 
que ela retorne a string "Você tem atualmente X anos", onde X 
é a idade do usuário recebida como parâmetro.*/


function obterDescricaoDaIdade(idade) {
    return "Você tem atualmente " + idade + " anos"
}

// Não modifique as linhas abaixo
console.log(obterDescricaoDaIdade(18))
console.log(obterDescricaoDaIdade(20))

/*Complete a função obterNomeCompleto() de forma que ela recupere o nome completo do usuário.
O retorno deve ser o primeiro nome, seguido por um caractere de espaço e, em seguida, o sobrenome.
Por exemplo, obterNomeCompleto("Alex", "Seixas") deve retornar uma string "Alex Seixas".
Complete a função conforme foi solicitado.*/

function obterNomeCompleto(nome, sobrenome) {
    return nome + " " + sobrenome
}
// Não modifique as linhas abaixo
console.log(obterNomeCompleto("Alex", "Seixas")) // "Alex Seixas"
console.log(obterNomeCompleto("Cássia", "Moreira")) // "Cássia Moreira"

//declarando uma template string
let cidade = `Goiânia` //uso do caractere de crase (``) em vez de ("")
//string definidas com caractere de crase são chamadas de template strings

//INTERPOLAÇÃO DE STRINGS

let nome = "Tiago"
let sobrenome = "Silva"
//Usando interpolação
let mensagem1 = `Olá, ${nome} ${sobrenome}` //`Olá, Tiago Silva`
//usando concatenação 
let mensagem2 = "Olá, " + nome + " " + sobrenome // "Olá, Tiago Silva"

function cumprimentarUsuario(nome){
    return `Bem-vindo, ${nome}`
}
function obterDescricaoDaIdade(idade) {
    return `Você tem atualmente ${idade} anos`
}

// Não modifique as linhas abaixo
console.log(obterDescricaoDaIdade(18))
console.log(obterDescricaoDaIdade(20))

function obterNomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`
}
// Não modifique as linhas abaixo
console.log(obterNomeCompleto("Alex", "Ferreira")) // "Alex Ferreira"
console.log(obterNomeCompleto("Cláudia", "Moraes")) // "Cláudia Moraes"