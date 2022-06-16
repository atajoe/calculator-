

//Importing the HTML elements and creating them into DOM objects
const numberButtons = Array.from(document.querySelectorAll('.calc-button'));
const display = document.querySelector('.display')
const equalbutton = document.querySelector('.calc-button-equal')
const operatorButtons = Array.from(document.querySelectorAll('.op-button'));

const numberArray = [];
const operatorArray = [];


//Adding event listeners to equal button, number buttons, and operator [+,-,/,*] buttons.
equalbutton.addEventListener('click', (e)=>{
    console.log(equalbutton.dataset)
    display.textContent = String(equalbutton.dataset["equals"])
})

numberButtons.forEach(button =>{
    button.addEventListener('click', (e) => {
        display.textContent += String(button.dataset["number"])
        // if (display.textContent.includes('+')){
        //     operatorArray.push('+')
        //     console.log('This is the operatorArray ', operatorArray)
        // }
        numberArray.push(button.dataset["number"])
        console.log(display.textContent)
        console.log('This is the number array now ', numberArray)
          
    })
})

operatorButtons.forEach(operator => {
    operator.addEventListener('click', (e) =>{
        
        if (operator.dataset["operator"] === "clear"){
            display.textContent = ""
        } else if (operator.dataset["operator"] === "allclear"){
            display.textContent = 'All cleared!'
        } else if (operator.dataset["operator"] === '+') {
            operatorArray.push('+')
            console.log('This is the operatorArray from operatorButtons', operatorArray)
        } else{
            console.log('idk lol')
        }

        
        
        
    })
})





function add(firstnum, secondnum){
    return firstnum + secondnum
}

function subtract(firstnum, secondnum){
    return firstnum - secondnum
}

function multiply(firstnum,secondnum){
    return firstnum * secondnum
}

function divide(firstnum,secondnum){
    return firstnum/secondnum
}


function operate(operator,firstnum,secondnum){
    if (operator === '+'){
        return add(firstnum,secondnum)
    }else if (operator === '-'){
        return subtract(firstnum,secondnum)
    } else if (operator === '/'){
        return divide(firstnum,secondnum)
    } else{
        return multiply(firstnum,secondnum)
    }
}


function calculator(){
    let userInput = prompt('Type add/subtract/multiply/divide for operations')
    switch (userInput){
        case 'add':
            return add()
        case 'subtract':
            return subtract()
        case 'multiply':
            return multiply()
        case 'divide':
            return divide()
        default:
            alert('Please select a proper operation')
            return calculator()
    }
}



// console.log(calculator())
