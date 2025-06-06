//Faça um programa que receba o nome e o salário de um funcionário, calcule e
//imprima o nome do funcionário e o valor do imposto de renda a ser pago,
//sabendo que o imposto equivale a 5% do salário.

//let nome = prompt("qual e o nome do funcionario ? ")
//let salario = parseFloat(prompt("qual e o salario do funcionario: "), 10)
//salario = Number(salario)

//let impostor = salario * 0.05


//alert("o nome do funcionario e" + nome + "o salario do  funcionario e" + salario + "o imposto e " + impostor.toFixed(2))


//Faça um programa que receba a idade de uma pessoa em anos, calcule e imprima
//essa idade em: NB cada alínea faça um programa e programa.
//a) meses,
//b) dias,
//c) horas
//d) minutos.

//let idade = prompt("Qual é a sua idade? ");
//idade = Number(idade);


//let meses = idade * 12;
//alert("A sua idade de acordo com os meses é: " + meses);


//let dias = idade * 365;
//alert("De acordo com os dias é: " + dias);


//let horas = dias * 24;
//alert("De acordo com as horas é: " + horas);


//let minutos = horas * 60;
//alert("De acordo com os minutos é: " + minutos);



//Escreva um programa que receba dois números inteiros, calcule e escreva: NB: cada alínea faça um programa e programa.
//a) Soma dos dois números
//b) Subtracção do primeiro pelo segundo
//c) Subtracção do segundo pelo primeiro
//d) Multiplicação dos dois números
//e) Divisão do primeiro pelo segundo
//f) Divisão do segundo pelo primeiro
//g) o primeiro elevado ao quadrado


//let num1 = parseFloat(prompt("digite o primeiro numero : "), 10)
//let num2 = parseFloat(prompt("digite o segundo numero : "), 10)

//num1 = Number(num1)
//num2 = Number(num2)
//let soma = num1 + num2
//alert("soma deles : " + soma)

//let Subtracção = num1 - num2
//alert("substracao e : " + Subtracção)

//let substracao2 = num2 - num1
//alert("substracao do segundo pra o primeiro e " + substracao2)

//let Multiplicação = num1 * num2
//alert("a multiplicacao e : " + Multiplicação)

//let Divisão = num1 / num2
//alert("a divisao e :" + Divisão)

//let divisao = num2 / num1
//alert("a divsao do segundo pra o primeiro e " + divisao)


//let elevado = (num1 * num2) * 2
//alert("o elevado ao quadrado e " + elevado)


//Faça um programa que receba o ano do nascimento de uma pessoa e o ano actual.
//Calcule e imprima:
//a) A idade dessa pessoa;
//b) Essa idade convertida em semanas.


//let nascimento = parseFloat(prompt("digite o ano do seu nascimento : "), 10)
//let actual = parseFloat(prompt("digite o ano actual : "), 10)

//let idade = actual - nascimento
//let semanas = idade * 52

//alert("a sua idade e " + idade + "anos")
//alert("a sua idade convertida em semanas e " + semanas + "semanas")



//Escreva um programa que leia 2 valores C e B e calcule o valor de A, sabendo
//Que C = (A + B) \* B. O programa deve imprimir os valores de A, B e C.
//function CalcularA(C, B) {
//if (B == 0) {
//alert("  o valor de  b   nao pode ser zero ")
//return
//}

//let A = (C / B) - B
//alert(`A = ${A}, B= ${B} , C = ${C}`)

//}

//let C = parseFloat(prompt("digite o valor de C"), 10)
//let B = parseFloat(prompt("digite o valor de B"), 10)

//CalcularA(C, B)