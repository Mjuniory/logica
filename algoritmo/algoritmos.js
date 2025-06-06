//Exercícios de Algoritmos
//Prof. Gustavo Guanabara


//1
//alert("ola mundo")




//2


//let nome = prompt("qual e o seu nome ? ")
//alert("ola " + nome + ", e um prazer te conhecer")



//3) 
//let nome = prompt("Nome do funcionario : ")
//let salario = prompt("Salario :  ")
//salario = Number(salario)

//alert("  o funcionario  " + nome + "  tem um salario de  " + salario + " em dezembro")


//4
//let num1 = prompt("digite um valor : ")
//let num2 = prompt("digite outro valor : ")
//num1 = Number(num1)
//num2 = Number(num2)
//let Soma = num1 + num2
//alert("a soma de  " + num1 + "  e  " + num2 + " e  igual a " + Soma)

//5

//let Nota1 = prompt("Digite a primeira nota : ")
//let Nota2 = prompt(" Digite a segunda nota : ")
//Nota1 = Number(Nota1)
//Nota2 = Number(Nota2)


//if (isNaN(Nota1) || isNaN(Nota2)) {
// alert("por favor ,insira  valores numericos validos")
//} else {
//let Media = (Nota1 + Nota2) / 2
//alert(`a media de ${Nota1} e ${Nota2} e de ${Media.toFixed(2)}`)
//}

//6
//let num = prompt("digite um numero")
//num = Number(num)

//let antecessor = num - 1
//alert("o antecessor do " + num + " e " + antecessor)
//let sucessor = num + 1
//alert("o sucessor  de " + num + " e " + sucessor)

//7
//let num = parseFloat(prompt("digite um numero : "),10)


//let dobro = num * 2
//alert("o dobro de " + num + " ë de " + dobro)

//let terca = num / 3
//alert("a terca parte de " + num + " e de " + terca)


//8
//function converterdistancia(metros) {

//let km = metros / 1000
//let hm = metros / 100
//let dam = metros / 10
//let dm = metros * 10
//let cm = metros * 100
//let mm = metros * 1000

//alert(`A distância de ${metros}m corresponde a:`);
//alert(`${km} Km`);
//alert(`${hm} Hm`);
//alert(`${dam} Dam`);
//alert(`${dm} dm`);
//alert(`${cm} cm`);
//alert(`${mm} mm`);


//}
//let metros = parseFloat(prompt("Digite uma distância em metros: "), 10)
//if (!isNaN(metros)) {
//converterdistancia(metros);
//} else {
//console.log("Por favor, insira um número válido.");
//}





//9
//let pessoa = parseFloat(prompt("quanto de dinheiro tens na carteira : "))
//let dolar = pessoa / 3.45
//alert("o valor que podes comprar e  " + dolar)



//10

//let largura = parseFloat(prompt("digite a largura da area : "))
//let altura = parseFloat(prompt("digite a altura da area : "))

//if (isNaN(largura) || isNaN(altura)) {
// alert("verifique bem os dados antes de digitar ")

//} else {
//let area = largura * 2
//alert("a largura da area e " + area)

//let litros = area / 2
//alert("os litros da tinta e " + litros)
//}

//11
//let a = parseInt(prompt("dgite o valor de a : "), 10)
//let b = parseInt(prompt("digite o valor de b : "), 10)
//let c = parseInt(prompt("digite o valor de c : "), 10)


//let delta = b * b - 4 * a * c
//if (delta > 0) {
//let x1 = (-b + Math.sqrt(delta)) / (2 * a)
//let x2 = (-b - Math.sqrt(delta)) / (2 * a)

//alert("as raizes de x1  e  x2 sao :  x1 = " + x1 + " ,x2 = " + x2)
//} else if (delta === 0) {
//let x = -b / (2 * a)
//alert("a raiz dupla e : x = " + x)

//} else {
//alert("a equacao nao tem raiz reais")
//}


//12
//let produto = prompt("digite o preco do produto:  ")
//produto = Number(produto)



//if (isNaN(produto)) {
//alert("digite o preco do produto novamente !")
//} else {
//let desconto = produto * 0.05
//let precodoproduto = produto - desconto
//alert("o preco promocional e  : " + precodoproduto.toFixed(2))
//}

//13
//let nome = prompt("qual e o nome do funcionario : ")

//if (!nome) {
//alert("nome invalido ,por favor,digite o nome do funcionario. ")
//} else {
//let salario = parseFloat(prompt("digite o salario do funcionario : "))
//if (isNaN(salario)) {
//alert("digite novamente o salario do funcionario !")
//} else {
//let aumento = salario * 0.15
// let novosalario = salario + aumento
// alert("o valor do seu salario novo aumentou para: " + novosalario.toFixed(2))
// }
//}



//14




//let quantidade = parseFloat(prompt("digite a quantidade de km percorrido por um carro alugado : "))
//let dias = parseInt(prompt("digite os dias que o carro foi alugado : "), 10)



//if (isNaN(quantidade) || isNaN(dias)) {
//alert("digite os valores validos !")
//} else {
//let custodias = dias * 90
//let porkm = quantidade * 0.20
//let precototal = custodias + porkm

//alert("o preco total a pagar e :rs " + precototal.toFixed(2))
//}


//15

//let diastrabalhados = parseInt(prompt("quantas vezes trabalhou durante um mes : "), 10)


//if (isNaN(diastrabalhados)) {
//alert("digite os dados corretamente ! ")
//} else {
//let horastrabalhadas = diastrabalhados * 8
//let salario = horastrabalhadas * 25

//alert("o salario do funcionario sera: " + salario.toFixed(2))

//}

//16  
//let nome = prompt("qual e o seu nome : ")
//let diasfumados = parseInt(prompt("quantas vezes durante o dia esta fumando :  "), 10)
//let anosfumados = parseInt(prompt("quantos anos  esta fumando : "), 10)

//if (isNaN(diasfumados) || isNaN(anosfumados)) {
//alert("por favos ,digite os valores corretamente!")
//} else {
//let totaldias = diasfumados * 365
//let minutosperdidos = totaldias * 10
//let diasperdidos = minutosperdidos / (60 * 24)
//alert("os dias que foram gastados e de :" + diasperdidos.toFixed(2))
//}


//17
/*
let velocidadecarro = parseInt(prompt("digite a velocidade do carro ? "), 10)

if (velocidadecarro > 80) {
  let velocidadeultrapassado = velocidadecarro - 80
  let multado = velocidadeultrapassado * 5
  alert("foste multado e o dinheiro a pagar em rs e de : " + multado.toFixed(2))

} else {
  alert("acesso permitido")
}
*/

//18
//Faça um programa que leia o ano de nascimento de uma pessoa, calcule a idade
//dela e depois mostre se ela pode ou não votar.

//let anonascimento = parseInt(prompt("digite o ano do seu aniversario : "), 10)


//if (isNaN(anonascimento)) {
//alert("por favor, digite o valor novamente!")
//} else {
//let anoatual = new Date().getFullYear()
//let idade = anoatual - anonascimento
//alert(" sua idade e " + idade)

//if (idade < 18) {
//alert("voce nao pode votar ")
//} else {
//alert("voce pode votar")
//}
//}


//19

//let nome = prompt("digite o seu nome:  ")
//let Nota1 = parseInt(prompt("digite a primeira nota :  "), 10)
//let Nota2 = parseInt(prompt("digite a segunda nota : "), 10)

//let media = (Nota1 + Nota2) / 2

//if (isNaN(media)) {
//alert("por favor, digite os valores corretamente!")
//} else if (media < 7) {
//alert("nao tiveste um bom aproveitamento")
//} else {
//alert("tiveste um otimo aproveitamento")
//}

//20
//Desenvolva um programa que leia um número inteiro e mostre se ele é PAR ou
//ÍMPAR.

//let num = parseInt(prompt("digite um numero inteiro : "), 10)

//if (isNaN(num)) {
//alert("por favor, digite os valores corretamente!")
//} else {
//if (num % 2 === 0) {
//alert(num + "o numero e par")
//} else {
//alert(num + "o numero e  impar")
//}
//}



//21

//let ano = parseInt(prompt("digite um  ano : "), 10)

//if (isNaN(ano)) {
//alert("por favor, digite os valores corretamente")
//} else {
//if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)
//) {
//alert(ano + "ele e bissexto")
//} else {
//alert(ano + "nao e bissexto ")
//}
//}

//22


//let nascimentodorapaz = parseInt(prompt("digite o ano de nascimento do rapaz : "), 10)

//let actualidade = new Date().getFullYear()

//let idade = actualidade - nascimentodorapaz

