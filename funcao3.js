/* Crie uma funçãoque recebe por parâmetro o raio de uma esfera e calcula o seu volume
(v = 4/3*P*R^3).

Nome: Joui Bomfim Mendonça
*/
function parametro(raio) {
    console.log("Calculando o volume da esfera.");
    var volume = ((4 / 3) * (3.14 * (raio * raio * raio)));
    console.log("O valor do volume da esfera \u00E9 ".concat(volume));
}
var teclado = require("prompt-sync")();
var raio = parseFloat(teclado("Digite o valor do raio: "));
parametro(raio);
