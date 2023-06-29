var isNight = false
function dark() {
    var botao = document.getElementById('noturno')
    var body = document.body
    var abbr = document.getElementById('abbr-botao')

    if (isNight) {
        botao.src = "ultraball-botão1.png"
        body.style.backgroundImage = "url('imagens/bg-preto1.jpg')"
        abbr.title = "Dark"
    }
    else {
        botao.src = "pokeball-botao.png"
        body.style.backgroundImage = "url('imagens/bg-pretoo.jpg')"
        abbr.title = "Light"
    }
    isNight = !isNight;
}
