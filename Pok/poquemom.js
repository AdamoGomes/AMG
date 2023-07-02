var isNight = false
function dark() {
    var botao = document.getElementById('noturno')
    var body = document.body
    var abbr = document.getElementById('abbr-botao')
    var footer = document.getElementById('footer')
    var git_icon = document.getElementById('git-icon')
    var git_link = document.getElementById('git')
    var buscar = document.getElementById("buscar")
    var dark_nome = document.getElementById('nome-dark')

    if (isNight) {
        botao.src = "imagens/ultraball-botão1.png"
        body.style.backgroundImage = "url('imagens/bg-preto1.jpg')"
        abbr.title = "Dark"
        footer.style.backgroundColor = "rgb(211, 211, 211)"
        git_icon.src = "imagens/github-16-black.png"
        footer.style.color = "rgb(0, 0, 0)"
        buscar.style.backgroundColor = "rgb(211, 211, 211)"
        buscar.style.color = "rgb(0, 0, 0)"
        buscar.style.border =  "1px solid black"
        dark_nome.style.color = "rgb(0, 0, 0)"
        dark_nome.innerHTML = "DARK"
    }
    else {
        botao.src = "imagens/pokeball-botao.png"
        body.style.backgroundImage = "url('imagens/bg-pretoo.jpg')"
        abbr.title = "Light"
        footer.style.backgroundColor = "rgb(90, 90, 90)"
        git_icon.src = "imagens/github-16-white.png"
        footer.style.color = "rgb(999, 999, 999)"
        buscar.style.backgroundColor = "rgb(90, 90, 90)"
        buscar.style.color = "rgb(999, 999, 999)"
        buscar.style.border =  "1px solid white"
        dark_nome.style.color = "white"
        dark_nome.innerHTML = "LIGHT"
    }
    isNight = !isNight;
}
