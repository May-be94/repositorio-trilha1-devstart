//if else com strings

//let nome = "Simone"
if(nome === "Simone") {
    //o nome é Simone
} else {
    //o nome NÃO é Simone
}

let nome = "Simone"
if(nome.length >= 3) {
    //o nome tem 3 caracteres ou mais
} else {
    //o nome tem menos de 3 caracteres
}
//validação de senha 1
/*Esta é uma validação básica de senha que você costuma ver ao se registrar em um site.
Complete a função senhaEValida() de forma que ela retorne true quando a senha for válida 
e false caso contrário. A senha é considerada válida quando tem pelo menos 10 caracteres.
Implemente a funcionalidade solicitada.*/

function senhaEValida(senha) {
    console.log(senha)
    if (senha.length >= 10) {
        return true
    } else {
        return false
    }
}
//trim() 
let senha = "   segredo123  "
let senhaSemEspacos = senha.trim() //"segredo123"

//Validação de senha 2
/*Esta é uma validação de senha básica semelhante ao projeto anterior.
Complete novamente a função senhaEValida() de forma que retorne true quando 
a senha for válida e false caso contrário. A senha é considerada válida 
quando possui pelo menos 10 caracteres. Entretanto, espaços à esquerda e à direita 
NÃO devem ser contados. Implemente a funcionalidade solicitada:*/

function senhaEValida(senha) {
    let senhaEvalida = senha.trim() 
    if (senhaEvalida.length >= 10) {
        return true
    } else {
        return false
    }
}

/*Suponha que temos um formulário que aceita um código promocional. 
O código promocional só é considerado válido quando tiver entre 5 e 10 caracteres
(inclusive). Isso significa que 5, 6, 7, 8, 9 e 10 caracteres são 
considerados válidos, mas qualquer outra quantidade de caracteres não é válida.
Preencha a função eCodigoPromocionalValido() de forma que retorne true 
quando o código promocional for válido, e false caso contrário.
Confira as validações abaixo para guiar o seu trabalho.*/

function eCodigoPromocionalValido(codigo) {
    console.log(codigo)
    if (codigo.trim().length < 5) {
        return false
    } else if (codigo.trim().length > 10) {
        return false
    } else { 
        return true
    }
}
function eCodigoPromocionalValido(codigo) {
    console.log(codigo)
    if (codigo.trim().length >= 5 && codigo.trim().length <= 10) {
        return true
    } else {
         return false
    }
}

