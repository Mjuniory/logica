//Problema "terreno"
//Fazer um programa para ler as medidas da largura e comprimento de um terreno retangular com uma
//casa decimal, bem como o valor do metro quadrado do terreno com duas casas decimais. Em seguida,
//o programa deve mostrar o valor da área do terreno, bem como o valor do preço do terreno, ambos com
//duas casas decimais, conforme exemplo.
//Exemplo 1:
//Digite a largura do terreno: 10.0
//Digite o comprimento do terreno: 30.0
//Digite o valor do metro quadrado: 200.00
//Area do terreno = 300.00
//Preco do terreno = 60000.00


//Exemplo 2:
//Digite a largura do terreno: 12.0
//Digite o comprimento do terrano: 20.0
//Digite o valor do metro quadrado: 150.00
//Area do terreno = 240.00
//Preco do terreno = 36000.00

//let largura = parseFloat(prompt("digite a largura do terreno : "))
//let comprimento = parseFloat(prompt("digite o comprimento do terreno: "))
//let valor = parseFloat(prompt("digite o valor do metro quadrado: "))

//let area = largura * comprimento
//alert("area do terreno = " + area.toFixed(2))

//let preco = area * valor
//alert("preco do terreno = " + preco.toFixed(2))





//Problema "retangulo"
//Fazer um programa para ler as medidas da base e altura de um retângulo. Em seguida, mostrar o valor
//da área, perímetro e diagonal deste retângulo, com quatro casas decimais, conforme exemplos.
///Exemplo 1:
//Base do retangulo: 4.0
//Altura do retangulo: 5.0
//AREA = 20.0000
//PERIMETRO = 18.0000
//DIAGONAL = 6.4031
//Exemplo 2:
//Base do retangulo: 10.3
//Altura do retangulo: 13.1
//AREA = 134.9300
//PERIMETRO = 46.8000
//DIAGONAL = 16.6643


//const base = parseFloat(prompt("base do retangulo : "))
//const altura = parseFloat(prompt("altura do retangulo : "))



//const area = base * altura
//const perimetro = 2 * (base + altura)
//const diagonal = Math.sqrt(base ** 2 + altura ** 2)

//alert("AREA" + area.toFixed(4))
//alert("PERIMETRO = " + perimetro.toFixed(4))
//alert("diagonal " + diagonal.toFixed(4))




//Problema "idades"
///Fazer um programa para ler o nome e idade de duas pessoas. Ao final mostrar uma mensagem com os
//nomes e a idade média entre essas pessoas, com uma casa decimal, conforme exemplo.
//Exemplo:
//Dados da primeira pessoa:
//Nome: Maria Silva
//Idade: 19
//Dados da segunda pessoa:
//Nome: Joao Melo
//Idade 20
//A idade média de Maria Silva e Joao Melo é de 19.5 anos

//alert("dados da primeira pessoa")
//let nome = prompt("qual e o seu nome: ")
//let idade = parseInt(prompt("idade: "), 10)
//alert("dados de segunda pessoa : ")
//let nome2 = prompt("qual e o seu nome: ")
//let idade2 = parseInt(prompt("idade: "), 10)

//let media = (idade * idade2) / 2
//alert("a idade media de  " + nome + "e" + nome2 + "e de " + media.toFixed(1) + "anos")



//Problema "soma"
//Fazer um programa para ler dois valores inteiros X e Y, e depois mostrar na tela o valor da soma destes
//números.
//Exemplo 1:/
//Digite o valor de X: 8
//Digite o valor de Y: 10
//SOMA = 18
//Exemplo 2:
//Digite o valor de X: 12
//Digite o valor de Y: 31
//SOMA = 43

//let x = parseInt(prompt("digite o valor de x: "), 10)
//let y = parseInt(prompt("digite o valor de y: "), 10)

//let soma = x + y
//alert("soma  " + soma)







//Problema "troco"
//Fazer um programa para calcular o troco no processo de pagamento de um produto de uma mercearia.
//O programa deve ler o preço unitário do produto, a quantidade de unidades compradas deste produto,
//e o valor em dinheiro dado pelo cliente (suponha que haja dinheiro suficiente). Seu programa deve
//mostrar o valor do troco a ser devolvido ao cliente.
//Exemplo 1:
//Preço unitário do produto: 8.00
//Quantidade comprada: 2
//Dinheiro recebido: 20.00
//TROCO = 4.00
//Exemplo 2:
//Preço unitário do produto: 30.00
//Quantidade comprada: 3
//Dinheiro recebido: 100.00
//TROCO = 10.00

//let preco = parseInt(prompt("preco unitario do produto : "), 10)
//let quantidade = parseInt(prompt("quantidade comprada: "), 10)
//let dinheiro = parseInt(prompt("dinheiro recebido : "), 10)

