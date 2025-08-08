// let idade = parseInt (prompt("Digite sua idade:"))

//if(idade >= 17){
//  alert("Você já pode tirar a CNH")

//}

//else{
//   alert("Voce ainda nao tem idade para tirar sua CNH")
//}

// let primeiro_numero = parseInt (prompt("Digite um número:"))

// let segundo_numero = parseInt (prompt("Digite outro número:"))

//if (primeiro_numero < segundo_numero ) {
//   alert ("ordem crescente: " + primeiro_numero + "," + segundo_numero)
// }
// else {
// alert ("ordem crescente: "+ segundo_numero + "," + primeiro_numero) 
// }


// let numero = parseInt (prompt("Digite um numero:"))

// if (Numero >= 0)

// let nota1 = prompt("Digite a primeira nota:")
// let nota2 = prompt("Digite a segunda nota:")

// let media = (nota1+nota2) / 2 

// if (media >=7){
//     alert("Aluno aprovado")
// }
// else{
//     alert("Aluno reprovado")
// }
// atividadeHotel()
//     function atividadeHotel() {
//     let numero = parseInt(prompt("Digite um numero:"))

    


// if (numero == 3) {
//     alert("Parabéns você escreveu o número certo")
// }
// else {
//     alert("Número invalido !!")
// }

// let resposta = prompt("Digite batata")

// if (resposta == "batata") {
//     alert("Parabéns você escreveu a resposta certa")
// }
// else {
//     alert("Resposta inválida !!")
// }

// alert("Fim do sistema")
//     }

let mes = parseInt(prompt("Digite o número do mês em que deseja se hospedar: (9,  10 OU 11) "))
let hospedes = parseInt (prompt("Digite a quantidade de hospedes adultos:"))
let crianca = parseInt (prompt("Digite a quantidade de crianças:"))
let cupom =(prompt("Deseja aplicar o cupom MENOS10 a sua compra? (sim ou não"))

let preco_adulto = hospedes * 85
let preco_crianca = crianca * 42.5
let preco_total = preco_crianca + preco_adulto
let total = 150 + preco_total - 85

if (cupom.toUpperCase() === "MENOS10") {
        preco_total = preco_total * 0.9 // Aplica 10% de desconto
    }


    alert("Resumo da reserva:"+
    +"\nMês escolhido: " + (mes === 9 ? "Setembro" : mes === 10 ? "Outubro" : "Novembro")
    +"\nValor total adultos: R$ " + preco_adulto.toFixed(2)
    +"\nValor total crianças: R$ " + preco_crianca.toFixed(2)
    +"\nValor do quarto: R$ " + preco_quarto.toFixed(2)
    +"\nValor total da hospedagem: R$ " + preco_total.toFixed(2))