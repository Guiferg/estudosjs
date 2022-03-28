cores = ['blue', 'green', 'black', 'pink', 'red', 'orange', 'violet', 'gray']

let set = new Set()
let arr = []
let color_div = []
let tabela = []
let ind = 0
let pontos_jogador = []
let jogador = 0;
pontos_jogador[0] = 0;
pontos_jogador[1] = 0;


for (let i = 0; i < 16; i++) {
  arr[i] = parseInt(i/2)
}

function start() {
  let tot = 0
  while(tot < 16){
    ale_number = (Math.trunc((Math.random()) * 1000)) % 16
    at = arr[ale_number]
    if( ! set.has(ale_number) ){
      set.add(ale_number)
      color_div[tot+1] = cores[at]
      //document.getElementById('card' + (tot+1)).style.backgroundColor = cores[at]
      tot++;
    }
  }
}

function clickcard(card) {
  if( tabela[card] == null ){
    if(ind == 0){
      ind = card
      document.getElementById('card' + (card)).style.backgroundColor = color_div[card]
    } else {

      if(color_div[ind] == color_div[card] && ind != card){
        document.getElementById('card' + (card)).style.backgroundColor = color_div[card]
        document.getElementById('card' + (ind)).style.backgroundColor = color_div[ind]
        tabela[card] = 1
        tabela[ind] = 1
        pontos_jogador[jogador] ++
        document.getElementById('result' + (jogador +1)).innerHTML = pontos_jogador[jogador]
        jogador++;
      } else {
        document.getElementById('card' + (card)).style.backgroundColor = color_div[card]
        const ind_ = ind
        setTimeout( function() {
          console.log(document.getElementById('card' + (card)).style.backgroundColor)
          document.getElementById('card' + (card)).style.backgroundColor = '#ffffff'
          document.getElementById('card' + (ind_)).style.backgroundColor = '#ffffff'
        }, 1400)
      }

      jogador++
      jogador %= 2
      ind = 0

      document.getElementById('result').innerHTML = jogador+1
    }
  }
}

start()