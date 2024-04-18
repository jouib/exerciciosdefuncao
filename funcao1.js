/* Faça uma função que recebe um valor inteiro e verifica se o valor é par. A unção deve retornar
1 se o número for par e 0 se for ímpar. */
console.clear();
var teclado = require("prompt-sync")();
var x = parseInt(teclado("Digite um n\u00FAmero inteiro: "));
function divisão(dividendo) {
    var resultado = dividendo % 2;
    if (resultado == 0) {
        console.log("O n\u00FAmero \u00E9 par!! 0");
    }
    else if (resultado == 1) {
        console.log("O numero \u00E9 impar!! 1");
    }
    return resultado;
}
var resultado = divisão(x);
