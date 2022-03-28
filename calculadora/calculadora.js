
let result = '', value = '', opr_actual = ''

function writenum(btn_value) {
	if (opr_actual == 'equal' || opr_actual == '=') {
		opr_actual = '';
		value = '';
		result = '';
	}
	value += String(btn_value)
	document.getElementById("box").innerHTML = result + opr_actual + value
}

function writeoperation(operation) {

	if (operation == 'AC') {
		result = ''
		value = ''
		opr_actual = 'equal'
		document.getElementById("box").innerHTML = ''
		return
	}

	if (result != '') {

		if (value == '')
			value = '0'

		if (opr_actual == '+') {
			result = String(parseFloat(value) + parseFloat(result))
			document.getElementById("box").innerHTML = ''
		} else if (opr_actual == '-') {
			result = String(parseFloat(result) - parseFloat(value))
			document.getElementById("box").innerHTML = ''
		} else if (opr_actual == '/') {
			result = String(parseFloat(result) / parseFloat(value))
			document.getElementById("box").innerHTML = ''
		} else if (opr_actual == '*') {
			result = String(parseFloat(result) * parseFloat(value))
			document.getElementById("box").innerHTML = ''
		}

		if (operation == '=') {
			document.getElementById("box").innerHTML = result
			opr_actual = 'equal';
			operation = 'equal';
		} else {
			document.getElementById("box").innerHTML = result + operation
		}

	} else {
		result = value

		if (operation == '=') {
			opr_actual = 'equal';
			document.getElementById("box").innerHTML = result
		} else {
			document.getElementById("box").innerHTML = result + operation
		}
	}

	opr_actual = operation
	value = ''

}