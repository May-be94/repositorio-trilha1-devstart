// Definição da classe
class Usuario {
    constructor(nome, sobrenome, idade){
      this.nome = nome;
      this.sobrenome = sobrenome;
      this.idade = idade;
    }
      
  }
  
  // Uso da classe
  //let samuel = new Usuario("Samuel", "Bueno", 19);
  console.log(samuel);
  
  //let carla = new Usuario("Carla", "Diniz", 30);
  console.log(carla);


  // Definição da classe
class Usuario {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    obterNomeCompleto() {
        return "Nome completo aqui"
    }

    podeVotar(){
        return true
    }

    jaVotou() {
        return false
    }
}

// Uso da classe
let usuario = new Usuario("Daniela", "Queiroz");
console.log(usuario.obterNomeCompleto());

// Definição da classe
class User {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    obterNomeCompleto() {
        return `${this.nome } ${this.sobrenome}`
    }

    // Implemente o método obterNomeCompleto()
    
}

// Uso da classe
let samuel = new User("Samuel", "Bueno");
console.log(samuel.obterNomeCompleto());

let carla = new User("Carla", "Marins");
console.log(carla.obterNomeCompleto());

console.log("---");

//APLICATIVO SALA DE AULA
// Definição da classe
class Estatistica {
    constructor(notas, suasNotas) {
        this.notas = notas
        this.suasNotas = suasNotas
    }
    obterNumeroTotalDeNotas() {
        return this.notas.length
    }
    obterPrimeiraNota(){
        return this.notas[0]
    }
    obterUltimaNota(){
        return this.notas[this.notas.length -1]
    }
    obterSomaDasNotas(){
        return this.notas.reduce(function(total, atual) {
           return total + atual 
        }, 0)
    } 
    obterNotaMedia(){
        return this.obterSomaDasNotas() / this.notas.length
    }
    exportarCsv(){
        return this.notas.join(", ")
    }
    
}

// Uso da classe
let notas = [8, 9, 5, 2, 9];
let suasNotas = new Estatistica(notas);

console.log(suasNotas.obterNumeroTotalDeNotas());
console.log(suasNotas.obterPrimeiraNota());
console.log(suasNotas.obterUltimaNota());
console.log(suasNotas.obterSomaDasNotas());
console.log(suasNotas.obterNotaMedia());
console.log(suasNotas.exportarCsv());

console.log("---");

/* ---- Modifique apenas o código que está acima desta linha ----
document.write(`
<div style="font-family: Verdana, Geneva, Tahoma, sans-serif;">
    <h2>Aplicativo Sala de Aula</h2>   
    <form id="dv-form-de-notas">
        <label for="dv-sua-nota">Sua nota:</label> <input type="number" min="0" max="10"
               required placeholder="Nota (0 a 10)" id="dv-sua-nota">&nbsp;
        <input type="submit" value="Adicionar" /><br><br>
    </form>
 
    <table border="1" id="dv-tabela-estatistica" center>
        <thead>
            <tr>
                <th width="33%">Número de provas realizadas</th>
                <th width="33%">Primeira nota enviada</th>
                <th>Última nota enviada</th>
            </tr>
        </thead>
        <tbody></tbody>
    </table><br><br>
    <table border="1" id="dv-tabela-estatistica-2" center>
        <thead>
            <tr>
                <th width="33%">Soma</th>
                <th width="33%">Nota Média</th>
                <th>Exportar para CSV</th>
            </tr>
        </thead>
        <tbody></tbody>
    </table>
</div>
`);


let dvFormDeNotas = document.querySelector("#dv-form-de-notas");
let dvSuaNota = document.querySelector("#dv-sua-nota");

let dvNotas = [10, 9, 3, 5, 8];

function formatar(dvNotas) {
    let dvEstatistica = new Estatistica(dvNotas);
    console.log("Notas: " + dvNotas.join(', '));
    let tbody = document.querySelector("#dv-tabela-estatistica tbody");
    tbody.innerHTML = `<tr>
    <td>${dvEstatistica.obterNumeroTotalDeNotas()}</td>
    <td>${dvEstatistica.obterPrimeiraNota()}</td>
    <td>${dvEstatistica.obterUltimaNota()}</td>
    </tr>`;

    let tbody2 = document.querySelector("#dv-tabela-estatistica-2 tbody");
    tbody2.innerHTML = `<tr>
    <td>${dvEstatistica.obterSomaDasNotas()}</td>
    <td>${dvEstatistica.obterNotaMedia()}</td>
    <td>${dvEstatistica.exportarCsv()}</td>
    </tr>`;
}

dvFormDeNotas.addEventListener("submit", event => {
    event.preventDefault();
    let newGrade = Number.parseInt(dvSuaNota.value, 10);
    dvNotas.push(newGrade);
    dvSuaNota.value = "";
    formatar(dvNotas);
})

formatar(dvNotas);*/

