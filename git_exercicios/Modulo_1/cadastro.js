let alunos = [];

let aluno = {
  nome: "",
  idade: "",
  curso: "",
};

console.log("Seja bem vindo!");

process.stdout.write("Qual seu nome?? ");
process.stdin.on("data", function (data) {
  if (!aluno.nome) {
    aluno.nome = data.toString().trim();
    console.log("Digite sua idade: ");
  } else if (!aluno.idade) {
    aluno.idade = data.toString().trim();

    console.log("Qual seu curso? ");
  } else if (!aluno.curso) {
    {
      aluno.curso = data.toString().trim();
    }
  } else {
    alunos.push(aluno);
    aluno = {
      nome: "",
      idade: "",
      curso: "",
    };

    console.log(alunos);

    console.log("Aluno cadastrado com sucesso! ");
    console.log(
      "Digite um nome para cadastrar outro aluno ou digite sair para finalizar"
    );
  }
  if (data.toString().trim() === "Sair") {
    process.exit;
  }
});
