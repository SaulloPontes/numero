let numAle = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
}



let num = numAle(1, 20)
let score = 20
let highscore = 0
let nums = []
// document.querySelector('.guess').textContent = num


document.querySelector('.click').addEventListener('click', function () {

    const n = Number(document.querySelector('.number').value)

    if (!n) {
        document.querySelector('.mensagem').textContent = 'escolha o número'
    } else if (n === num) {
        document.querySelector('.mensagem').textContent = 'vc acertou'
        document.querySelector('body').style.backgroundColor = 'blue'

        document.querySelector('.numEscondido').style.borderRadius = '50%'

        document.querySelector('.guess').textContent = n
        if (score >= highscore) {
            highscore = score
            document.querySelector('.highscore').textContent = highscore
        }
    } else {
        if (score > 0) {
            score--
            document.querySelector('.score').textContent = score

        }
        if (num > n) {
            document.querySelector('.mensagem').textContent = 'numero maior'
        } else {
            document.querySelector('.mensagem').textContent = 'numero menor'
        }
        document.querySelector('body').style.backgroundColor = 'red'
    }
})


document.querySelector('.reiniciar').addEventListener('click', function () {
    score = 20
    num = numAle(1, 20)
    document.querySelector('body').style.backgroundColor = 'gray'
    document.querySelector('.guess').textContent = '?'
    document.querySelector('.score').textContent = score
    document.querySelector('.numEscondido').style.borderRadius = '80px'
})