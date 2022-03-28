let on = false
let cont = 0
let interval

function loop() {

    cont += 10

    document.getElementById('clock').innerHTML = 'já passaram ' + cont/1000 + ' segundos'
}

function play() {

    if (on == true) {

        let button = document.querySelector('.btn')
        button.className = 'btn btn-success'
        button.innerHTML = 'Play'
        clearInterval(interval)
        cont = 0
        on = false

    } else {

        let button = document.querySelector('.btn')
        button.className = 'btn btn-danger'
        button.innerHTML = 'Stop'
        interval = setInterval(loop, 10)
        on = true
    }
}