//if (isNaN(nascimentodorapaz)) {
//alert("por favor, digite os valores !")
//} else {
//if (idade < 18) {
//let anosfaltam = 18 - idade
//alert("nao podes entrar porque es menor" + "faltam " +anosfaltam.toFixed(2))

//} else if (idade === 18) {
//alert("ja podes entrar no alistamento militar porque es maior de  18 anos" )
//}else{
//let anospassados = idade - 18
//alert("voce passou da idade de alistamento militar" + anospassados.toFixed(2))
//}
//}

//23


//- Homens ganham 5% de desconto
//- Mulheres ganham 13% de desconto

//let nome = prompt("digite o seu nome : ")
//let sexo = prompt("digite o tipo de sexo : ")
//let valorcompras = parseFloat(prompt("digite o valor das compras :  "))

//if (isNaN(valorcompras)) {
//alert("por favor , digite novamente os valores !")
//} else {
//let valorcomdesconto
//let desconto

//if (sexo === "M") {
//desconto = valorcompras * 0.05
//valorcomdesconto = valorcompras - desconto
//alert(`ola, ${nome}!  voce  recebeu 5% de desconto. o valor final com desconto e : ${valorcomdesconto.toFixed(2)} mt `)
//}
//else if (sexo === "F") {
//desconto = valorcompras * 0.13
//valorcomdesconto = valorcompras - desconto
//alert(`Olá, ${nome}! Feliz Dia da Mulher! Você recebeu 13% de desconto. O valor final com desconto é: ${valorcomdesconto.toFixed(2)} MT`)
//} else {
// alert("sexo nao identificado!")
//}

//}


//24



//let distancia = parseFloat(prompt("digite a distancia que passageiro deseja :  "))

//let precofinal

//if (distancia <= 200) {
//precofinal = distancia * 0.50
//} else {
//precofinal = distancia * 0.45
//}

//alert("O preço da passagem é R$" + precofinal.toFixed(2))

//25


//let valor = parseFloat(prompt("digite os primeiro segmentos de reta : "))
//let valor2 = parseFloat(prompt("digite os segundo segmentos de reta : "))
//let valor3 = parseFloat(prompt("digite os terceiro segmentos de reta : "))

//if (valor < valor2 + valor3 &&
//valor2 < valor + valor3 &&
//valor3 < valor + valor2
//) {
//alert("o valor considerado mostra que e possivel formar")
//} else {
//alert("nao e possivel formar")
//}

//26


//- O primeiro valor é o maior
//- O segundo valor é o maior
//- Não existe valor maior, os dois são iguais

//let num = parseInt(prompt("digite o primeiro numero: "), 10)
//let num2 = parseInt(prompt("digite o segundo numero: "), 10)

//if (num > num2) {
//alert("o primeiro valor e o maior que o segundo")
//} else if (num < num2) {
//alert("o segundo valor e maior que o maior")
//} else {
// alert("nao existe valor maior, os dois sao iguais")
//}

//27


//- Média até 4.9: REPROVADO
//- Média entre 5.0 e 6.9: RECUPERAÇÃO
//- Média 7.0 ou superior: APROVADO


//let nota = parseFloat(prompt("digite a primeira nota : "))
//let nota2 = parseFloat(prompt("digite a segunda nota : "))

//let media = (nota + nota2) / 2

//if (media <= 4.9) {
//alert("reprovado")
//} else if (media >= 5 && media <= 6.9) {
//alert("recuperacao")
//} else {
// alert("aprovado")
//}
//alert("media : " + media.toFixed(1))

//28
//Faça um programa que leia a largura e o comprimento de um terreno
//  retangular, calculando e mostrando a sua área em m². O programa também
//devemostrar a classificação desse terreno, de acordo com a lista abaixo:

//- Abaixo de 100m² = TERRENO POPULAR
//- Entre 100m² e 500m² = TERRENO MASTER
//- Acima de 500m² = TERRENO VIP


//let largura = parseFloat(prompt("digite a largura da area  :  "))
//let comprimento = parseFloat(prompt("digite o comprimento da area: "))

//let area = comprimento * largura

//if (area < 100) {
//alert("tereno popular s")
//} else if (area >= 100 && area <= 500) {
//alert("terreno master ")
//} else {
//alert("terreno vip")
//}
//alert("area : " + area.toFixed(2) + "m²")


//29
//Desenvolva um programa que leia o nome de um funcionário, seu salário,
//quantos anos ele trabalha na empresa e mostre seu novo salário, reajustado de
//acordo com a tabela a seguir:

//- Até 3 anos de empresa: aumento de 3%
//- entre 3 e 10 anos: aumento de 12.5%
//- 10 anos ou mais: aumento de 20%



//let funcionario = prompt("digite o nome do funcionario : ")
//let salario = parseFloat(prompt("digite o salario do funcionario : "))
//let anosempresa = parseInt(prompt("digite quanto tempo esta na empresa"), 10)

//if (anosempresa <= 3) {
//let aumento = anosempresa * 0.03
//let novosalario = aumento + anosempresa
//alert("os anos em que ele trabalha e de " + novosalario)
//} else if (anosempresa >= 3) {
//let aumento = anosempresa * 12.5
//let novosalario = aumento + anosempresa
//alert("os anos em que ele trabalha e de " + novosalario)
//}
//else {
//let aumento = anosempresa * 0.20
//let novosalario = aumento + anosempresa
//alert("os anos em que ele trabalha e de " + novosalario)
//}

//30
//30. [DESAFIO] Refaça o algoritmo 25, acrescentando o recurso de mostrar que tipo
//de triângulo será formado:

//- EQUILÁTERO: todos os lados iguais
//- ISÓSCELES: dois lados iguais
//- ESCALENO: todos os lados diferentes

//let valor = parseFloat(prompt("digite os primeiro segmentos de reta : "))
//let valor2 = parseFloat(prompt("digite os segundo segmentos de reta : "))
//let valor3 = parseFloat(prompt("digite os terceiro segmentos de reta : "))

//if (valor === valor2 && valor2 === valor3) {
//alert("todos os lados iguais")
//} else if (valor === valor2 || valor === valor3 || valor2 === valor3) {
//alert("dois lados iguais")
//} else {
//alert("todos os lados diferentes")
//}

//31. [DESAFIO] Crie um jogo de JoKenPo (Pedra-Papel-Tesoura)

//let jogador = prompt("escolha : pedra,tesoura, ou papel").toLowerCase()

//let numeroaleatorio = Math.floor(Math.random() * 3)
//let opcoes = ["pedra  ", "papel", "tesoura"]
//let computador = opcoes[numeroaleatorio]

//alert("o computador escolheu " + computador)
//if (jogador === computador) {
//alert("empate!")
//}
//else if (jogador === "tesoura" && computador === "papel" ||
//jogador === "pedra" && computador === "tesoura" ||
//jogador === "papel" && computador === "pedra"
//) {
//alert("jogador venceu")
//}
//else {
//alert("computador venceu")
//}

//32
//[DESAFIO] Crie um jogo onde o computador vai sortear um número entre 1 e 5 o
//jogador vai tentar descobrir qual foi o valor sorteado.


//let result = prompt("digite o valor que voce esta pensando de 0 a 5")
//const randomNumber = Math.round(Math.random() * 5)
//let tentativas = 1

//while (Number(result) != randomNumber) {

//result = prompt("erro , tente novamente")
//tentativas++

//}
//alert(`o valor que advinhaste esta correto era ${randomNumber} apos ${tentativas} de tentativas`)

//33. Escreva um programa para aprovar ou não o empréstimo bancário para a compra
//de uma casa. O programa vai perguntar o valor da casa, o salário do comprador e
//em quantos anos ele vai pagar. Calcule o valor da prestação mensal, sabendo que
//ela não pode exceder 30% do salário ou então o empréstimo será negado.

//let valorcasa = parseFloat(prompt("qual e o valor da casa: "))
//let salario = parseFloat(prompt("digite o salario do comprador : "))
//let anos = parseInt(prompt("digite os anos que esta disposto a pagar : "), 10)

//let meses = anos * 12
//let prestacaomensal = valorcasa / meses
//let limiteprestacao = salario * 30
//if (prestacaomensal <= limiteprestacao) {
//alert("emprestimo aprovado! prestacao  mensal : rs  " + prestacaomensal.toFixed(2))
//} else {
//alert("emprestimo negado! a prestacao mensal de rs " + prestacaomensal.toFixed(2) + "excede 30% do seu salario (rs " + limiteprestacao.toFixed(2) + ").")
//}

//34
//34. //O Índice de Massa Corpórea (IMC) é um valor calculado baseado na altura e no
//peso de uma pessoa. De acordo com o valor do IMC, podemos classificar o
//indivíduo dentro de certas faixas.

