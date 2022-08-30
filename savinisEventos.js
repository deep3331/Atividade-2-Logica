//Dados Software
let diaAtual = new Date();
let listaDePalestrantes = ["Pepe", "Tete", "Dodo", "Zeze"]
let diaEvento = new Date()
let idadeParticipante = 18


if (listaDeParticipantes.length <= 100) {
    console.log("Digite a data do evento:")

    if (diaEvento > diaAtual) {
        console.log("Digite sua Idade:")

        if (idadeParticipante >= 18) {
            console.log("Cadastro permitido")
        
        }else{
            console.log("Cadastro não permitido (Participante menor de idade)") 
        }
    
    }else{
        console.log("Data incorreta, digite novamente.")
    }

}else{
    console.log("A capacidade de pessoas no evento excedeu o limite")
}