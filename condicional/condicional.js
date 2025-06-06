//1.

//let nota1 = parseFloat(prompt("digite a primeira nota:"))
//let nota2 = parseFloat(prompt("digite a segunda nota:"))

//let notaf = nota1 + nota2
//alert("nota final = " + notaf.toFixed(2))
//if (notaf <= 60) {
// alert("reprovado")
//}

//2.
//let a = parseFloat(prompt("Coeficiente a:"))
//let b = parseFloat(prompt("Coeficiente b:"))
//let c = parseFloat(prompt("Coeficiente c:"))

//let delta = b * b - 4 * a * c

//if (delta < 0) {
//alert("essa equação não possuir raízes reais")
//} else {
//let x1 = (-b + Math.sqrt(delta) / (2 * a))
//let x2 = (+b - Math.sqrt(delta) / (2 * a))


//alert("x1 = " + x1.toFixed(4))
//alert("x2 = " + x2.toFixed(4))
//}

//3.
//let a = parseInt(prompt("digite o primeiro: "), 10)
//let b = parseInt(prompt("digite o segundo: "), 10)
//let c = parseInt(prompt("digite o terceiro: "), 10)

//let menor = 0

//if (a <= b && a <= c) {
//menor = a
//} else if (b <= a && b <= c) {
//menor = b

//} else {
//menor = c
//}
//alert("o menor  numero e " + menor)

//4
//problema "operadora"

//let quantidademin = parseInt(prompt("digite a quantidade de minutos : "), 10)
//let valorp = 0

//if (quantidademin <= 100) {
//valorp = 50.00
//} else if (quantidademin > 100) {
//let excedente = quantidademin - 100
//valorp = 50 + (excedente * 2)
//}
//alert("valor a pagar e de : " + valorp.toFixed(2))

//5
//problema "troco_verificado"
//Fazer um programa para calcular o troco no processo de pagamento de um produto de uma mercearia.
//O programa deve ler o preço unitário do produto, a quantidade de unidades compradas deste produto,
//e o valor em dinheiro dado pelo cliente. Seu programa deve mostrar o valor do troco a ser devolvido
//ao cliente. Se o dinheiro dado pelo cliente não for suficiente, mostrar uma mensagem informando o
//valor restante conforme exemplo.
//Exemplo 1:
//Preço unitário do produto: 8.00
//Quantidade comprada: 2
//Dinheiro recebido: 20.00
//TROCO = 4.00
//ex : 2
//Preço unitário do produto: 30.00
//Quantidade comprada: 3
//Dinheiro recebido: 70.00
//DINHEIRO INSUFICIENTE. FALTAM 20.00 REAIS

//let preco = parseInt(prompt("preco unitario do produto : "), 10)
//let quantidade = parseInt(prompt("quantidade comprada : "), 10)
//let dinheiro = parseInt(prompt("dinheiro recebido: "), 10)

//let total = preco * quantidade
//if (dinheiro >= total) {
//let troco = dinheiro - total
//alert("troco = " + troco.toFixed(2) + "reais")
//}
//else {
//let faltam = total - dinheiro
//alert("dinheiro insuficiente. faltam  20 reais" + faltam.toFixed(2) + "reais")
//}


//6
//Problema "glicose"

//let glicose = parseInt(prompt("digite a medida do glicose : "), 10)

//if (glicose <= 100) {

// alert("classificacao: normal")
//} else if (glicose > 100 && glicose <= 140) {
//alert("classificacao :elevado")
//}
//else {
//alert("classificacao : diabetes")
//}

//7
//Problema "dardo"



//let d1 = parseFloat(prompt("digite a primeira distancia: "), 10)
//let d2 = parseFloat(prompt("digite a segunda distancia: "), 10)
//let d3 = parseFloat(prompt("digite a terceira distancia: "), 10)

//let maior = 0

//if (d1 >= d2 && d1 >= d3) {
//maior = d1

//} else if (d2 >= d3 && d2 >= d1) {
// maior = d2
//} else {
// maior = d3
//}

//alert("maior distancia " + maior.toFixed(2))
//Problema "temperatura"


//let temperatura = prompt(" voce vai digitar a temperatura em qual escala (C/F) ? ").toUpperCase()

//if (temperatura === "F") {
//let fahrenheit = parseFloat(prompt("digite a temperatura em Fahrenheit: "))


//let celsius = (fahrenheit - 32) * 5 / 9
//alert("temperatura equivalente em celsius " + celsius.toFixed(2))
//} else if (temperatura === "C") {
//let celsius = parseFloat(prompt("digite a temperatura em celsius: "))

//let fahrenheit = celsius * 9 / 5 + 32
//alert("temperatura equivalente em fahreheit:" + fahrenheit.toFixed(2))
//} else {
//alert("digite os dados novamente")
//}




//Problema "lanchonete" (adaptado de URI 1038)
//Uma lanchonete possui vários produtos. Cada produto possui um código
//e um preço. Você deve fazer um programa para ler o código e a
//quantidade comprada de um produto (suponha um código válido), e daí
//informar qual o valor a ser pago, com duas casas decimais, conforme
//tabela de produtos ao lado.
//Código do
//produto
//Preço do
//produto
//1 R$ 5.00
//2 R$ 3.50
//3 R$ 4.80
//4 R$ 8.90
//5 R$ 7.32
//Exemplo 1:
//Codigo do produto comprado: 1
//Quantidade comprada: 3
//Valor a pagar: R$ 15.00
//Exemplo 2:
//Codigo do produto comprado: 4
//Quantidade comprada: 2
//Valor a pagar: R$ 17.80


