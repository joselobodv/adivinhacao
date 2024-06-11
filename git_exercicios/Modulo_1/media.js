console.log("Digite alguns numeros: ");

let numeros = [];

process.stdin.on("data", function (data) {
let numero = Number(data.toString().trim());

numeros.push(numero)
let soma = 0

for (let i = 0; i < numeros.length; i++) {
    soma += numeros [i];

}console.log("Meédia :" + soma / numeros.length);    
})
