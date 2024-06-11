console.log("digite seu nome:")

let alunos = [];
let aluno = {
  nome: "",
  idade: "",
  curso: "",
};

process.stdin.on("data", function (data) {
  var entrada = data.toString().trim();

 
  if (!aluno.nome) {
    aluno.nome = entrada;
    console.log("Digite sua idade:");
  } else if (!aluno.idade) {
    aluno.idade = entrada;
    console.log("Digite seu curso:");
  } else if (!aluno.curso) {
    aluno.curso = entrada;
    alunos.push(aluno);
    aluno = {
      nome: "",
      idade: "",
      curso: "",
    };
    console.log("Aluno cadastrado com sucesso!");
    console.log("Digite 'sair' para exibir a lista de alunos cadastrados ou continue cadastrando novos alunos:");
  }

  if (entrada === "sair") {
    exibirListaAlunos();
  }
});

function exibirListaAlunos() {
  console.log("Lista de Alunos cadastrados:");
  alunos.forEach(function(aluno) {
    console.log(`Nome: ${aluno.nome}, Idade: ${aluno.idade}, Curso: ${aluno.curso}`);
  });
}