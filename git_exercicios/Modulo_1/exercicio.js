let pessoa = {
    nome : "",
    cidade : "",
    idade : "",
    cnh : "",
     
};

process.stdout.write("Qual seu nome?? ");
process.stdin.on("data", function (data){
    if(!pessoa.nome){
        
    pessoa.nome = data.toString().trim()
        console.log("Qual sua cidade? ");
    }else if(!pessoa.cidade){
        
    pessoa.cidade = data.toString().trim()
    console.log("Digite sua idade: ");
    }

    pessoa.cnh = data.toString().trim()
})