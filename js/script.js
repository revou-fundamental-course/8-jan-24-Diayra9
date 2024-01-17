const inputField = document.getElementById("squareSide")
const countBotton = document.getElementById("countButton")

inputField.addEventListener('input', function() {
    const inputValue = inputField.value.trim()
    if(validateInput(inputValue)) {
        countBotton.disabled = false
    } else {
        countBotton.disabled = true
    }
})

function validateInput(input) {
    const integerRegex = /^-?\d+$/;
    return integerRegex.test(input)
}