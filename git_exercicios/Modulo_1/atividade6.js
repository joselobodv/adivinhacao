let usuario = {
  nome: "",
  idade: "",
  cnh:""
};

console.log("Seja bem vindo!");

process.stdout.write("Qual seu nome? ");
process.stdin.on("data", function (data) {
  if (!usuario.nome) {
    usuario.nome = data.toString().trim();
    console.log("Digite sua idade: ");
  } else if (!usuario.idade) {
    usuario.idade = parseInt(data.toString().trim());
    if (usuario.idade > 18) {
      console.log("Você pode ter CNH ");
    } else {
      console.log("Você não pode ter CNH ");
    }
  }
});




