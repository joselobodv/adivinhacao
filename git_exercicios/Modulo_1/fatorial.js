process.stdin.on("data", function(data){
    entrada_usuario = Number(data.toString().trim())

    let fatorial = 1;

    for (let i = 1; i <= entrada_usuario; i++ ) {
        fatorial = fatorial * 1
    }

    console.log(fatorial)

})