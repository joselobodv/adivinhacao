/* 

let frutas = ["maca", "banana", "pessego", "maca", "banana"];

let cesta = {};

for (let i = 0; i < frutas.length; i++){
  console.log(cesta)
  if(cesta[frutas[i]]){
    cesta[frutas[i]] ++
  } else {
    cesta[frutas[i]] = 1
  }
  console.log(cesta)

   */

/*  

let numeros = [10, 20, 30, 40, 33, 50, 60, 70, 80, 90, 100];
let multiplos3 = [];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 3 == 0) {
    multiplos3.push(numeros[i]);
  }
}

console.log(multiplos3);

 *//* 

let pessoa = {
  nome: "José",
  idade: 23,
  cidade: "Ponta Grossa"
}

console.log(pessoa.nome, pessoa["nome"])
if(pessoa["idade"] >= 18) {
  console.log("Maior de idade")
} else {
  console.log("Menor de idade")
}
 */ /*  

const alunos = [
  {
    nome: "João",
    nota: 1,
  },
  {
    nome: "Maria",
    nota: 5.5,
  },
  {
    nome: "Pedro",
    nota: 2,
  },
];

for (let i = 0; i < alunos.length; i++) {
  if (alunos[i].nota >= 7) {
    console.log("O aluno " + alunos[i].nome + " foi aprovado");
  } else if (alunos[i].nota > 5 && alunos[i].nota < 7) {
    console.log("O aluno " + alunos[i].nome + " ta na média");
  } else {
    console.log("O aluno " + alunos[i].nome + " foi reprovado");
  }
}
*/

let usuario = {};


console.log("digite seu nome");

process.stdin.on("data", function (data) {
  let entrada_usuario = data.toString().trim();

  if (!usuario.nome) {
    if (entrada_usuario.length > 3) {
      usuario.nome = entrada_usuario;
      console.log("Insira agora a idade");
    } else {
      console.log("nome invalido");
    }
  } else if (!usuario.idade) {
    if (entrada_usuario >= 0 && entrada_usuario <= 150) {
      usuario.idade = entrada_usuario;
      console.log("Insira agora o seu salario");
    } else {
      console.log("idade invalida");
    }
  } else if (!usuario.salario) {
    if (entrada_usuario > 0) {
      usuario.salario = entrada_usuario;
      console.log("Insira seu sexo");
    } else {
      console.log("salario invalido");
    }
  } else if (!usuario.sexo) {
    if (entrada_usuario == "m" || entrada_usuario == "f") {
      usuario.sexo = entrada_usuario;

      switch (usuario.sexo) {
        case "m":
          console.log("masculino");
          break;
        case "f":
          console.log("feminino");
          break;
      }

      console.log("insira seu estado civil");
    } else {
      console.log("sexo invalido");
    }
  } else if (!usuario.estado_civil) {
    if (
      entrada_usuario == "s" ||
      entrada_usuario == "c" ||
      entrada_usuario == "v" ||
      entrada_usuario == "d"
    ) {
      usuario.estado_civil = entrada_usuario;

      switch (usuario.estado_civil) {
        case "s":
          console.log("solteiro");
          break;
        case "c":
          console.log("casado");
          break;
        case "v":
          console.log("viuvo");
          break;
        case "d":
          console.log("divorciado");
          break;

      }

      console.log(usuario)
    } else {
        console.log("estado civil invalido");
    }
  }
});

