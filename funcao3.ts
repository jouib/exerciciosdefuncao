/* Crie uma funçãoque recebe por parâmetro o raio de uma esfera e calcula o seu volume
(v = 4/3*P*R^3). 

Nome: Joui Bomfim Mendonça
*/

function parametro (raio:number): void{
    console.log(`Calculando o volume da esfera.`)
    
    let volume = ((4/3)*(3.14*(raio*raio*raio)))
    console.log(`O valor do volume da esfera é ${volume}`)
}

const teclado = require (`prompt-sync`)();

let raio: number = parseFloat(teclado(`Digite o valor do raio: `))
parametro(raio)