//- abaixo de 18.5: Abaixo do peso
//- entre 18.5 e 25: Peso ideal
//- entre 25 e 30: Sobrepeso
//- entre 30 e 40: Obesidade
//- acima de 40: Obseidade mórbida
//Obs: O IMC é calculado pela expressão peso/altura² (peso dividido pelo quadrado
//da altura)
//let peso = parseFloat(prompt("digite o seu peso : "))
//let altura = parseFloat(prompt("digite a sua altura: "))

//let IMC = peso / (altura * altura)

//if (IMC < 18.5) {
//alert("abaixo do peso")
//} else if (IMC >= 18.5 && IMC < 25) {
//alert("peso ideal")
//} else if (IMC >= 25 && IMC < 30) {
//alert("sobrepeso")
//} else if (IMC >= 30 && IMC < 40) {
//alert("obesidade")
//} else {
//alert("obesidade morbida")
//}

//37.Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O
//  aluguel de um carro custa R$90 por dia para carro popular e R$150 por dia para
//carro de luxo. Além disso, o cliente paga por Km percorrido. Faça um programa
//que leia o tipo de carro alugado (popular ou luxo), quantos dias de aluguel e
//quantos Km foram percorridos. No final mostre o preço a ser pago de acordo com a
//tabela a seguir:

//- Carros populares (aluguel de R$90 por dia)
//- Até 100Km percorridos: R$0,20 por Km
//- Acima de 100Km percorridos: R$0,10 por Km
//- Carros de luxo (aluguel de R$150 por dia)
//- Até 200Km percorridos: R$0,30 por Km
//- Acima de 200Km percorridos: R$0,25 por Km



//let tipodecarro = prompt("que tipo de carro gostaria de alugar? (popular ou luxo )").toLocaleLowerCase()
//let dias = parseInt(prompt("quantos dias de aluguel que tu tens : "), 10)
//let km = parseFloat(prompt("digite os tipos de km percoridos : "))

//let precodia = 0
//let precokm = 0

//if (tipodecarro === "popular") {
//precodia = 90
// if (km > 100) {
// precokm = km * 0.20
//} else {
//precokm = km * 0.10
//}
//} else if (tipodecarro === "luxo") {
//precodia = 150
//if (km > 200) {
//precokm = km * 0.30
//} else {
//precokm = km * 0.25
//}
//} else {
//alert("por favor, insere os dados  novamente")
//}

//let totaldias = dias * precodia
//let total = totaldias + precokm

//alert("o total a pagar em rs " + total.toFixed(2))

//36Um programa de vida saudável quer dar pontos atividades físicas que podem
//  ser trocados por dinheiro. O sistema funciona assim:

//- Cada hora de atividade física no mês vale pontos
//- até 10h de atividade no mês: ganha 2 pontos por hora
//- de 10h até 20h de atividade no mês: ganha 5 pontos por hora
//- acima de 20h de atividade no mês: ganha 10 pontos por hora
//- A cada ponto ganho, o cliente fatura R$0,05 (5 centavos)
// Faça um programa que leia quantas horas de atividade uma pessoa teve por mês,
// calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.

//let horas = parseFloat(prompt("digite quantas horas: "))

//let pontos = 0
//let dinheiro = 0

//if (horas <= 10) {
//pontos = horas * 2
//} else if (horas <= 20) {
//pontos = 10 * 2 + (horas - 10) * 5
//} else {
//pontos = 10 * 2 + 10 * 5 + (horas - 20) * 10
//}

//dinheiro = pontos * 0.05

//alert("o valor e  de" + pontos + "resultado de " + dinheiro.toFixed(2))


//37. Uma empresa precisa reajustar o salário dos seus funcionários, dando um
//  aumento de acordo com alguns fatores. Faça um programa que leia o salário atual,
//o gênero do funcionário e há quantos anos esse funcionário trabalha na empresa.
//No final, mostre o seu novo salário, baseado na tabela a seguir:

//- Mulheres
//- menos de 15 anos de empresa: +5%
//- de 15 até 20 anos de empresa: +12%
//- mais de 20 anos de empresa: +23%
//- Homens
//- menos de 20 anos de empresa: +3%
//- de 20 até 30 anos de empresa: +13%
//- mais de 30 anos de empresa: +25%

//let salarioatual = parseFloat(prompt("digite o seu salario atual: "))
//let sexo = prompt("digite o seu genero (M / F) ?").toLowerCase()
//let anos = parseInt(prompt("digite os anos que esta na empresa: "), 10)


//let aumento = 0

//if (sexo === "f") {
//if (anos < 15) {
//aumento = salarioatual * 0.05
//} else if (anos <= 20) {
//aumento = salarioatual * 0.12
//} else {
//aumento = salarioatual * 0.23
//}

//} else if (sexo === "m") {
//if (anos < 20) {
//aumento = salarioatual * 0.03

//} else if (anos <= 30) {
//aumento = salarioatual * 0.13
//} else {
//aumento = salarioatual * 0.25
//}

//} else {
//alert("genero invalido")
//}

//let novosalario = salarioatual + aumento

//alert("seu novo valor e rs" + novosalario.toFixed(2))



//PASSO 04 – REPETIÇÕES ENQUANTO

//38. 

//let contador = 6
//let resultado = ""

//while (contador <= 11) {
//resultado += contador + ""
//contador++
//}
//resultado += "acabou"
//alert(resultado)

//39.Faça um algoritmo que mostre na tela a seguinte contagem:
//10 9 8 7 6 5 4 3 Acabou!


//let contagem = 10
//let decresccente = ""

//while (contagem >= 3) {
//decresccente += contagem + ""
//contagem--
//}

//decresccente += "acabou!"
//alert(decresccente)


//40.Crie um aplicativo que mostre na tela a seguinte contagem:
//0 3 6 9 12 15 18 Acabou!

//let aplicativo = 0
//let contador = ""
//while (aplicativo <= 18) {
//contador += aplicativo + ""
//aplicativo += 3
//}
//contador += "acabou"
//alert(contador)

//41. Desenvolva um programa que mostre na tela a seguinte contagem:
//100 95 90 85 80 ... 0 Acabou!

//let program = 100
//let contador = ""
//while (program >= 0) {
//contador += program + ""
//program -= 5

//}
//contador += "acabou!"
//alert(contador)

//42.Faça um algoritmo que pergunte ao usuário um número inteiro e positivo
//qualquer e mostre uma contagem até esse valor:
//Ex: Digite um valor: 35
//Contagem: 1 2 3 4 5 6 7 ... 33 34 35 Acabou!

//let limite = parseInt(prompt("digite um numero inteiro positivo"), 10)

//let contador = 1
//let contagem = ""

//while (contador <= limite) {
//contagem += contador + ""
// contador++
//}
//contagem += "acabou!"
//alert("contagem : " + contagem)




//43.Desenvolva um algoritmo que mostre uma contagem regressiva de 30 até 1,
//marcando os números que forem divisíveis por 4, exatamente como mostrado abaixo:
//30 29 [28] 27 26 25 [24] 23 22 21 [20] 19 18 17 [16]...

//let contador = 30
//let resultado = ""

//while (contador >= 1) {
//if (contador % 4 === 0) {
// resultado += `[${contador}]`
// } else {
//resultado += contador + ""
//}
//contador--
//}

//alert(resultado)


//44. Crie um algoritmo que leia o valor inicial da contagem, o valor final e o
//incremento, mostrando em seguida todos os valores no intervalo:
// Ex: Digite o primeiro Valor: 3
//Digite o último Valor: 10
//Digite o incremento: 2
//Contagem: 3 5 7 9 Acabou!


//let inicio = parseInt(prompt("digite o primeiro valor: "), 10)
//let fim = parseInt(prompt("digite o ultimo valor: "), 10)
//let passo = parseInt(prompt("digite o incremento : "), 10)

//let contagem = ""

//while (inicio >= fim) {
//if (inicio % 2 === 0) {
//contagem += inicio + ""
//} else {
// inicio -= passo
//}

//}
//contagem += "Acabou"
//alert(contagem)

//45
//let inicio = parseInt(prompt("digite o primeiro valor: "), 10)
//let fim = parseInt(prompt("digite o ultimo valor: "), 10)
//let passo = parseInt(prompt("digite o incremento : "), 10)

//if (passo <= 0) {
//alert("passo invalido, considerando passo 1")
//passo = 1
//}
//let contagem = "contagem"

//if (inicio < fim) {
//for (let i = inicio; i <= fim; i += passo) {
//contagem += i + ""

