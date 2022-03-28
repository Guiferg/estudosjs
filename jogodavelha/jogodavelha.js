let fig = 'x'
let matriz = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

function clean_matriz () {
    fig = 'x'
    for (let i = 0; i <= 2; i++)
        for(let j = 0; j <= 2; j++){
            matriz[i][j] = 0;
            document.getElementById('box' + (i+1) + (j+1)).innerHTML = ''
        }
}

function verification() {

    let tot = 0

    for (let i = 0; i <= 2; i++){

        if (matriz[i][0] != 0 && matriz[i][0] == matriz[i][1] && matriz[i][1] == matriz[i][2]) {
            clean_matriz()
        } else if (matriz[0][i] != 0 && matriz[0][i] == matriz[1][i] && matriz[1][i] == matriz[2][i]) {
            clean_matriz()
        } else if(matriz[0][i] != 0 && matriz[1][i] != 0 && matriz[2][i] != 0){
            tot++
        }
    }
    if (matriz[0][2] != 0 && matriz[0][2] == matriz[1][1] && matriz[1][1] == matriz[2][0]) {
        clean_matriz()
    } else if (matriz[2][2] != 0 && matriz[2][2] == matriz[1][1] && matriz[1][1] == matriz[0][0]) {
        clean_matriz()
    } else if(tot == 3){
        clean_matriz()
    }
    return
}

function game (boxr, boxc) {
    if (matriz[boxr-1][boxc-1] == 0) {
        if(fig == 'x'){
            matriz[boxr-1][boxc-1] = 1
            document.getElementById('box' + boxr + boxc).innerHTML = '<img src="x.jpg">'
            fig = 'o'
        } else {
            matriz[boxr-1][boxc-1] = 2
            document.getElementById('box' + boxr + boxc).innerHTML = '<img src="o.jpg">'
            fig = 'x'
        }
        verification()
    }
}