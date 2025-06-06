//Problema "crescente" 


//let x = parseInt(prompt("digite um numero:"), 10)
//let y = parseInt(prompt("digite um numero: "), 10)

//while (x != y) {

//if (x < y) {
//alert("crecente")
// } else {
// alert("decrescente")
//}
//x = parseInt(prompt("digite o numero de x : "), 10)
//y = parseInt(prompt("digite o numero de y :"), 10)
//}

//Problema "media_idades"


//let totalidade = 0
//let quantidadepessoas = 0

//alert("digite as idade: ")
//while (true) {
//let idade = parseInt(prompt())

//if (idade < 0) {
//if (quantidadepessoas < 0) {
//alert("impossivel de calcular")
//}
// break
//}
//totalidade += - idade
//quantidadepessoas++


//}
//if (quantidadepessoas > 0) {
//let media = totalidade / quantidadepessoas
//alert("media  =" + media.toFixed(2))
//}\





//Problema "senha_fixa" (adaptado de URI 1114)
//let senha = parseInt(prompt("digite a senha de acesso"), 10)

//while (senha !== 2002) {
//alert("Senha Invalida! Tente novamente:")
//senha = parseInt(prompt("digite a senha de acesso : "), 10)
//}
//alert("acesso permetido")

//Problema "quadrante" (adaptado de URI 1115)

//while (true) {
//let x = parseInt(prompt("digite o valor de x:"), 10)
//let y = parseInt(prompt("digite o valor de y:"), 10)

//if (x === 0 || y === 0) {
//break
//}

//if (x > 0 && y > 0) {
//alert("Q1")
//} else if (x < 0 && y > 0) {
//alert("Q2")
//} else if (x < 0 && y < 0) {
//alert(" Q3")
//} else if (x > 0 && y < 0) {
//alert("Q4")
//}
//}

//Problema "validacao_de_nota" (adaptado de URI 1117)

//soma = 0
//contador = 0

//while (contador < 2) {
//let nota = parseFloat(prompt("digite a sua nota: "))

//if (nota >= 0 && nota <= 10) {
//soma += nota
//contador += 1
//} else {
//alert("Valor invalido! Tente novamente:")
//}


//}

//let media = soma / 2
//alert("Media" + media.toFixed(2))

//Problema "combustivel" (adaptado de URI 1134)
//let alcool = 0
//let diesel = 0
//let gasolina = 0

//while (true) {
// let codigo = parseInt(prompt("Digite o código (1: Álcool, 2: Gasolina, 3: Diesel, 4: Fim): "), 10);


//if (codigo === 4) {
//alert("muito obrigado")
//break
//} else if (codigo === 1) {
//alcool++
//} else if (codigo === 2) {
//gasolina++
//} else if (codigo === 3) {
//diesel++
//} else {
//alert("codigo invalido! tente novamente")
//}
//}
//alert("alcool :" + alcool)
//alert("gasolina: " + gasolina)
//alert("diesel" + diesel)





//Problema "pares_consecutivos" (adaptado de URI 1159)

//soma = 0
//contador = 0

//while (true) {
//let num = parseInt(prompt("Digite um numero inteiro:"), 10)

//if (num === 0) {
// break
//}/

//if (num % 2 !== 0) {
//num = num + 1
//}
//soma = 0

//for (let i = 0; i < 5; i++) {
//soma = soma + num
//num = num + 2
//}
//alert("soma =" + soma)
//}


//PARTE 2: estrutura para
//Problema "tabuada"

//let num = parseInt(prompt("digite o numero da tabuada"), 10)
//resultado = 0

//for (let i = 1; i <= 10; i++) {
//resultado = num * i
//alert(num + "x" + i + "=" + resultado)
//}

//Problema "soma_impares" (adaptado de URI 1071)

//let x = parseInt(prompt("digite um numero: "), 10)
//let y = parseInt(prompt("digite um outro numero : "), 10)
//soma = 0

//menor = x < y ? x : y
//maior = x > y ? x : y

//for (let i = menor; i < maior; i++) {
//if (i % 2 !== 0) {
//  soma = soma + i
//}
//}
//alert("SOMA impares =" + soma)

