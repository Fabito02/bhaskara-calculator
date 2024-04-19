function bhaskara() {
    //obtem os valores de "a", "b" e "c"
    let a = Number(document.getElementById('a').value)
    let b = Number(document.getElementById('b').value)
    let c = Number(document.getElementById('c').value)
    //obtem o valor do delta
    let delta = (b * b) - 4 * a * c
    let resultado = ''
    //realiza os calculos
    if (delta > 0) {
        let n1 = (-b + Math.sqrt(delta)) / (2 * a)
        let n2 = (-b - Math.sqrt(delta)) / (2 * a)
        resultado = `Os resultados são:\nX1 = ${n1}\nX2 = ${n2}`
    } else if (delta === 0) {
        let n = -b / (2 * a)
        resultado = `Há apenas um resultado: \nX = ${n}`
    } else if (delta < 0){
        resultado = `Não apresenta raíz real`
    }

    //exibe o resultado no h3 presente no HTML com ID "result"
    document.getElementById('result').innerText = resultado
}
