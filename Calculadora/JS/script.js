// Function to add the numbers on the result box
function insert(char) {
    let result = document.getElementById('result')
    let currentResult = result.innerHTML

    if (currentResult.length < 16) {
        result.innerHTML = currentResult + char
    }
}

// Function to clean the result box
function cleanResult() {
    let result = document.getElementById('result')
    let btClean = document.getElementById('btclean')

    result.innerHTML = ""
}


function deleteLast() {
    let result = document.getElementById('result').innerHTML

    document.getElementById('result').innerHTML = result.substring(0, result.length - 1)

}


function toCalc() {
    let result = document.getElementById('result').innerHTML
    let docToCalc = result.replace(/,/g, '.')
    let xToCalc = docToCalc.replace(/x/g, '*')


    if (xToCalc) {
        document.getElementById('result').innerHTML = eval(xToCalc)
    }

}



// To insert buttons
var buttonIds = ['btN0', 'btN1', 'btN2', 'btN3', 'btN4', 'btN5', 'btN6', 'btN7', 'btN8', 'btN9', 'btPlus', 'btMinus', 'btMultiply', 'btDivision', 'btDot']


buttonIds.forEach(function (id) {
    document.getElementById(id).addEventListener('click', function () {

        insert(this.textContent)
    })
})



document.getElementById('btClean').addEventListener('click', function () {
    cleanResult()
})

document.getElementById('btDelete').addEventListener('click', function () {
    deleteLast()
})

document.getElementById('btEqual').addEventListener('click', function () {
    toCalc()
})