//Problema "sequencia_impares" (adaptado de URI 1067)

//let x = parseInt(prompt("digite o numero de x: "), 10)
//contador = 1

//while (contador <= x) {
//if (contador % 2 !== 0) {

//alert(contador)
//}
//contador++
//}

//Problema "dentro_fora" (adaptado de URI 1072)

//let num = parseInt(prompt("Quantos numeros voce vai digitar? "), 10)
//dentro = 0
//fora = 0

//for (let i = 1; i <= num; i++) {
// let x = parseInt(prompt("digite o valor de x: "), 10)

//if (x >= 10 && x <= 20) {
//dentro++
//} else {
// fora++
// }
//}

//alert("dentro = " + dentro)
//alert("fora= " + fora)

//Problema "par_impar" (adaptado de URI 1074)
//let num = parseInt(prompt("Quantos numeros voce vai digitar? "), 10)


//for (let i = 0; i < num; i++) {
//let numa = parseInt(prompt("Digite um numero:"), 10)

//if (numa === 0) {
//alert("nulo")

//} else if (numa % 2 === 0) {
//if (numa > 0) {
//alert("PAR POSITIVO")
//} else {
// alert("PAR NEGATIVO")
// }
//} else {
//if (numa > 0) {
//alert("IMPAR POSITIVO")
//} else {
// alert("IMPAR NEGATIVO")
//}
//}
//}




//Problema "media_ponderada" (adaptado de URI 1079)
//let num = parseInt(prompt("Quantos numeros voce vai digitar? "), 10)


//for (let i = 0; i < num; i++) {
//let num1 = parseInt(prompt("Digite um numero:"), 10)
//let num2 = parseInt(prompt("Digite um numero:"), 10)
//let num3 = parseInt(prompt("Digite um numero:"), 10)

// let media = (num1 * 2 + num2 * 3 + num3 * 5) / 10
// alert("Media = " + media.toFixed(1))
//}

////Problema "divisao" (adaptado de URI 1116)

//let num = parseInt(prompt("Quantos numeros voce vai digitar? "), 10)


//for (let i = 0; i < num; i++) {
//let nume = parseInt(prompt("Digite um numero:"), 10)
//let deno = parseInt(prompt("Digite um numero:"), 10)



//if (deno != 0) {
//let divisao = nume / deno
//alert("Divisao =" + divisao.toFixed(2))
// } else {
//alert("divisao impossivel")
//}
//}

///Problema "fatorial" (adaptado de URI 1153)

//let num = parseInt(prompt("Digite o valor de N: "), 10)
//let fatorial = 1

//for (let i = 1; i <= num; i++) {

//fatorial *= i



//}
//alert("fatorial = " + fatorial)

//Problema "experiencias" (adaptado de URI 1094)

//let n = parseInt(prompt("Quantos casos de teste serao digitados? "), 10);

//let totalCobaias = 0
//let totalCoelhos = 0
//let totalRatos = 0
//let totalSapos = 0

//for (let i = 0; i < n; i++) {
  //let quantidade = parseInt(prompt("quantidade de cobaias:"), 10)
  //let tipo = prompt("Tipo de Cobais: ").toUpperCase()

  //totalCobaias += quantidade

  //if (tipo === "C") {
   // totalCoelhos += quantidade
  //} else if (tipo === "R") {
    //totalRatos += quantidade

  //} else if (tipo === "S") {
    //totalSapos += quantidade
  //}
//}

//let percentualCoelhos = (totalCoelhos / totalCobaias) * 100
//let percentualRatos = (totalRatos / totalCobaias) * 100
//let percentualSapos = (totalSapos / totalCobaias) * 100

//alert("Relatorio Final")
//alert("Total: " + totalCobaias + "cobaias")
//alert("Total de coelhos: " + totalCoelhos);
//alert("Total de ratos: " + totalRatos);
//alert("Total de sapos: " + totalSapos);
//alert("Percentual de coelhos: " + percentualCoelhos.toFixed(2));
//alert("Percentual de ratos: " + percentualRatos.toFixed(2));
//alert("Percentual de sapos: " + percentualSapos.toFixed(2));