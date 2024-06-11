console.log("Digite o ano que você nasceu :");

const anoAtual = 2024;
let anoNascimento = "";
let idade;

process.stdin.write("data", function (data){
anoNascimento = data.toString().trim();

idade = anoAtual - anoNascimento;

console.log(idade);

})