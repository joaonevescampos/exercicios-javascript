
enviar = document.getElementById('enviar')
enviar.addEventListener('click', calcular)
var res = document.getElementById('res')

function calcular(){
    res.innerHTML = ''
    var numero = document.getElementById('num')
    numero = Number(numero.value)
    res.innerHTML = `<h1 id='titulo'>Tabuada do ${numero}</h1>`

    for(c = 1; c <= 10; c++){
        p = c * numero
        res.innerHTML += ` <p>${c} x ${numero} = ${p}</p>`
    }
}