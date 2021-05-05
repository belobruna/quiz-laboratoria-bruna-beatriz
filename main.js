var name = prompt("Olá, Bem-vindo! Qual o seu nome?")

var participacao = prompt("Você deseja participar do nosso quiz? \n 1) Sim \n 2) Não")

if (participacao == 2) {
    alert("Que pena! Até a próxima.")
}


else if (participacao == 1) {
    var pergunta1 = prompt("1. Quanto é 5 + 5? \n 1) 5 \n 2) 6 \n 3) 10")
    var pergunta2 = prompt("2. Quanto é 9 x 5? \n 1) 14 \n 2) 45 \n 3) 15")
    var pergunta3 = prompt("3. Quanto é 10 / 2? \n 1) 5 \n 2) 10 \n 3) 20")
}

if (pergunta1 == 3) {
    var resposta1 = true
} else if (pergunta1 != 3) {
    var resposta1 = false
}

if (pergunta2 == 2) {
    var resposta2 = true
} else if (pergunta2 != 2) {
    var resposta2 = false
}
if (pergunta3 == 3) {
    var resposta3 = true
} else if (pergunta3 != 3) {
    var resposta3 = false
}