//}

//}
//else {
//for (let i = inicio; i >= fim; i -= passo) {
//contagem += i + ""
//}
//}
//contagem += "acabou"
//alert(contagem)

//46.Crie um programa que calcule e mostre na tela o resultado da soma entre 6 +
//8 + 10 + 12 + 14 + ... + 98 + 100.

//let soma = 0

//for (let i = 6; i <= 100; i += 2) {
//soma += i
//}
//alert("o resultado e : " + soma) 
//47. Desenvolva um aplicativo que mostre na tela o resultado da expressão 500 +
// 450 + 400 + 350 + 300 + ... + 50 + 0

//let soma = 0
//for (let i = 500; i >= 0; i -= 50) {
//soma += i

//}
//alert("o resultado e : " + soma)

//48. Faça um programa que leia 7 números inteiros e no final mostre o somatório
//entre eles.

//let soma = 0

//for (let i = 0; i < 7; i++) {
//let num = parseInt(prompt("digite um numero inteiro: "), 10)
//soma += num
//}
//alert(soma)

//49. Crie um programa que leia 6 números inteiros e no final mostre quantos deles
// são pares e quantos são ímpares.
//let pares = 0
//let impares = 0

//for (let i = 0; i < 6; i++) {
//let num = parseInt(prompt("digite o numero inteiro : "), 10)
//if (num % 2 == 0) {
//pares++
//} else {
//impares++
//}

//}
//alert("total de numeros de pares" + pares)
//alert("total de numeros de impares: " + impares)

//50. Desenvolva um programa que faça o sorteio de 20 números entre 0 e 10 e
//  mostre na tela:
//a) Quais foram os números sorteados
//b) Quantos números estão acima de 5
//c) Quantos números são divisíveis por 3

//let numerosorteados = []
//let contagemAcimade5 = 0
//let contagemvisiveispor3 = 0

//for (let i = 0; i < 20; i++) {
//let num = Math.floor(Math.random() * 11)
//numerosorteados.push(num)

//if (num < 5) {
//contagemAcimade5++
//}
//if (num < 3) {
// contagemvisiveispor3++

//}
// }
//alert("numeros sorteados" + numerosorteados.join(","))
//alert("quantos numeros estao acima de 5" + contagemAcimade5)
//alert("quantos numeros estao acima do 3" + contagemvisiveispor3)

//51. Faça um aplicativo que leia o preço de 8 produtos. No final, mostre na tela
//  qual foi o maior e qual foi o menor preço digitados.

//let contador = 0
//let maior = null
//let menor = null

//while (contador < 8) {
//let nome = prompt("digite o nome: ")
//let precoprodutos = parseFloat(prompt("digite o preco do produto: "))
//if (isNaN(precoprodutos)) {
//alert("valor invalido, digite novamente!")
//continue
//}

//if (maior === null || precoprodutos > maior) {
//maior = precoprodutos

//}
//if (menor === null || precoprodutos < menor) {
//menor = precoprodutos

//}
//contador++
//}
//alert("o maior preco digitado foi: " + maior)
//alert("o menor preco digitado foi: " + menor)

//52. 

//let contador = 0
//let maisde18 = 0
//let menosde5 = 0
//let totalidade = 0
//let maior = null

//while (contador < 10) {
//let pessoas = parseInt(prompt("digite a idade da pessoa"), 10)

//if (isNaN(pessoas)) {
//alert("valor invalido ,digite novamente")
//continue

//}
//contador++
//totalidade += pessoas
//if (pessoas > 18) {
//maisde18++
//}
//if (pessoas < 5) {
//menosde5++
//}
//if (maior === null || pessoas > maior) {
// maior = pessoas
//}


//}
//let media = totalidade / 10

//alert("a idade media do grupo e de" + media)
//alert("as que tem mais de 18 e" + maisde18)
//alert("o menor de 5 e de" + menosde5)
//alert("o maior lido e de " + maior)

//53. Faça um programa que leia a idade e o sexo de 5 pessoas, mostrando no final:
//a) Quantos homens foram cadastrados
//b) Quantas mulheres foram cadastradas
//c) A média de idade do grupo
//d) A média de idade dos homens
//e) Quantas mulheres tem mais de 20 anos

//let contador = 0
//let totalidade = 0

//let qtdHomens = 0
//let somadHomens = 0

//let qtdMulheres = 0
//let mulheresmais20 = 0


//while (contador < 5) {
//let idade = parseInt(prompt("digite a sua idade"), 10)
//let sexo = prompt("digite se M OU S o sexo da pessoa").toUpperCase()


//if (isNaN(idade) || (sexo != "M" && sexo != "F")) {
//alert("o numero ou genero invalido , faca novamente!")
//continue
//}
//totalidade += idade

//if (sexo === "M") {
//qtdHomens++
//somadHomens += idade
//} else if (sexo === "F") {
//qtdMulheres++
//if (idade > 20) {
//mulheresmais20++
//}

//}
//contador++
//}

//let mediagrupo = totalidade / 5
//let mediahomens = qtdHomens > 0 ? (somadHomens / qtdHomens) : 0

//alert("homens cadastrados " + qtdHomens)
//alert("mulheres cadastrados " + qtdMulheres)
//alert("media do grupo " + mediagrupo.toFixed(1))
//alert("media de idade dos homens" + mediahomens.toFixed(1))
//alert("mulheres com mais de 20anos" + mulheresmais20)


//54. Desenvolva um aplicativo que leia o peso e a altura de 7 pessoas, mostrando
// no final:
//a)  Qual foi a média de altura do grupo
//b) Quantas pessoas pesam mais de 90Kg
//c) Quantas pessoas que pesam menos de 50Kg tem menos de 1.60m
//d) Quantas pessoas que medem mais de 1.90m pesam mais de 100Kg.

//let contador = 0;

//while (contador < N) {
// 1. Entrada
// 2. Validação
// 3. Processamento (condições, contadores, somas)
// 4. Incrementar contador
//}

//let contador = 0
//let totalidade = 0

//let peso90 = 0
//let menos50e160 = 0

//let mais190e100 = 0

//while (contador < 7) {
//let peso = parseFloat(prompt("qual e o seu peso : "))
//let altura = parseFloat(prompt("qual e a sua altura: "))


//if (isNaN(peso) || isNaN(altura)) {
//alert("Dados inválidos! Tente novamente.")
//continue
//}

//contador++
//totalidade += altura
//if (peso > 90) {
//peso90++
//}

//if (peso < 50 && altura < 1.60) {
//menos50e160++
//}


//if (altura > 1.90 && peso > 100) {
//mais190e100++
//}


//}
//let mediaaltura = totalidade / 7

//alert("a  media de altura e " + mediaaltura)
//alert("pessoas que pesam mais de 90kg " + peso90)
//alert("pessoas que pesam menos de 50kg e tem uma altura inferior ou a 1.60" + menos50e160)
//alert("pessoas que tem altura acima de ou de 1.90 e pesam acima de 100kg " + mais190e100)

//55. [DESAFIO] Vamos melhorar o jogo que fizemos no exercício 32. A partir de
// agora, o computador vai sortear um número entre 1 e 10 e o jogador vai ter 4
//tentativas para tentar acertar. 

//let result = prompt("digite o valor que esta pensando de 1 a 10 ")
//const randomNumber = Math.round(Math.random() * 10) + 1
//let tentativas = 0
//let acertou = false

//while (tentativas < 4) {
//let chute = parseInt(prompt("tentativas" + tentativas + 1))

//if (isNaN(chute)) {
//alert("erro , tente novamente   ")
//continue
//}
//tentativas++

//if (chute === randomNumber) {
// acertou = true
// break
// } else {
// alert("errado ! tente novamente ")
//}
//}

//if (acertou) {
//alert(`o valor que advinhaste esta correto era ${randomNumber} apos ${tentativas} de tentativas`)
//} else {
//alert("suas tentativas acabaram ! o numero era " + randomNumber)
//}


//PASSO 05 – ENQUANTO COM FLAG
// passo como exemplo do while com flag
//let continuar = true; // Flag

//while (continuar) {
//let resposta = prompt("Quer continuar? (s/n)");

//if (resposta.toLowerCase() === "n") {
//continuar = false; // Atualiza a flag para sair do loop
//} else {
//console.log("Você escolheu continuar!");
//}
//}

//console.log("Loop encerrado.");

//56. Crie um programa que leia vários números pelo teclado e mostre no final o
//  somatório entre eles.
//Obs: O programa será interrompido quando o número 1111 for digitado

//let flag = true
//let soma = 0
//while (flag) {

