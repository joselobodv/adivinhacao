import random

def gerar_numero_aleatorio(minimo, maximo):
  """
  Gera um número aleatório entre um intervalo definido.

  Args:
      minimo (int): Limite inferior do intervalo.
      maximo (int): Limite superior do intervalo.

  Returns:
      int: Número aleatório gerado.
  """
  return random.randint(minimo, maximo)

def verificar_palpite(numero_aleatorio, palpite, tentativas_restantes, tentativas_anteriores):

  diferenca = abs(numero_aleatorio - palpite)

  if palpite == numero_aleatorio:
    print("Parabéns! Você adivinhou o número secreto!")
    return True
  elif diferenca < 10:
    print("Você está muito quente!")
  elif diferenca < 20:
    print("Você está quente!")
  elif diferenca < 50:
    print("Você está morno!")
  else:
    print("Você está frio!")

  if tentativas_restantes <= tentativas_anteriores[-1] and tentativas_anteriores[-1] > 1:
    print(f"O número anterior era {tentativas_anteriores[-2]}!")
    numero_aleatorio = gerar_numero_aleatorio(minimo, maximo)
    tentativas_anteriores.pop()  # Remove o número anterior da lista
    print(f"Você tem uma nova chance com um novo número entre {minimo} e {maximo}!")

  return False

def iniciar_jogo():
  """
  Inicia o jogo de adivinhação.
  """
  minimo = 1

  while tentativas_restantes > 0:
    palpite = int(input(f"Digite um número entre {minimo} e {maximo} (tentativas restantes: {tentativas_restantes}): "))

    if not palpite.isdigit() or minimo > palpite or palpite > maximo:
      print("Entrada inválida. Digite um número entre o intervalo especificado.")
      continue

    tentativas_anteriores.append(palpite)  # Armazena o palpite atual

    if verificar_palpite(numero_aleatorio, palpite, tentativas_restantes, tentativas_anteriores):
      break

    tentativas_restantes -= 1

  if tentativas_restantes == 0:
    print(f"Você não conseguiu adivinhar o número secreto. O número era: {numero
