let nome = "";
let idade = "";
let cnh = "";

console.log("Qual seu nome ?");
process.stdin.on("data", function (data){
    if(!nome) {
        nome = data.toString().trim();
    process.stdout.write("Quantos anos você tem? \n");
}   else if (!idade){
    idade = data.toString().trim();
    process.stdout.write("VocÊ tem CNH? \n ");
}   else
})
  