function insert(num) {
    var number = document.getElementById('display').innerHTML
    document.getElementById('display').innerHTML = number + num
}

function clean() {
    document.getElementById('display').innerHTML = ""
}

function back() {
    var resultado = document.getElementById('display').innerHTML
    document.getElementById('display').innerHTML = resultado.substring(0, resultado.length -1)
}

function calculo() {
    var resultado = document.getElementById('display').innerHTML
    if (resultado) {
        document.getElementById('display').innerHTML = eval(resultado)
    } else {
        window.alert('Nothing to calculate.')
    }
}