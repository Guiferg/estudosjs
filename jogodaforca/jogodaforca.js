let div = document.getElementById("imagem")

let image = document.createElement("img")
image.classList.add("largura-200")
image.src = "images/jogodaforca_7.png"

div.appendChild(image)

let tot, tentativas, ini, letras_escritas, palavra

let input_ = document.getElementById('texto');

function run() {
  palavra = prompt("Escolha uma palavra ou frase para jogar:")

  tot = 0
  tentativas = 0
  ini = []
  letras_escritas = new Set();

  for (let i = 0; i < palavra.length; i++) {
    if (palavra[i] != ' ') {
      ini[i] = '_'
    } else {
      ini[i] = ' '
    }
  }
}

input_.addEventListener('keyup', function () {
  let write = input_.value
  var at = write[write.length - 1]

  if (letras_escritas.has(at) == false) {

    letras_escritas.add(at)

    let ind = false

    for (let i = 0; i < palavra.length; i++) {
      if (palavra[i] == at && palavra[i] != ' ') {
        ini[i] = at
        ind = true
      }
    }

    if(!ind) {
      tentativas++
      if(tentativas < 7)
        image.src = "images/jogodaforca_"+(7 -tentativas)+".png"
    }

    if(tentativas == 7) {
      document.getElementById("result").innerHTML = "VOCÊ PERDEU"
    } else {
      document.getElementById("result").innerHTML = ini.join([separador = ' '])
    }

  }
});

run();