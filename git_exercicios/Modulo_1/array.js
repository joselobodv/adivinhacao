const listaDeCompras = [];

listaDeCompras.push("Pão");
listaDeCompras.push("Leite");
listaDeCompras.push("carne");
listaDeCompras.push("Frutas");

process.stdout.write("Qual item você quer consultar? \n");

process.stdin.on("data", function (data){

if(listaDeCompras. includes (data.toString().trim())){
    console.log("Está na lista");
} else{
    console.log("Não está na lista")
}

})

