console.log ("Hello Word!!")
   //passo 0
   let prompt = require("prompt-sync")();
   let data = new Date();
   let diaHoje = new Date().getDate()
   let mesHoje = new Date().getMonth()+1
   let anoHoje = new Date().getFullYear()

    // Formatar data

    function formatarData (data) {
    let dataFormatada = new Date(data);
    let diaHoje = new Date().getDate()
    let mesHoje = new Date().getMonth()+1
    let anoHoje = new Date().getFullYear()

    return `${dataFormatada.getDate()}/${dataFormatada.getMonth()+1}/${dataFormatada.getFullYear()}`
    }
    console.log (formatarData(data))

   let dia = parseInt(prompt("Digite o dia de nascimento: "))
   let mes = parseInt(prompt("Digite o mes de nascimento: "))
   let ano = parseInt(prompt("Digite o ano de nascimento: "))

//    if (diaHoje < dia) {
//     console.log("Dia digitado maior");
//   }else if (diaHoje == dia) {
//     console.log("Dia igual de hoje");
//   } else {
//     console.log(diaHoje+ " dia digitado menor");
//   }

if (mesHoje < mes) {
    console.log("Mês digitado maior");
  }else if (mesHoje == mes) {
    console.log("Mes igual de hoje");
  } else {
    console.log("Mês " +mesHoje+ " - mês digitado menor");
  }

  
  