//Aplicativo para dividir contas
// Implemente a classe Conta

class Conta {
    constructor() {
        this.valores = [];
    }

    adicionarTotais(valorestr) {
    let valor = Number.parseInt(valorestr, 10);
    return this.valores.push(valor)

    }

    obterContagemDosValores() {
        return this.valores.length
    }
     obterTotal() {
         return this.valores.reduce(function(total, atual) {
             return total + atual
         }, 0)
     }

     obterMedia() {
         return this.obterTotal() / this.obterContagemDosValores()
     }

}

// ---- Modifique apenas o código que está acima desta linha ----
document.write(`
<div style="font-family: Verdana, Geneva, Tahoma, sans-serif;">
    <h2>App Dividir Conta</h2>   
    <form id="dv-form-total">
        <label for="component-name">Seu total pago</label><br><br>
        <input type="number" placeholder="Total pago" id="dv-total" autocomplete="off"><br><br>
        <input type="submit" value="Adicionar" />
    </form>

    <div>
        <h2>Sua conta</h2>
        <table border="1">
            <thead>
                <tr>
                    <th width="50%">Descrição</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody id="tbody">
            </tbody>
        </table>
    </div>
</div>
`);

const dvFormulario = document.querySelector("#dv-form-total");
const dvTotal = document.querySelector("#dv-total");
const tbody = document.querySelector("#tbody");

const conta = new Conta();

function formatar() {
    tbody.innerHTML = "";
    conta.valores.forEach(function (valor) {
        tbody.insertAdjacentHTML("beforeend", `<tr>
            <td>SubTotal</td>
            <td>${valor}</td>
        </tr>`);
    });
     tbody.insertAdjacentHTML("beforeend", `<tr class="separator"></tr>
        <tr>
            <th>Total</th>
            <td>${conta.obterTotal()}</td>
        </tr>
        <tr>
            <th>Quantidade de pessoas</th>
            <td>${conta.obterContagemDosValores()}</td>
        </tr>
        <tr>
            <th>Valor por pessoa</th>
            <td>${conta.obterMedia()}</td>
        </tr>`);
}

dvFormulario.addEventListener("submit", event => {
    event.preventDefault();

    conta.adicionarTotais(dvTotal.value);
    formatar();
    dvTotal.value = "";
});



// Aplicativa para importar tarefas do CSV - Implemente a classe Tarefas 
class Tarefas {
    constructor() {
        this.tarefas = [];
    }

    importarCSV(csvString) {
       this.tarefas = csvString.split(", "); 
            
    }

    obterQuantidadeDeTarefas() {
      return this.tarefas.length
    }

    obterPrimeiraTarefa() {
      return this.tarefas[0];
    }

    obterUltimaTarefa() {
      return this.tarefas[this.tarefas.length-1];
    }

    obterTarefasEmCSV() {
      return this.tarefas.join(", ").toLowerCase();
    }
    

}

// ---- Modifique apenas o código que está acima desta linha ----
document.write(`
<style>
.table {
  width: 100%;
  margin-bottom: 20px;
  border: 1px solid white;
}

.table thead {
  background-color: #0C54BE;
  color: white;
  border: 1px solid white;
}

.table th {
  padding: 15px;
}
.table td {
  padding: 10px;
}

.table tbody {
  font-size: 18px;
  border: 1px solid white;
}
.table tbody tr:nth-child(2n) {
  background-color: white;
}

.table tbody tr:nth-child(2n + 1) {
  background-color:  #DCE7F7;
}

/*********/

.select {
  padding: 8px 10px;
  border-radius: 6px;
  margin-top: 10px;
}

</style>
<div style="font-family: Verdana, Geneva, Tahoma, sans-serif;">
    <div>
        <h2><label for="dv-csv-lista-suspensa">Escolha a string CSV</label></h2>
        <select id="dv-csv-lista-suspensa" class="select"> 
            <option value="">Escolha</option>
            <option>Lavar louça, Varrer a casa, Planejar férias</option>
            <option>Apague as luzes, limpe a bicicleta, ligue para o melhor amigo, troque a lâmpada</option>
            <option>Cabelo seco, cozinha limpa</option>
        </select>
    </div><br><br>

    <div>
        <h2>Suas Tarefas</h2>
        <table class="table">
            <thead>
                <tr>
                    <th width="200px">Descrição</th>
                    <th>Valor</th>
                </tr>
            </thead>
            <tbody id="dv-corpo-tabela">
            </tbody>
        </table>
    </div>
</div>
`);

