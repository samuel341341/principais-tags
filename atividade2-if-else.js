const prompt = require('prompt-sync')();
let nota = parseInt(prompt("Digite sua nota: "));

let faixa;

if (nota >= 9 && nota <= 10) {
    faixa = "Excelente";
} else if (nota >= 7 && nota < 9) {
    faixa = "Bom";
} else if (nota >= 5 && nota < 7) {
    faixa = "Regular";
} else {
    faixa = "Insuficiente";
}

switch(faixa) {
    case "Excelente":
        console.log("Excelente");
        break;
    case "Bom":
        console.log("Bom");
        break;
    case "Regular":
        console.log("Regular");
        break;
    case "Insuficiente":
        console.log("Insuficiente");
        break;
    default:
        console.log("Nota inválida");
}