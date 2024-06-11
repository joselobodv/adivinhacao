// Função para gerar um número aleatório entre um intervalo
function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Definindo o intervalo do número aleatório
  const min = 1;
  const max = 100;
  
  // Número aleatório gerado
  let numeroSecreto = gerarNumeroAleatorio(min, max);
  
  // Número de tentativas do jogador (alterado para usar o 'for')
  const tentativasMaximas = 10;
  
  // Loop principal do jogo com 'for'
  for (let tentativa = 1; tentativa <= tentativasMaximas; tentativa++) {
    let palpite = parseInt(prompt(`Digite um número entre ${min} e ${max} (tentativa ${tentativa}/${tentativasMaximas}):`));
  
    if (isNaN(palpite) || palpite < min || palpite > max) {
      console.log("Entrada inválida. Por favor, digite um número entre o intervalo especificado.");
      continue;
    }
  
    if (verificarPalpite(palpite)) {
      break;
    }
  }
  
  // Função para verificar se o palpite está correto (igual ao código anterior)
  function verificarPalpite(palpite) {
    // ... (código da função verificarPalpite permanece o mesmo)
  }
  
  // Mensagem final
  if (tentativa === tentativasMaximas + 1) {
    console.log("Você não conseguiu adivinhar o número secreto. O número era:", numeroSecreto);
  } else {
    console.log("Parabéns! Você adivinhou o número secreto!");
  }
  