var area = document.getElementById("area")

function entrar(){
var nome = prompt("Digite seu nome");

if(nome === '' || nome === null){
    alert("OPS, algo deu errado")
    area.innerHTML = "Clique no botao acessar..."
}else{
    area.innerHTML = " Bem vindo " + nome + " ";

    let botaoSair = document.createElement("button");
    botaoSair.innerText = "Sair da conte";
    botaoSair.onclick = sair;

    area.appendChild(botaoSair);

}

}

function sair(){
    alert("Até mais!");
    area.innerHTML = "Você saiu!"
}