enviar = document.querySelector('#enviar')
enviar.addEventListener('click', progressaoAritmetica)

function progressaoAritmetica(){

    inicio = document.querySelector('#inicio')
    fim = document.querySelector('#fim')
    passo = document.querySelector('#passo')
    resposta = document.querySelector('#res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('ERRO! Digite todos parâmetros para obter a progressão geométrica!')
    }

    else if(Number(passo.value) == 0){
        alert('ERRO! Com passo nulo não é possível gerar a sequência! Tente Novamente com um passo diferente de zero. Considerarei o passo assumindo o valor = 1, ok?')
            passoNovo = 1
            inicio = Number(inicio.value)
            fim = Number(fim.value)
            n = (fim - inicio) / passoNovo
            an = inicio
            res.innerHTML = ''

            for( c = 0; c <= n; c++ ){
                resposta.innerHTML += `${an} => `
                an = inicio + passoNovo
                inicio = an
            }

            resposta.innerHTML += `fim`
            
    }

    else if((Math.abs(Number(passo.value)) > Math.abs(Number(fim.value))) || Math.abs((Number(passo.value)) > Math.abs(Number(inicio.value)))){
        alert('ERRO! Não é possível gerar a sequência com o módulo do passo maior do que o módulo do maior termo da sequência. Por favor, tente novamente com o módulo do passo menor que o módulo do maior termo (inicio ou fim).')
    }

    else if(Number(inicio.value) > Number(fim.value)){
        if(Number(passo.value) > 0){
            alert('ERRO! Com passo positivo é impossível gerar a sequência que deseja. Considerarei o passo que colocou como sendo negativo, ok?')
    
            passo = Number(passo.value)
            passo = passo * (-1)
            inicio = Number(inicio.value)
            fim = Number(fim.value)
            n = (fim - inicio) / passo
            an = inicio
            res.innerHTML = ''

            for( c = 0; c <= n; c++ ){
                resposta.innerHTML += `${an} => `
                an = inicio + passo
                inicio = an
            }

            resposta.innerHTML += `fim`
            }

        else{
            inicio = Number(inicio.value)
            passo = Number(passo.value)
            fim = Number(fim.value)
            n = (fim - inicio) / passo
            an = inicio
            res.innerHTML = ''

        for(c = 0; c <= n; c++){
            resposta.innerHTML += `${an} => `
            an = inicio + passo
            inicio = an
        }

        resposta.innerHTML += `fim`
        }
    }

    else{
    
        inicio = Number(inicio.value)
        passo = Number(passo.value)
        fim = Number(fim.value)
        n = (fim - inicio) / passo
        an = inicio
        res.innerHTML = ''

        for( c = 0; c <= n; c++ ){
            resposta.innerHTML += `${an} => `
            an = inicio + passo
            inicio = an
        }

        resposta.innerHTML += `fim`
    }
}