//let num = parseInt(prompt("digite o seu numero : "), 10)
//if (!isNaN(num)) {
//if (num === 1111) {
// flag = false
//} else {
//soma += num
//}
//} else {
//alert("por favor digite novamente!")
//}

//}
//alert("a soma e de " + soma)

//57. Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários.
//  No final, mostre o total de salários pagos aos homens e o total pago às
//mulheres. O programa vai perguntar ao usuário se ele quer continuar ou não
//sempre que ler os dados de um funcionário.

//let funcionario = true
//let totalhomens = 0
//let totalmulheres = 0

//while (funcionario) {
//let salario = parseFloat(prompt("Digite o seu salário: "))
//let sexo = prompt("Qual é o seu sexo? (M/F)").toUpperCase()

//if (!isNaN(salario) && (sexo === "M" || sexo === "F")) {
//if (sexo === "M") {
// totalhomens += salario
//} else if (sexo === "F") {
//totalmulheres += salario
//}

//let continuar = prompt("Deseja continuar? (S/N)").toUpperCase()
//if (continuar !== "S") {
//funcionario = false
//}

//} else {
//alert("Por favor, insira dados válidos (salário numérico e sexo M ou F).")
//}
//}

//alert("O total de salários pagos aos homens é: " + totalhomens.toFixed(2))
//alert("O total de salários pagos às mulheres é: " + totalmulheres.toFixed(2))

//58. Faça um algoritmo que leia a idade de vários alunos de uma turma. O programa
//  vai parar quando for digitada a idade 999. No final, mostre quantos alunos
//  existem na turma e qual é a média de idade do grupo.

//let idade = true
//let soma = 0
//let totalalunos = 0

//while (true) {
//idade = parseInt(prompt("digite a sua idade  do aluno (999 para parar o programa) "), 10)

//if (idade === 999) {
//break
//}
//if (!isNaN(idade)) {
//soma += idade
//totalalunos++
//} else {
//alert("digite novamente os dados")
//}
//}

//if (totalalunos > 0) {
//let media = soma / totalalunos
//alert("Total de alunos :" + totalalunos)
//alert("media de idade da turma " + media.toFixed(2))

//} else {
//alert("nenhum aluno foi registrado ")
//}


//59. Crie um programa que leia o sexo e a idade de várias pessoas. O programa vai
//  perguntar se o usuário quer continuar ou não a cada pessoa. No final, mostre:
// a) qual é a maior idade lida
// b) quantos homens foram cadastrados
// c) qual é a idade da mulher mais jovem
// d) qual é a média de idade entre os homens

//let continuar = true
//let maioridade = 0
//let homens = 0
//let mulherjovem = null
//let mediadhomens = 0

//while (continuar) {
//let sexo = prompt("digite o seu sexo : M/F").toUpperCase()
//let idade = parseInt(prompt("digite a sua idade : "), 10)

//if ((sexo === "M" || sexo === "F") && !isNaN(idade)) {
//if (idade > maioridade) {
//maioridade = idade
//}
//if (sexo === "M") {
//homens++
//mediadhomens += idade
//} else if (sexo === "F") {
//if (mulherjovem === null || idade < mulherjovem) {
//mulherjovem = idade
//}
//}

//} else {
//alert("por favor tente novamente!")
//continue
//}

//let resposta = prompt("quer continuar : (S/N)").toUpperCase()
//if (resposta !== "S") {
//continuar = false
//}

//}
//alert("a maior idade e " + maioridade)
//alert("os homens que foram cadastrados foi " + homens)
//alert(" a idade da mulher mais jovem " + (mulherjovem !== null ? mulherjovem : "nenhuma mulher cadastrada"))
//alert("media dos homens :" + (homens > 0 ? (mediadhomens / homens).toFixed(2) : "nenhum homem cadastrado"))




//60. Desenvolva um algoritmo que leia o nome, a idade e o sexo de várias pessoas.
//  O programa vai perguntar se o usuário quer ou não continuar. No final, mostre:
// a) O nome da pessoa mais velha
// b) O nome da mulher mais jovem
// c) A média de idade do grupo
// d) Quantos homens tem mais de 30 anos
// e) Quantas mulheres tem menos de 18 anos


//let continuar = true

//let nomeMaisVelho = ""
//let idadeMaisVelho = 0

//let nomeMulherMaisJovem = ""
//let idadeMulherMaisJovem = null

//let somaIdades = 0
//let totalPessoas = 0

//let homensMais30 = 0
//let mulheresMenos18 = 0

//while (continuar) {
//let nome = prompt("Digite o nome:")
//let idade = parseInt(prompt("Digite a idade:"), 10)
//let sexo = prompt("Digite o sexo (M/F):").toUpperCase()

//if (nome && !isNaN(idade) && (sexo === "M" || sexo === "F")) {
// Atualiza a média
// somaIdades += idade
// totalPessoas++

// Pessoa mais velha
// if (idade > idadeMaisVelho) {
// idadeMaisVelho = idade
//nomeMaisVelho = nome
//}

// Mulher mais jovem
//if (sexo === "F") {
// if (idadeMulherMaisJovem === null || idade < idadeMulherMaisJovem) {
//  idadeMulherMaisJovem = idade
// nomeMulherMaisJovem = nome
//}

//if (idade < 18) {
//mulheresMenos18++
// }
//}

// Homens com mais de 30
//if (sexo === "M" && idade > 30) {
//homensMais30++
//}

// Pergunta se quer continuar
//let resposta = prompt("Quer continuar? (S/N)").toUpperCase()
//if (resposta !== "S") {
//continuar = false
// }

// } else {
// alert("Dados inválidos. Tente novamente.")
//}
//}

// Resultados finais
//alert("Pessoa mais velha: " + nomeMaisVelho)
//alert("Mulher mais jovem: " + (idadeMulherMaisJovem !== null ? nomeMulherMaisJovem : "Nenhuma mulher cadastrada"))
//alert("Média de idade do grupo: " + (somaIdades / totalPessoas).toFixed(2))
//alert("Homens com mais de 30 anos: " + homensMais30)
//alert("Mulheres com menos de 18 anos: " + mulheresMenos18)




// PASSO 06 – REPETIÇÃO COM FAÇA ENQUANTO


//exemplo:
//let continuar = true;

//do {
//let numero = parseInt(prompt("Digite um número: "), 10);
//alert("Você digitou: " + numero);

//let resposta = prompt("Quer continuar? (S/N)").toUpperCase();
//if (resposta !== "S") {
//continuar = false;
//}

//} while (continuar);

//alert("Fim do programa!");

//61. Crie um programa que mostre na tela a seguinte contagem, usando a estrutura
//  “faça enquanto”
// 0 3 6 9 12 15 18 21 24 27 30 Acabou!

//let contador = 0

//do {
//alert(contador)
//contador += 3
//} while (contador <= 30)
//alert("acabou")

//62. Faça um programa usando a estrutura “faça enquanto” que leia a idade de
//  várias pessoas. A cada laço, você deverá perguntar para o usuário se ele quer ou
// não continuar a digitar dados. No final, quando o usuário decidir parar, mostre
//na tela:
//a) Quantas idades foram digitadas
//b) Qual é a média entre as idades digitadas
//c) Quantas pessoas tem 21 anos ou mais.

///varias idade da pessoa

//let somaIdades = 0
//let continuar = "S"
//let totalidade = 0
//let pessoa21oumais = 0

//do {
//let idade = parseInt(prompt("digite a sua idade : "), 10)
//totalidade++
//somaIdades += idade

//if (idade >= 21) {
//pessoa21oumais++
//}
//continuar = prompt("deseja continuar: (S/N)").toUpperCase()
//} while (continuar === "S")

//let media = somaIdades / totalidade
//alert("pessoas registrada " + totalidade)
//alert("media entre as idades" + media.toFixed(2))
//alert("as pessoas com mais 21 anos" + pessoa21oumais)

//63. Crie um programa usando a estrutura “faça enquanto” que leia vários números.
//A cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na
//  tela:
// a) O somatório entre todos os valores
//b) Qual foi o menor valor digitado
//c) A média entre todos os valores
//d) Quantos valores são pares

//LER NUMEROS 
//se quer continuar ou nao 
//var:somarvalor,totalvalor,menorvalor,media,valorpar

//let continuar = "S"
//let somarvalor = 0
//let totalvalor = 0
//let menorvalor = null
//let valorpar = 0

//do {
//let num = parseInt(prompt("digite o seu numero : "), 10)
//totalvalor++
//somarvalor += num

//if (menorvalor === null || num < menorvalor) {
//menorvalor = num
//}
//if (num % 2 === 0) {
//valorpar++
//}

