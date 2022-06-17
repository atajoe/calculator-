

//Importing the HTML elements and creating them into DOM objects
const numberButtons = Array.from(document.querySelectorAll('.calc-button'));
const display = document.querySelector('.display')
const equalbutton = document.querySelector('.calc-button-equal')
const operatorButtons = Array.from(document.querySelectorAll('.op-button'));
const clearbuttons = Array.from(document.querySelectorAll('.clear-button'));
const final_result_top = document.querySelector('.final-result-top')
const final_result_bottom = document.querySelector('.final-result-bottom')
let numberArray = [];
let operatorArray = [];
let numberArray2 = [];
let final_sum;

//Adding event listeners to equal button, number buttons, and operator [+,-,/,*] buttons.
equalbutton.addEventListener('click', (e)=>{
    if ((numberArray.length > 0 && operatorArray.length > 0)){
        let final_number_1 = numberArray.join("")
        let final_number_2 = numberArray2.join("")
        console.log('This is the first array ', numberArray)
        console.log('This is the second array ', numberArray2)
        console.log('Here is final number 1: ', final_number_1)
        console.log('Here is final number 2: ', final_number_2)
        console.log('This is the operatorarray ', operatorArray[0])
        switch(operatorArray[0]){
            case '+':
                final_sum = add(final_number_1, final_number_2);
                break;
            case '-':
                final_sum = subtract(final_number_1, final_number_2);
                break;
            case '×':
                final_sum = multiply(final_number_1, final_number_2);
                break;
            default:
                final_sum = divide(final_number_1, final_number_2);
                break;
        }
        console.log('Here is the final sum: ', final_sum)
        final_result_top.textContent += `${final_number_2} =`
        final_result_bottom.textContent = final_sum
        numberArray = [];
        numberArray2 = [];
        operatorArray = [];
    }
        if (numberArray2.length > 0 && operatorArray.length > 0 && numberArray.length < 1){
            final_number_2 = numberArray2.join("")
            switch(operatorArray[0]){
                case '+':
                    final_number_1 = final_sum
                    final_sum = add(final_number_1, final_number_2);
                    break;
                case '-':
                    final_number_1 = final_sum
                    final_sum = subtract(final_sum, final_number_2);
                    break;
                case '×':
                    final_sum = multiply(final_sum, final_number_2);
                    break;
                default:
                    final_sum = divide(final_sum, final_number_2);
                    break;
            }
            final_result_top.textContent += `${final_number_2} =`
            final_result_bottom.textContent = final_sum
            numberArray = [];
            numberArray2 = [];
            operatorArray = [];
            console.log('Here is the final sum 2: ', final_sum)
            final_result_bottom.textContent = final_sum     
        }  
})

numberButtons.forEach(button =>{
    button.addEventListener('click', (e) => {
        final_result_bottom.textContent += String(button.dataset.number)
        let validate = checkString()
        if (validate === true){
            numberArray2.push(button.dataset.number)
        } else {
            numberArray.push(button.dataset.number)
        }
        console.log(button.dataset.number)
        console.log('This is the first array: ', numberArray)
        console.log('This is the second array: ', numberArray2)
        if (display.textContent.includes('+') && operatorArray.length < 1){
            operatorArray.push('+')
            console.log('Operatorarray pushed the operator to list ', operatorArray)
        } else if (display.textContent.includes('-') && operatorArray.length < 1){
            operatorArray.push('-')
            console.log('Operatorarray pushed the operator to list ', operatorArray)
        } else if (display.textContent.includes('×') && operatorArray.length < 1){
            operatorArray.push('×')
            console.log('Operatorarray pushed the operator to list ', operatorArray)
        } else if (display.textContent.includes('/') && operatorArray.length < 1){
            operatorArray.push('/')
            console.log('Operatorarray pushed the operator to list ', operatorArray)
        }
        
    })
})

operatorButtons.forEach(operator => {
    operator.addEventListener('click', (e) =>{ 
        if (operator.dataset["operator"] === "clear"){
            display.textContent = ""
        } else if (operator.dataset["operator"] === "allclear"){
            display.textContent = 'All cleared!'
        } else {
            final_result_top.textContent = final_result_bottom.textContent + operator.dataset["operator"]
            final_result_bottom.textContent = ''
        }
    })
})

clearbuttons.forEach(clear => {
    clear.addEventListener('click', (e)=>{
        location.reload()
    })
})





function add(firstnum, secondnum){
    let final_value_1 = Number(firstnum)
    let final_value_2 = Number(secondnum)
    let final_value = final_value_1 + final_value_2
    return final_value
}

function subtract(firstnum, secondnum){
    let final_value_11 = Number(firstnum)
    let final_value_22 = Number(secondnum)
    let final_value2 = final_value_11 - final_value_22
    return final_value2
}

function multiply(firstnum,secondnum){
    let final_value_13 = Number(firstnum)
    let final_value_23 = Number(secondnum)
    let final_value3 = final_value_13 * final_value_23
    return final_value3
}

function divide(firstnum,secondnum){
    let final_value_1 = Number(firstnum)
    let final_value_2 = Number(secondnum)
    let final_value = final_value_1 / final_value_2
    return final_value
}












// Helper functions
// function disable_number_buttons(){
//     for (let i = 0; i < numberButtons.length; i++){
//         numberButtons[i].style["pointer-events"] = "none"
//     }
// }


// function disable_equal_button(){
//     equalbutton.style["pointer-events"] = "none"
// }

// function disable_operators(){
//     for (let i = 0; i < operatorButtons.length; i++){
//         operatorButtons[i].style["pointer-events"] = "none";
//     }
// }

function enableBtn(){
   clearbuttons.forEach(clear => {
       clear.addEventListener('click', (e) => {
           location.reload()
       })
       
   })
}


function checkString(){
    const operators = ["+", "-", "×", "/"]
    const test_string = operators.some(operator => final_result_top.textContent.includes(operator))
    if (test_string === true){
        return true
    } else{
        return false
    }
}