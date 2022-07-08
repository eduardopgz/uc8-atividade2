let cadastro = {nome: "Eduardo", idade: 24, email: "eduardopgzzz@gmail.com"}

let listaParticipantes = []

if(cadastro.idade >= 18){
    if(listaParticipantes.length < 100){
        listaParticipantes.push(cadastro)
        console.log("Cadastro realizado com sucesso")
    }
    else{
        console.log("Lista j[a atingiu 100 participantes")
    }
}
else{
    console.log("Idade minima de 18 anos para participar")
}