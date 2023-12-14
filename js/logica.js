
// function validar(){
// let data = new Date()
// let ano = data.getFullYear()
// let fAno = document.getElementById('fAno')
// let res = document.querySelector('div#res')

// let img = document.createElement('img') //cria uma tag no html

// img.setAttribute('id', 'foto')//cria um elemento da tag, usando a ',' 'identificador' para identificar


// fAno = Number(fAno.value)

// if(fAno.length == 0 || fAno > ano){
//     window.alert('[ERRO] Verifique os dados e tente novamente')
// }else{
//    let radSex = document.getElementsByName('radSex')
//    let idade = ano - fAno;
//    genero = ''; 

//    if(radSex[0].checked){
//     genero = 'Masculino';
//     if(idade >= 0 && idade <= 10){
//         img.setAttribute('src', 'img/homem/bebe-menino.png')

//         //criança
//     }
//     else if(idade >10 && idade <= 17){
//         //adolecente
//      img.setAttribute('src', 'img/homem/adolecente.png')   
//     }
//     else if(idade >=18 && idade <= 59){
//         img.setAttribute('src', 'img/homem/homem-adulto-55-anos.png')
//         //adulto
//     }
//     else{
//         //idoso
//         img.setAttribute('src', 'img/homem/homem-adulto-65-anos.png')
//     }
// }else{
//     genero = 'Feminino'
//     if(idade >= 0 && idade <= 10){
//         img.setAttribute('src', 'img/mulher/bebe-menina.png')

//         //criança
//     }
//     else if(idade >10 && idade <= 17){
//         //adolecente
//      img.setAttribute('src', 'img/mulher/menina.png')   
//     }
//     else if(idade >=18 && idade <= 59){
//         img.setAttribute('src', 'img/mulher/mulher-adulta-55-anos.png')
//         //adulto
//     }
//     else{
//         //idoso
//         img.setAttribute('src', 'img/mulher/mulher-adulta-65-anos.png')
//     }
// }


// res.innerHTML = `Pessoa do sexo ${genero} com ${idade} anos.`
// res.appendChild(img)
// }

// }
function validar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fAno = document.getElementById('fAno')
    let res = document.querySelector('div#res')
    
    let img = document.createElement('img') //cria uma tag no html
    
    img.setAttribute('id', 'foto')//cria um elemento da tag, usando a ',' 'identificador' para identificar
    
    
    fAno = Number(fAno.value)
    
    if(fAno.length == 0 || fAno > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else{
       let radSex = document.getElementsByName('radSex')
       let idade = ano - fAno;
       genero = ''; 
    
       if(radSex[0].checked){
        genero = 'Masculino';
        if(idade >= 0 && idade <= 5){
            img.setAttribute('src', 'img/homem/bebe-menino.png')
    
            //criança
        }
        else if(idade >=6 && idade <= 10){
            img.setAttribute('src', 'img/homem/menino.png')
    
            //criança
        }
        else if(idade >10 && idade <= 17){
            //adolecente
         img.setAttribute('src', 'img/homem/adolecente.png')   
        }
        else if(idade >=18 && idade <= 28){
            img.setAttribute('src', 'img/homem/homem-adulto-29-anos.png')
            //adulto
        }
        else if(idade >=28 && idade <= 40){
            img.setAttribute('src', 'img/homem/homem-adulto-40-anos.png')
            //adulto
        }
        else if(idade >=40 && idade <= 55){
            img.setAttribute('src', 'img/homem/homem-adulto-55-anos.png')
            //adulto
        }
        else{
            //idoso
            img.setAttribute('src', 'img/homem/homem-adulto-65-anos.png')
        }
    }else{
        genero = 'Feminino'
        if(idade >= 0 && idade <= 5){
            img.setAttribute('src', 'img/mulher/bebe-menina.png')
    
            //criança
        }
        else if(idade >=6 && idade <= 10){
            img.setAttribute('src', 'img/mulher/menina.png')
    
            //criança
        }
        else if(idade >10 && idade <= 17){
            //adolecente
         img.setAttribute('src', 'img/mulher/garota.png')   
        }
        else if(idade >=18 && idade <= 28){
            img.setAttribute('src', 'img/mulher/mulher-adulta-28-anos.png')
            //adulto
        }
        else if(idade >=28 && idade <= 40){
            img.setAttribute('src', 'img/mulher/mulher-adulta-40-anos.png')
            //adulto
        }
        else if(idade >=40 && idade <= 55){
            img.setAttribute('src', 'img/mulher/mulher-adulta-55-anos.png')
            //adulto
        }
        else{
            //idoso
            img.setAttribute('src', 'img/mulher/mulher-adulta-65-anos.png')
        }
    }
    
    
    res.innerHTML = `Pessoa do sexo ${genero} com ${idade} anos.`
    res.appendChild(img)
    }
    
    }
    