//let produto = parseInt(prompt("codigo do produto comprado : "), 10)
//let quantidade = parseInt(prompt("quantidade comprada : "), 10)
//let preco = 0


//if (produto === 1) {
// preco = 5.00
//} else if (produto === 2) {
//preco = 3.50
//} else if (produto === 3) {
//preco = 4.80
//} else if (produto === 4) {
// preco = 8.90
//} else if (produto === 5) {
//preco = 7.32
//}
//let vpagar = preco * quantidade
//alert("o valor a pagar e de " + vpagar.toFixed(2))

//Problema "multiplos" (adaptado de URI 1044)
//Fazer um programa para ler dois números inteiros, e dizer se um número é múltiplo do outro. Os
//números podem ser digitados em qualquer ordem.
//Exemplo 1:
//Digite dois numeros inteiros:
//6
///24
//Sao multiplos
//Exemplo 2:
//Digite dois numeros inteiros:
//24
//6
//Sao multiplos
//Exemplo 3:
//Digite dois numeros inteiros:
//13
//5
//Nao sao multiplos

//Problema "aumento" (adaptado de URI 1048)
//Uma empresa vai conceder um aumento percentual de
//salário aos seus funcionários dependendo de quanto
//cada pessoa ganha, conforme tabela ao lado. Fazer um
//programa para ler o salário de uma pessoa, daí mostrar
//qual o novo salário desta pessoa depois do aumento,
//quanto foi o aumento e qual foi a porcentagem de
//aumento.
//Salário atual Aumento
//Até R$ 1000.00 20%
//Acima de R$ 1000.00
//até R$ 3000.00
//15%
//Acima de R$ 3000.00
//até R$ 8000.00
//10%
//Acima de R$ 8000.00 5%
//Exemplo 1:
//Digite o salario da pessoa: 2500.00
//Novo salario = R$ 2875.00
//Aumento = R$ 375.00
//Porcentagem = 15 %
//Exemplo 2:
//Digite o salario da pessoa: 8000.00
//Novo salario = R$ 8800.00
//Aumento = R$ 800.00
//Porcentagem = 10 %

//let salario = parseFloat(prompt("digite o salario da pessoa : "))
//let novosalario = 0
//let aumento = 0
//let porcentagem = 0

//if (salario <= 1000) {
//porcentagem = 20
//}
//else if (salario <= 3000) {
// porcentagem = 15
//}
//else if (salario <= 8000) {
//porcentagem = 10
//} else {
//porcentagem = 5
//}

//aumento = salario * porcentagem / 100
//novosalario = salario + aumento

//alert("Novo salrio = " + novosalario.toFixed(2))
//alert("aumento " + aumento.toFixed(2))
//alert("porcentagem" + porcentagem.toFixed(2))








//Problema "tempo_de_jogo" (adaptado de URI 1046)
//Leia a hora inicial e a hora final de um jogo. A seguir calcule a duração do jogo, sabendo que o mesmo
//pode começar em um dia e terminar em outro, tendo uma duração mínima de 1 hora e máxima de 24
//horas.
//Exemplo 1:
//Hora inicial: 16
//Hora final: 2
//O JOGO DUROU 10 HORA(S)
//Exemplo 2:
//Hora inicial: 0
//Hora final: 0
//O JOGO DUROU 24 HORA(S)
//Exemplo 3:
//Hora inicial: 2
//Hora final: 16
//O JOGO DUROU 14 HORA(S)


//let horai = parseInt(prompt("Hora inicial : "), 10)
//let horaf = parseInt(prompt("Hora final : "), 10)
//let tempo = 0

//if (horai === horaf) {
//tempo = 24
//} else if (horaf > horai) {
//tempo = horaf - horai
//} else {
//tempo = (24 - horai) + horaf
//}
//alert("o jogo durou " + tempo + "hora(s)")



//Problema "coordenadas" (adaptado de URI 1041)
//Leia os valores das coordenadas X e Y de um ponto no plano
//cartesiano. A seguir, determine qual o quadrante ao qual pertence o
//ponto (Q1, Q2, Q3 ou Q4). Se o ponto estiver na origem, escreva a
//mensagem “Origem”. Se o ponto estiver sobre um dos eixos escreva
//“Eixo X” ou “Eixo Y”, conforme for a situação.
//Exemplo 1:
//Valor de X: 4.5
//Valor de Y: -2.2
//Q4
//Exemplo 2:
//Valor de X: 3.1
//Valor de Y: 2.0
//Q1
//Exemplo 3:
//Valor de X: 0
//Valor de Y: 0
//Origem
//Exemplo 4:
//Valor de X: 3.8
//Valor de Y: 0
//Eixo X

//let x = parseFloat(prompt("valor de X: "), 10)
//let y = parseFloat(prompt("valor de y : "), 10)

//if (x === 0 && y === 0) {
//alert("origem")
//} else if (x === 0) {
// alert("eixo de y")
//} else if (y === 0) {
// alert("eixo de x")
//} else if (x > 0 && y > 0) {
//alert("q1")/
//} else if (x < 0 && y > 0) {
//alert("q2")
//} else if (x < 0 && y < 0) {
//alert("q3")
//} else if (x > 0 && y < 0) {
// alert("q4")
//}