const dvListaSuspensa = document.querySelector("#dv-csv-lista-suspensa");
const dvCorpoTabela = document.querySelector("#dv-corpo-tabela");

const tarefas = new Tarefas();

function formatar() {
    dvCorpoTabela.innerHTML = "";
    tarefas.tarefas.forEach(function (tarefa) {
        dvCorpoTabela.insertAdjacentHTML("beforeend", `<tr>
            <th>Tarefa</th>
            <td>${tarefa}</td>
        </tr>`);
    });
     dvCorpoTabela.insertAdjacentHTML("beforeend", `<tr class="separator">
            <th>Número de tarefas</th>
            <td>${tarefas.obterQuantidadeDeTarefas()}</td>
        </tr>
        <tr>
            <th>Primeira Tarefa</th>
            <td>${tarefas.obterPrimeiraTarefa()}</td>
        </tr>
        <tr>
            <th>Última Tarefa</th>
            <td>${tarefas.obterUltimaTarefa()}</td>
        </tr>
        <tr>
            <th>Tarefas em letras minusculas</th>
            <td>${tarefas.obterTarefasEmCSV()}</td>
        </tr>
        `);
}

dvListaSuspensa.addEventListener("change", event => {
    tarefas.importarCSV(dvListaSuspensa.value)
    formatar();
});

class Temperatura {
    constructor(detalhes){
      this.detalhes = detalhes;
    }
    
    obterLocalizacao() {
        return `${this.detalhes.location.name}, ${this.detalhes.location.country}`

    }

    obterIcone() {
      return this.detalhes.current.weather_icons[0];
      
    }

    obterTemperatura() {
      return this.detalhes.current.temperature + "&deg;C";
    }
    
}

// dados utilizados para trazer a temperatura

let dadosDoClima = {
  "request": {
    "type": "Cidade",
    "query": "Florianopolis",
    "language": "pt",
    "unit": "m"
  }, 
 

  "location": {
    "name": "Florianópolis",
    "country": "Brasil",
    "region": "Santa Catarina",
    "lat": "52.374",
    "lon": "4.890",
    "timezone_id": "Brasil/Brasília",
    "localtime": "2020-11-25 09:11",
    "localtime_epoch": 1606295460,
    "utc_offset": "1.0"
  },
  "current": {
    "observation_time": "08:11 AM",
    "temperature": 25,
    "weather_code": 113,
    "weather_icons": [
      "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png"
    ],
    "weather_descriptions": [
      "Clear"
    ],
    "wind_speed": 17,
    "wind_degree": 160,
    "wind_dir": "SSE",
    "pressure": 1014,
    "precip": 0,
    "humidity": 87,
    "cloudcover": 0,
    "feelslike": 1,
    "uv_index": 1,
    "visibility": 10,
    "is_day": "yes"
  }
}

// ---- Modifique apenas o código que está acima desta linha ----
document.write(`
<div style="font-family: Verdana, Geneva, Tahoma, sans-serif;">
    <div>
        <h2>Previsão do tempo</h2>
    <div><hr />
        <h3 id="dv-cidade-pais"></h3>
        <div style="display:flex; margin-left:1.5em">
            <img src="" alt="Ícone de temperatura" id="dv-icone" />
            <h3 style="margin-left:1.5em" 
            id="dv-temperatura"></h3>
        </div>
    </div>
</div>
`);

let dvCidadePais = document.querySelector("#dv-cidade-pais");
let dvIcone = document.querySelector("#dv-icone");
let temperature = document.querySelector("#dv-temperatura");

let temperatura = new Temperatura(dadosDoClima);

dvCidadePais.textContent = temperatura.obterLocalizacao();
dvIcone.src = temperatura.obterIcone();
temperature.innerHTML = temperatura.obterTemperatura();