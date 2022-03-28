let submit = document.getElementById("submit-assignment")
let input_assignment = document.getElementById("assignment")
let result = document.getElementById("result")
let cont_id = 1

submit.addEventListener("click", function () {

    let btn_remove = document.createElement('button')
    btn_remove.classList.add('btn')
    btn_remove.classList.add('btn-info')
    btn_remove.classList.add('btn-sm')
    btn_remove.innerHTML = 'Concluída'
    btn_remove.setAttribute("id", cont_id + '_')
    btn_remove.setAttribute("onclick", "remove(" + cont_id + ")")

    let assignment = document.createElement("div")
    assignment.setAttribute("id", cont_id)
    assignment.innerHTML = input_assignment.value

    cont_id ++

    result.appendChild(assignment)
    result.appendChild(btn_remove)

    input_assignment.value = ''
})

function remove(id) {
    let btn = document.getElementById(id + '_')
    let assignment = document.getElementById(id)
    result.removeChild(btn)
    result.removeChild(assignment)
}