//let troco = dinheiro - (preco * quantidade)
//alert("troco " + troco)




//Problema "circulo"
//Fazer um programa para ler o valor "r" do raio de um círculo, e depois mostrar o valor da área do
//círculo com três casas decimais. A fórmula da área do círculo é a seguinte: 𝑎𝑟𝑒𝑎 = 𝜋. 𝑟
//￾ . Você pode
//usar o valor de 𝜋 fornecido pela biblioteca da sua linguagem de programação, ou então, se preferir, use
//diretamente o valor 3.14159.
//Exemplo 1:
//Digite o valor do raio do circulo: 2.0
//AREA = 12.566
//Exemplo 2:
//Digite o valor do raio do circulo: 13.2
//AREA = 547.391

//let raio = parseFloat(prompt("digite o valor do raio do circulo : "))

//let area = 3.14159 * raio * raio
//alert("area " + area)

//Problema "pagamento"
//Fazer um programa para ler o nome de um(a) funcionário(a), o valor que ele(a) recebe por hora, e a
//quantidade de horas trabalhadas por ele(a). Ao final, mostrar o valor do pagamento do funcionário com
//uma mensagem explicativa, conforme exemplo.
//Exemplo 1:
//Nome: Joao Silva
//Valor por hora: 50.00
//Horas trabalhadas: 60
//O pagamento para Joao Silva deve ser 3000.00
//Exemplo 2:
//Nome: Maria Dias
//Valor por hora: 60.00
//Horas trabalhadas: 100
//O pagamento para Maria Dias deve ser 6000.00


//let nome = prompt("nome: ")
//let valor = parseInt(prompt("valor por hora: "), 10)
//let hora = parseInt(prompt("horas trabalhadas: "), 10)

//let soma = valor * hora
//alert("o pagamento para " + nome + "deve ser " + soma.toFixed(2))






//Problema "consumo"
//Fazer um programa para ler a distância total (em km) percorrida por um carro, bem como o total de
//combustível gasto por este carro ao percorrer tal distância. Seu programa deve mostrar o consumo
//médio do carro, com três casas decimais.
//Exemplo 1:
//Distancia percorrida: 500
///Combustível gasto: 38.5
//Consumo medio = 12.987
//Exemplo 2:
//Distancia percorrida: 1108
//Combustível gasto: 71.4
//Consumo medio = 15.518


//let distancia = parseInt(prompt("distancia percorrida : "))
//let combustivel = parseInt(prompt("combustivel gasto : "))

//let consumo = distancia / combustivel
//alert("consumo medio = " + consumo.toFixed(3))


//Problema "medidas"
//Fazer um programa para ler três medidas A, B e C. Em seguida, calcular e mostrar (imprimir os dados
//com quatro casas decimais):
//a) a área do quadrado que tem lado A
//b) a área do triângulo retângulo que base A e altura B
//c) a área do trapézio que tem bases A e B, e altura C
//Exemplo 1:
//Digite a medida A: 4.0
//Digite a medida B: 3.5
//igite a medida C: 5.2
//AREA DO QUADRADO = 16.0000
//AREA DO TRIANGULO = 7.0000
//AREA DO TRAPEZIO = 19.5000
//Exemplo 2:
//Digite a medida A: 7.13
//Digite a medida B: 8.05
//Digite a medida C: 11.912
//AREA DO QUADRADO = 50.8369
//AREA DO TRIANGULO = 28.6983
//AREA DO TRAPEZIO = 90.4121

//let a = parseFloat(prompt("Digite a medida A:"))
//let b = parseFloat(prompt("Digite a medida b: "))
//let c = parseFloat(prompt(" Digite a medida c:"))

//let areaQ = a * a
//let areatq = (a * b) / 2
//let aretra = ((a * b) * c) / 2

//alert("AREA DO QUADRADO =" + areaQ.toFixed(4))
//alert("AREA DO TRIANGULO =" + areatq.toFixed(4))
//alert("AREA DO TRAPEZIO = " + aretra.toFixed(4))


//Problema "duracao"
//Fazer um programa para ler uma duração de tempo em segundos, daí imprimir na tela esta duração no
//formato horas:minutos:segundos.
//Exemplo 1:
//Digite a duracao em segundos: 300
//0:5:0
//Exemplo 2:
//Digite a duracao em segundos: 12506
//3:28:26
//Exemplo 3:
//Digite a duracao em segundos: 140811
//39:6:51

//let duracao = parseInt(prompt("digite a duracao em segundos : "), 10)

//let horas = Math.floor(duracao / 3600)
//let minutos = Math.floor((duracao % 3600) / 60)
//let segundos = duracao % 60

//alert(horas + ":" + minutos + ":" + segundos)