//continuar = prompt("diseja continuar : (S/N)").toUpperCase()
//} while (continuar === "S")

//let media = somarvalor / totalvalor

//alert("o somatorio dele e de " + somarvalor)
//alert("o valor menor deles " + menorvalor)
//alert("media deles e de " + media.toFixed(2))
//alert("os valores pares sao " + valorpar)

//PASSO 07 – REPETIÇÃO COM PARA
//64. Desenvolva um programa usando a estrutura “para” que mostre na tela a
//  seguinte contagem:
//0 5 10 15 20 25 30 35 40 Acabou!

//for (let i = 0; i <= 40; i += 5) {
//alert(i)
//}
//alert("acabou")

//65. Desenvolva um programa usando a estrutura “para” que mostre na tela a
//  seguinte contagem:
// 100 90 80 70 60 50 40 30 20 10 0 Acabou!

//for (let i = 100; i >= 0; i -= 10) {
//alert(i)
//}
//alert("acabou!")
//66. Escreva um programa que leia um número qualquer e mostre a tabuada desse
//  número, usando a estrutura “para”.
// Ex: Digite um valor: 5
//5 x 1 = 5
//5 x 2 = 10
//5 x 3 = 15 ...

///let num = parseInt(prompt("digite um numero: "), 10)

//for (let i = 0; i <= 10; i++) {
//let resultado = num * i
//alert(`${num} * ${i} = ${resultado}`)
//}

//67. Faça um programa usando a estrutura “para” que leia um número inteiro
//  positivo e mostre na tela uma contagem de 0 até o valor digitado:
// Ex: Digite um valor: 9
//Contagem: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, FIM!

//let num = parseInt(prompt("digite um numero: "), 10)
//for (let i = 0; i <= num; i++) {
//  alert(i)
//}
//alert("Fim")

//68. Crie um programa que leia sexo e peso de 8 pessoas, usando a estrutura
//  “para”. No final, mostre na tela:
// a) Quantas mulheres foram cadastradas
// b) Quantos homens pesam mais de 100Kg
//c) A média de peso entre as mulheres
//d) O maior peso entre os homens



//let mulherescadas = 0
//let homenspesamais = 0
//let somamulheres = 0
//let maiorpesohomens = 0

//for (let i = 0; i < 8; i++) {
//let sexo = prompt("Digite o seu sexo: (M/F)").toUpperCase()
//let peso = parseFloat(prompt("Digite o seu peso: "))

//if ((sexo === "M" || sexo === "F") && !isNaN(peso)) {
//if (sexo === "F") {
//mulherescadas++
//somamulheres += peso
//}
//if (sexo === "M") {
//if (peso > 100) {
//homenspesamais++
//}
//if (peso > maiorpesohomens) {
//maiorpesohomens = peso
//}
//}
//}
//}

//let mediaMulheres = mulherescadas > 0 ? somamulheres / mulherescadas : 0

//alert(
//"Mulheres cadastradas: " + mulherescadas + "\n" +
//"Homens com mais de 100kg: " + homenspesamais + "\n" +
//"Média de peso das mulheres: " + mediaMulheres.toFixed(2) + " kg\n" +
//"Maior peso entre os homens: " + maiorpesohomens + " kg"
//)


//69. [DESAFIO] Desenvolva um programa que leia o primeiro termo e a razão de uma
//  PA (Progressão Aritmética), mostrando na tela os 10 primeiros elementos da PA e
// a soma entre todos os valores da sequência.

//let contador = 0
//let soma = 0

//let primeirotermo = parseInt(prompt("digite a seu primeiro termo : "), 10)
//let razao = parseInt(prompt("digite a sua razao : "), 10)

//let termo = primeirotermo

//for (let i = 0; i < 10; i++) {
//alert(termo)
//soma += termo
//termo += razao
//contador++
//}
//alert("A soma e de" + soma)


//70. [DESAFIO] Faça um programa que mostre os 10 primeiros elementos da Sequência
//  de Fibonacci:
// 1 1 2 3 5 8 13 21...

//let anterior = 0
//let atual = 1
//let proximo = anterior + atual
//let soma = 0
//for (let i = 0; i < 10; i++) {
//alert(proximo)
//soma += proximo

//anterior = atual
//atual = proximo
//proximo = anterior + atual

//}
//alert(soma)


//PASSO 08 – VETORES
//71. Faça um programa que preencha automaticamente um vetor numérico com 8
//  posições, conforme abaixo:
//999 999 999 999 999 999 999 999
//0 1 2 3 4 5 6 7

//let vetor = [999, 999, 999, 999, 999, 999, 999, 999]
//let vetor3 = [0, 1, 2, 3, 4, 5, 6, 7]

//for (let i = 0; i < vetor.length; i++) {
//alert(vetor[i])
//}
///for (let i = 0; i < vetor3.length; i++) {
// alert(vetor3[i])
//}
//alert(vetor.join(","))
//alert(vetor3.join(","))

//72. Crie um programa que preencha automaticamente (usando lógica, não apenas
//  atribuindo diretamente) um vetor numérico com 10 posições, conforme abaixo:
// 5 10 15 20 25 30 35 40 45 50
// 0 1 2 3 4 5 6 7 8 9

//let vetor = []
//let vetor2 = []

//for (let i = 0; i < 10; i++) {
//vetor.push(5 * (i + 1))
//}
//for (let i = 0; i < 9; i++) {
//vetor2.push(i)
//}

//for (let i = 0; i < vetor.length; i++) {
//alert(vetor[i])
//}

//for (let i = 0; i < vetor2.length; i++) {
// alert(vetor2[i])
//}

//alert(vetor.join(","))
//alert(vetor2.join(","))

//73. Crie um programa que preencha automaticamente (usando lógica, não apenas
//  atribuindo diretamente) um vetor numérico com 10 posições, conforme abaixo:
//9 8 7 6 5 4 3 2 1 0
//0 1 2 3 4 5 6 7 8 9

//let vetor = []
//let vetor2 = []

//for (let i = 9; i >= 0; i--) {
//vetor.push(i)
//}
//for (let i = 0; i < 10; i++) {
//vetor2.push(i)
//}

//for (let i = 0; i < vetor.length; i++) {
//alert(vetor[i])
//}
//for (let i = 0; i < vetor2.length; i++) {
//alert(vetor2[i])
//}

//alert(vetor.join(","))
//alert(vetor2.join(","))

//74. Crie um programa que preencha automaticamente (usando lógica, não apenas
//  atribuindo diretamente) um vetor numérico com 10 posições, conforme abaixo:
// 5 3 5 3 5 3 5 3 5 3
//0 1 2 3 4 5 6 7 8 9


//let vetor = []
//let vetor2 = []


//for (let i = 0; i < 6; i++) {
//if (i % 2 === 0) {
//vetor.push(5)
//} else {
// vetor.push(3)
//}

//}

//for (let i = 0; i < 10; i++) {
//vetor2.push(i)
//}

//for (let i = 0; i < vetor.length; i++) {
//alert(vetor[i])
//}

//for (let i = 0; i < vetor2.length; i++) {
//alert(vetor2[i])
//}

//alert(vetor.join(","))
//alert(vetor2.join(","))

//75. Crie um programa que preencha automaticamente (usando lógica, não apenas
//  atribuindo diretamente) um vetor numérico com 15 posições com os primeiros
// elementos da sequência de Fibonacci:
//1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987
//0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15

//let anterior = 0
//let final = 1
//let proximo = anterior + final
//let vetor = []
//let soma = 0

//for (let i = 0; i < 15; i++) {
//vetor.push(proximo)
//soma += proximo

//anterior = final
//final = proximo
//proximo = anterior + final


//}

//for (let i = 0; i < vetor.length; i++) {
//alert(vetor[i])
//}
//alert("a soma do metodo fibonacci e  " + soma)


//let vetor2 = []
//for (let i = 0; i < 15; i++) {
//vetor2.push(i)
//}

//for (let i = 0; i < vetor2.length; i++) {
//alert(vetor2[i])
//}



//76. Crie um programa que preencha automaticamente um vetor numérico com 7
// números gerados aleatoriamente pelo computador e depois mostre os valores
// gerados na tela.


//let vetor = []

//for (let i = 0; i < 7; i++) {
//let num = Math.floor(Math.random() * 100)
//vetor.push(num)
//}

//for (let i = 0; i < vetor.length; i++) {
//alert(vetor[i])
//}



//77. Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No
//  final, mostre uma listagem com todos os nomes informados, na ordem inversa
// daquela em que eles foram informados.

//let nome = []

//for (let i = 0; i < 7; i++) {
//let nomes = prompt("digite os seus nomes: " + (i + 1))
//nome.push(nomes)
//}

