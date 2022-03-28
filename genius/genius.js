let ini = 0

function test(){

  document.getElementById('div' + ini).style.backgroundColor = 'white'

  ini = (ini+1)%4
}

setInterval (test, 1000)