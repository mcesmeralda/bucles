const prompt = require("prompt-sync")({ sigint: true });

function num(){
    let num
for (let numero = 5; numero <= 20; numero += 3) {
    console.log(numero);
}
}
num()


function sum(){
    let sum
    for(let n = 0; n <=100; n++){
   console.log(n)
    }
}
sum()



function calcularFactoria(numeros){
    if (numeros === 0 || numeros === 1) {
        return 1;
    } else {
        let factorial = 1;
        for (let i = 2; i <= numeros; i++) {
            factorial *= i;
        }
        return factorial;
    }
}

const numeroEntero = parseInt(prompt('Escribe un número entero:'));
const factorialResultado = calcularFactoria(numeroEntero);
console.log(`El factorial de ${numeroEntero} es: ${factorialResultado}`);