//for (let i = nome.length - 1; i >= 0; i--) {
//alert(nome[i])
//}

//78. Escreva um programa que leia 15 números e guarde-os em um vetor. No final,
//  mostre o vetor inteiro na tela e em seguida mostre em que posições foram
// digitados valores que são múltiplos de 10.

//let vetor = []

//for(let i = 0 ; i < 15 ; i++){
// let num =parseInt(prompt("digite os 15 numeros declarados : " + (i + 1)),10)
//vetor.push(num)
//}
//alert("o vetor inteiro" + vetor.join(","))

//let posicoes =[]
//for (let i = 0 ; i < vetor.length ;i++){
//if(vetor[i] % 10 === 0){
//posicoes.push(i)
//}
//}

//if(posicoes.length > 0){
//alert("posicoes com multiplos de 10 " + posicoes.join(",") )
//}else{
//alert("nao ha  multiplos de 10 no vetor ")
//}

//79. Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor.
//  No final, mostre quais são os números pares que foram digitados e em que
// posições eles estão armazenados.
//let vetor = []

//for (let i = 0; i < 10; i++) {
//let num = parseInt(prompt("digite os 10  numeros : "), 10)
//vetor.push(num)
//}
//alert("o vetor inteiro" + vetor.join(","))

//let pares = []
//let posicoes = []
//for (let i = 0; i < vetor.length; i++) {
//if (vetor[i] % 2 === 0) {
//pares.push(vetor[i])
//posicoes.push(i)
//}

//}

//if (pares.length > 0) {
//alert("os numero pares sao " + pares.join(",") + "/nposicoes:" + posicoes.join(","))
//} else {
//alert("nenhum numero e par foi digitado!")
//}

//80. Faça um algoritmo que preencha um vetor de 30 posições com números entre 1 e
// 15 sorteados pelo computador. Depois disso, peça para o usuário digitar um
//número (chave) e seu programa deve mostrar em que posições essa chave foi
// encontrada. Mostre também quantas vezes a chave foi sorteada.

//let vetor = []

//for (let i = 0; i < 30; i++) {
//let num = Math.floor(Math.random() * 15) + 1
//vetor.push(num)
//}
//alert("o valor e " + vetor.join(","))


//let chave = parseInt(prompt("digite  o numero chave que deseja procurar no vetor: "), 10)

//let contador = 0
//let posicoes = []

//for (let i = 0; i < vetor.length; i++) {
//if (vetor[i] === chave) {
//posicoes.push(i)
//contador++
//}

//}

//if (contador > 0) {
//alert(`o numero ${chave} foi encontrado ${contador} vez nas posicoes ${posicoes.join(",")}`)
//} else {
// alert(`o numero ${chave} nao foi encontrado no vetor. `)
//}

//81. Crie um programa que leia a idade de 8 pessoas e guarde - as em um vetor.No
//final, mostre:
// a) Qual é a média de idade das pessoas cadastradas
// b) Em quais posições temos pessoas com mais de 25 anos
// c) Qual foi a maior idade digitada(podem haver repetições)
//  d) Em que posições digitamos a maior idade

// ler 8 pessoas
//guardar no vetor
//medai de idade
//mais de 25 anos
//maior idade digitada
//em que posicao digitamos a mair idade

//let vetor = []
//let soma = 0
//let maioridade = 0
//let posicoes25anos = []
//let posicaomaioridade = []



//for (let i = 0; i < 8; i++) {
//let idade = parseInt(prompt("digite as 8 idades das pessoas : "), 10)
//vetor.push(idade)
//soma += idade


//if (idade > 25) {
//posicoes25anos.push(i)
//}



//if (idade > maioridade) {
//maioridade = idade
//}

//}
//let media = soma / 8

//for (let i = 0; i < vetor.length; i++) {

//if (vetor[i] === maioridade) {
// posicaomaioridade.push(i)
//}
//}

//alert(" a media e de " + media)
//alert("em qual posicao temos maior 25anos " + posicoes25anos.join(","))
//alert("a maior  idade da posicao  " + maioridade)
//alert("a maior idade em que posicao esta " + posicaomaioridade.join(","))


///82. Faça um algoritmo que leia a nota de 10 alunos de uma turma e guarde - as em
// um vetor.No final, mostre:
//a) Qual é a média da turma
//b) Quantos alunos estão acima da média da turma
//   c) Qual foi a maior nota digitada
//  d) Em que posições a maior nota aparece

//let vetor = []
//let somarnota = 0
//let maiornota = 0
//let posicoesmaior = []
//let alunosacimanota = 0


//for (let i = 0; i < 10; i++) {
//let nota = parseInt(prompt("digite a sua nota: "), 10)
//vetor.push(nota)
//somarnota += nota

//if (nota > maiornota) {
//maiornota = nota
//}
//}
//let media = somarnota / 10

//for (let i = 0; i < vetor.length; i++) {


//if (vetor[i] > media) {
//alunosacimanota++

//}
//if (vetor[i] === media) {
// posicoesnota.push(i)
//}

//}

//alert("a media turma  e : " + media)
//alert("o numero de alunos com nota acima da media" + alunosacimanota)
//alert("a maior nota e : " + maiornota)
//alert("a maior nota aparece nas posicoes " + posicoesmaior.join(","))

//83.[DESAFIO] Crie uma lógica que preencha um vetor de 20 posições com números
//aleatórios(entre 0 e 99) gerados pelo computador.Logo em seguida, mostre os
//  números gerados e depois coloque o vetor em ordem crescente, mostrando no final
//  os valores ordenados.

//let vetor = []

//for (let i = 0; i < 20; i++) {
//let num = Math.floor(Math.random() * 100)
//vetor.push(num)
//}
//alert("os valor gerados : " + vetor.join(","))

//vetor.sort(function (a, b) {
//return a - b
//})

//alert("numeros ordenados" + vetor.join(","))

//84. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses
// valores em dois vetores, em posições relacionadas.No final, mostre uma listagem
//  contendo apenas os dados das pessoas menores de idade.
//vetor = []
//vetor2 = []

//for (let i = 0; i < 9; i++) {
//let nome = prompt("digite o nome das pessoas : ")
//let idade = parseInt(prompt("digite a sua idade:  "), 10)
//vetor.push(nome)
//vetor2.push(idade)

//if (idade < 18) {
//alert(nome + " e menor de idade")

//}
//}

//85. Faça um algoritmo que leia o nome, o sexo e o salário de 5 funcionários e
//  guarde esses dados em três vetores.No final, mostre uma listagem contendo
//  apenas os dados das funcionárias mulheres que ganham mais de R$5 mil.

//let vetor = []
//let vetor2 = []
//let vetor3 = []
//let funcionario = 0

//for (let i = 0; i < 5; i++) {
//let nome = prompt("digite o seu nome: ")
//let sexo = prompt("digite o seu sexo : M/F").toUpperCase()
//let salario = parseFloat(prompt("digite o seu salario : "))


//vetor.push(nome)
//vetor2.push(sexo)
//vetor3.push(salario)

//if (sexo === "F" && salario > 5000) {
//funcionario++
//alert("o funcionario que e mulher com o nome " + nome + "recebe o salario de : " + salario)
//}
//}
//alert("Total de funcionárias que ganham mais de 5000: " + funcionario)


//PASSO 09 – PROCEDIMENTOS
//86. Crie um programa que tenha um procedimento Gerador() que, quando chamado,
//mostre a mensagem "Olá, Mundo!" com algum componente visual(linhas)
//Ex: Ao chamar Gerador() aparece:
//+-------======= ------+
//  Olá, Mundo!
// + -------======= ------+

//function Gerador() {
// alert(
// "+-------======= ------+\n" +
// "Olá, Mundo!\n" +
// "+-------======= ------+"
//)
//}
//Gerador()

//87. Crie um programa que melhore o procedimento Gerador() da questão anterior
//para que mostre uma mensagem personalizada, passada como parâmetro.
//Ex: Ao chamar Gerador("Aprendendo Portugol") aparece:
//+-------======= ------+
//  Aprendendo Portugol
//    //+ -------======= ------+

//function Gerador(mensagem) {
//alert(
//"+-------======= ------+\n" +
//mensagem + "\n" +
//"+-------======= ------+"
//)
//}

//Gerador("aprendendo portugol")

//  88. Crie um programa que melhore o procedimento Gerador() da questão anterior
//  para que mostre uma mensagem vário
//Ex: Ao chamar Gerador("Aprendendo Portugol", 4) aparece:
//+-------======= ------+
//  Aprendendo Portugol
//    Aprendendo Portugol
//    Aprendendo Portugol
//Aprendendo Portugol
//+ -------======= ------+

