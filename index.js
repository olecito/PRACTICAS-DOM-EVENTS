console.log('Hola Mundo');
let variable = true;
console.log(variable);
const constante= 5;
console.log(constante);

variable = false; 


let numero1 = 5;
let numero2 = 6;
let respuesta = Math.pow(numero1, numero2);

console.log('la respuesta es: ' + respuesta);


let a = 5;
a += 6;
console.log(a);


for(let i=0; i < 10; i++){
    console.log(i)
}

let resultado = 'capuchino';
function cafetera(ingrediente1, ingrediente2) {
    if(ingrediente1=='leche' && ingrediente2== 'cafe') {
        return resultado;
    }
}

let tasa = cafetera('leche');
console.log(tasa);