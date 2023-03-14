//Complete o retorno do else 2

function podeVotar(idade) {
	if (idade >= 16) {
		return "Você tem permissão para votar"
	}
	else {
		return "Você não permissão para votar"
	}
}
// exemplos de uso
podeVotar (20) //retorna "Você tem permissão para votar"
podeVotar (10) //"Você não permissão para votar"

function podeVotar(idade) {
    if (idade >= 16) {
        return true
    } else {
        return false

    }
}

//escreva seu proprio else 
function ePositivo(numero) {
    if (numero > 0) {
        return true
    }
    else {
        return false
    }
}

// Não modifique as linhas abaixo
console.log(ePositivo(7))
console.log(ePositivo(-4))


function mensagemDeVotacao(idade) {
    if(idade >= 16 && idade >= 30) {
      return "Você pode votar"
    } else {
      return "Você não pode votar"
    }
  }

if(temperatura >=100 && temperatura <=150) {
    return true
  } else {
    return false
  }
  