//function Gerador(mensagem, vezes) {
//let result = "+-------======= ------+\n"

//for (let i = 0; i < vezes; i++) {
//result += mensagem + "\n"
//}

//result += "+-------======= ------+\n" +
//alert(result)

//}
//Gerador("Aprendendo portugol", 4)



//   // 89. Crie um programa que melhore o procedimento Gerador() da questão anterior
//  para que o programador possa escolher uma entre três bordas:
//+-------======= ------+ Borda 1

// ```:::::::~~~~~~~ Borda 2
//<<<<<<<<------->>>>>>> Borda 3
//Ex: Uma chamada válida seria Gerador("Portugol Studio", 3, 2)
//~~~~~~~~:::::::~~~~~~~
//Portugol Studio
//Portugol Studio
//Portugol Studio
//~~~~~~~~:::::::~~~~~~~

//function Gerador(texto, repeticoes, tipoborda) {
//let borda

//switch (tipoborda) {
//case 1:
//borda = "+-------======= ------+"
//break
//case 2:
//borda = "```:::::::~~~~~~~"
//break
//case 3: "<<<<<<<<------->>>>>>>"
//break
//default:
//alert("tipo de borda invalida.")
//return
// }
//alert(borda)

//for (let i = 0; i < repeticoes; i++) {
//alert(texto)

//}
//alert(borda)
//}

//Gerador("portugol studio ", 2, 3)



//90) Desenvolva um algoritmo que leia dois valores pelo teclado e passe esses
//valores para um procedimento Somador() que vai calcular e mostrar a soma entre
//eles.
//function Somador(a, b) {
//const soma = a + b
//alert("a soma e de : " + soma)
//}

//let valor1 = parseInt(prompt("digite o primeiro valor : "), 10)
//let valor2 = parseInt(prompt("digite o segundo valor :"), 10)

//Somador(valor1, valor2)





//91) Desenvolva um algoritmo que leia dois valores pelo teclado e passe esses
//valores para um procedimento Maior() que vai verificar qual deles é o maior e
//mostrá-lo na tela. Caso os dois valores sejam iguais, mostrar uma mensagem
//informando essa característica.

//function Maior(a, b) {
// if (a > b) {
// alert("o maior valor e: " + a)
//} else if (b > a) {
//alert("o maior valor e:  " + b)
//} else {
//alert("sao iguais")
//}
//}

//let valor = parseInt(prompt("digite o primeiro valor: "), 10)
//let valor2 = parseInt(prompt("digite o segundo valor:"), 10)

//Maior(valor, valor2)


//92) Crie uma lógica que leia um número inteiro e passe para um procedimento
//ParOuImpar() que vai verificar e mostrar na tela se o valor passado como
//parâmetro é PAR ou ÍMPAR.

//function ParOuImpar(num) {
//if (num % 2 === 0) {
// alert("par")
//} else {
//alert("impar")
//}
//}

//let numero = parseInt(prompt("digite um numero : "), 10)

//ParOuImpar(numero)


//93) Faça um programa que tenha um procedimento chamado Contador() que recebe
//três valores como parâmetro: o início, o fim e o incremento de uma contagem. O
//programa principal deve solicitar a digitação desses valores e passá-los ao
//procedimento, que vai mostrar a contagem na tela.
//Ex: Para os valores de início (4), fim (20) e incremento(3) teremos
//Contador(4, 20, 3) vai mostrar na tela 4 >> 7 >> 10 >> 13 >> 16 >> 19 >> FIM


//let inicio = parseInt(prompt("digite o primeiro valor: "), 10)
//let fim = parseInt(prompt("digite o segundo valor: "), 10)
//let passo = parseInt(prompt("digite o terceiro  valor: "), 10)

//function Contador(inicio, fim, passo) {

//let resultado = ""

//for (let i = inicio; i <= fim; i += passo) {
// resultado += i + ">>"
//}
//resultado += "Fim"
//alert(resultado)
//}

//Contador(inicio, fim, passo)


//94) [DESAFIO] Desenvolva um aplicativo que tenha um procedimento chamado
//Fibonacci() que recebe um único valor inteiro como parâmetro, indicando quantos
//termos da sequência serão mostrados na tela. O seu procedimento deve receber
//esse valor e mostrar a quantidade de elementos solicitados.
//Obs: Use os exercícios 70 e 75 para te ajudar na solução
//Ex:
//Fibonacci(5) vai gerar 1 >> 1 >> 2 >> 3 >> 5 >> FIM
//Fibonacci(9) vai gerar 1 >> 1 >> 2 >> 3 >> 5 >> 8 >> 13 >> 21 >> 34 >> FIM
//70. [DESAFIO] Faça um programa que mostre os 10 primeiros elementos da Sequência
//  de Fibonacci:
// 1 1 2 3 5 8 13 21...

//let anterior = 0
//let atual = 1
//let proximo = anterior + atual
//let soma = 0
//for (let i = 0; i < 10; i++) {
//alert(proximo)
//soma += proximo

//anterior = atual
//atual = proximo
//proximo = anterior + atual

//}
//alert(soma)

75
//let anterior = 0
//let final = 1
//let proximo = anterior + final
//let vetor = []
//let soma = 0

//for (let i = 0; i < 15; i++) {
//vetor.push(proximo)
//soma += proximo

//anterior = final
//final = proximo
//proximo = anterior + final
//function fibonacci(n) {
//if (n === 1) {
// alert(`numero invalido`)
//return
//}

//if (n === 3) {
//alert("1 >> fim")
// return
//}
//let a = 2
//let b = 3
//let result = `${a} >> ${b}`

//let cont = 3

//while (cont <= n) {
//  let c = a + b
// result += (`${c}`)

//a = b
//b = c
//cont++
//}
//alert(result + `>> fim`)
//}
//fibonacci(5)


//PASSO 10 – FUNÇÕES
//95) Refaça o exercício 90, só que agora em forma de função Somador(), que vai
//receber dois parâmetros e vai retornar o resultado da soma entre eles para o
//programa principal.

//function Somador(a, b) {
//return a + b

//}
//let result = Somador(3, 5)
//alert(result)



//96) Crie um programa que tenha uma função Media(), que vai receber as 2 notas de
//um aluno e retornar a sua média para o programa principal.

//function Media(a, b) {
// return (a + b) / 2
//}
//let media = Media(5, 9)
//alert(media)

//97) Refaça o exercício 91, só que agora em forma de função Maior(), mas faça uma
//adaptação que vai receber TRÊS números como parâmetro e vai retornar qual foi o
//maior entre eles.

//function Maior(a, b, c) {

//  if (a > b && a > c) {
//  return a

//} else if (b > c) {
// return b
//} else {
//return c
//}
//}

//let maior = Maior(4, 9, 7)
//alert(maior)



//98) Crie um programa que tenha uma função SuperSomador(), que vai receber dois
//números como parâmetro e depois vai retornar a soma de todos os valores no
//intervalo entre os valores recebidos.
//Ex:
//SuperSomador(1, 6) vai somar 1 + 2 + 3 + 4 + 5 + 6 e vai retornar 21
//SuperSomador(15, 19) vai somar 15 + 16 + 17 + 18 + 19 e vai retornar 85


//function SuperSomador(num1, num2) {
//let min = Math.min(num1, num2)
//let max = Math.max(num1, num2)

//let soma = 0
//for (let i = min; i <= max; i++) {
// soma += i
//}
//return soma
//}
//console.log(SuperSomador(1, 6))
//console.log(SuperSomador(15, 19))





//99) Faça um programa que possua uma função chamada Potencia(), que vai receber
//dois parâmetros numéricos (base e expoente) e vai calcular o resultado da
//exponenciação.
//Ex: Potencia(5,2) vai calcular 52 = 25

//function Potencia(base, expoente) {
//let result = 1

//for (let i = 1; i <= expoente; i++) {
//result *= base
//}
//return result
//}
//let fazer = Potencia(5, 2)
//alert(fazer)





//100) Melhore o exercício 96, criando além da função Media() uma outra função
//chamada Situacao(), que vai retornar para o programa principal se o aluno está
//APROVADO, em RECUPERAÇÃO ou REPROVADO. Essa nova função, vai receber como
//parâmetro o resultado retornado pela função Media().
//```

//function Media(a, b) {

//return (a + b) / 2

//}
//let media = Media(5, 2)
//alert(media)

//function Situacao(media) {
//if (media >= 7) {
//alert("aprovado")
//} else if (media >= 5 && media < 7) {
//alert("recuperacao")
//} else {
//alert("reprovado")
//}
//}
//Situacao(media)