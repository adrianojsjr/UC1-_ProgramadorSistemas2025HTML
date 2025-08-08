alert("Hello Word!!")

function salvarIdade() {
    let idade = document.querySelector("#inputIdade").value
    idade = parseInt(idade)

    //Condições
    if (idade > 17) {
        alert("Você já pode tirar CNH")
    }
    else {
        alert("Você não tem idade suficiente para tirar CNH bebê")
    }



}

function salvarSenha() {
    let senha = document.querySelector("#inputSenha").value


    //Condições
    if (senha == "admin") {
        alert("Acesso concedido!!")
    }
    else {
        alert("senha invalida!!")
    }

}

let aceiteTermo = "Termo de uso aceito"
let termonao = "Aceite os termos para continuar..."

function salvarTermos() {
    let termos = document.querySelector("#inputTermos").checked

    if (termos == true) {
        document.querySelector("#termoAceite").innerHTML = aceiteTermo
    }
        else {
            document.querySelector("#termoAceite").innerHTML = termonao

        }
    
}

        esconderTodos() 
        mostrarInicio()

        function esconderTodos() {
            document.querySelector("#TermoUso").style.display = "none"

        }

         function mostrarInicio() {
            document.querySelector("#loginSenha").style.display = "block"
         }

        function mostrarAceite () {
            document.querySelector("#TermoUso").style.display = "block"

        }
