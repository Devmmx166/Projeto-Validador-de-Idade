
/// carregamos os dados da função altomaticamente usando a função no html
//onload="função " principal do js

function carregar(){

let msg = document.getElementById('msg');// cacessando a tag no js
let img = document.querySelector("#imagem")
let data = new Date()// função que chama a hora do sistema e data
let hora = data.getHours()// seleção de dado especifico
let saudacao = document.querySelector('.saudacao')

msg.innerHTML = `Agora são ${hora} horas`
if(hora >= 0 && hora < 12){
    //Bom dia
img.src = "img/manha.png"
document.body.style.background = 'rgb(240, 231, 231)'
saudacao.innerText = 'Bom Dia'
saudacao.style.textAlign='center'
}
else if(hora >=12 && hora <= 18){
    //boa tarde
    img.src = "img/tarde.png"
    document.body.style.background = ' rgb(230, 177, 159)'
    saudacao.innerText = 'Boa Tarde'
    saudacao.style.textAlign='center'
}
else{
    //boa boite
    img.src = "img/noite.png";
    document.body.style.background = ' rgb(54, 64, 119)'
    saudacao.innerText = 'Boa Noite'
    saudacao.style.textAlign='center'
    
}


}

