num = document.querySelector('#num')
shower = document.querySelector('#shower')
res = document.querySelector('#resposta')
var lista = []


function inIntervalo(n){
    if( 1 <= Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if( l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionarNum(){
    if (num.value ==''){
        alert('Digite um número para adicionar!')
    }
    else if(inIntervalo(num.value) && !inLista(num.value, lista)){
        lista.push(Number(num.value))
        let item = document.createElement('option')
        item.text = ` O número ${num.value} foi adicionado`
        shower.appendChild(item)
        res.innerHTML = ''

    }else{
        alert('Valor inválido ou não adicionado.')
    }
    num.value = ''
    num.focus()
}

function calcularNum(){
    if(lista.length == 0){
        alert('Digite algum número para finalizar!')
    }
    else{
        function sortfunction(a, b){
            return (a - b)
        }
        let total = Number(lista.length)
        lista.sort(sortfunction)
        maior = lista[total - 1]
        menor = lista[0]

        let soma = 0
        for(let c in lista){
            soma += lista[c]
        }
        media = soma / total
        
        res.innerHTML = ''
       
        res.innerHTML += `<p>Total: ${total}</p>`
        res.innerHTML += `<p>Maior: ${maior}</p>`
        res.innerHTML += `<p>Menor: ${menor}</p>`
        res.innerHTML += `<p>Soma: ${soma}</p>`
        res.innerHTML += `<p>Média: ${media}</p>`
    }
}