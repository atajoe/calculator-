"use strict";

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


numberButtons.forEach(number => {
    number.addEventListener('click', (e)=>{
        addDisplay(number.dataset.number)
        let deciding_factor = checkArray()
        deciding_factor === true ? numberArray2.push(number.dataset.number) : numberArray.push(number.dataset.number) 
    })
})

operatorButtons.forEach(operator => {
    operator.addEventListener('click', (e) => {
        if (operatorArray.length < 1){
            operatorArray.push(operator.dataset.operator)
            addDisplay(operator.dataset.operator)
        }
    })
})


clearbuttons.forEach(clear => {
    clear.addEventListener('click', (e) =>{
        final_result_bottom.innerHTML = ''
        final_result_top.innerHTML = ''
        clearArrays()
    })
})

equalbutton.addEventListener('click', (e) => {
    checkCalculation(numberArray,numberArray2)
})




const addDisplay = (data) =>{
    final_result_bottom.innerHTML += (data)
    if(checkString() === true){
        final_result_top.innerHTML += final_result_bottom.innerHTML
        final_result_bottom.innerHTML = ''
        return;
    }
   return;
}




function checkArray(){
    if (numberArray.length > 0 && operatorArray.length > 0){
        return true;
    } 
    return false;
}



function checkString(){
    const operators = ["+", "-", "×", "/"]
    const test_string = operators.some(operator => final_result_bottom.innerHTML.includes(operator))
    if (test_string === true){
        return true
    } else{
        return false
    }
}


const OperatorArrays = (() => {
    
 
    let first_number;
    let second_number;
 
    function addArrays(first_number,second_number){
        let final_sum = (first_number + second_number);
        final_result_bottom.innerHTML = final_sum
        final_result_top.innerHTML = ''
        clearArrays()
        addfinalsumtoArray(final_sum)
        return;
    }

    function subtractArrays(first_number,second_number){
        let final_sum = (first_number - second_number);
        final_result_bottom.innerHTML = final_sum
        final_result_top.innerHTML = ''
        clearArrays()
        addfinalsumtoArray(final_sum)
        return final_sum;
    }

    function multiplyArrays(first_number,second_number){
        let final_sum = (first_number * second_number);
        final_result_bottom.innerHTML = final_sum
        final_result_top.innerHTML = ''
        clearArrays()
        addfinalsumtoArray(final_sum)
        return final_sum;
    }

    function divideArrays(first_number,second_number){
        let final_sum = (first_number / second_number);
        final_result_bottom.innerHTML = final_sum
        final_result_top.innerHTML = ''
        clearArrays()
        addfinalsumtoArray(final_sum)
        return final_sum;
    }

    return {first_number, second_number, addArrays, subtractArrays, multiplyArrays, divideArrays};
})();







function checkCalculation (numberArray, numberArray2) {
    if (operatorArray.length < 1 || numberArray2.length < 1){
        return;
    }
    let first_number = parseInt(numberArray.join(""))
    let second_number = parseInt(numberArray2.join(""))
    OperatorArrays.first_number = first_number
    OperatorArrays.second_number = second_number
    return checkOperation(operatorArray);
} 

const checkOperation = (operatorArray) => {
    if (operatorArray[0] == '+'){
        return OperatorArrays.addArrays(OperatorArrays.first_number, OperatorArrays.second_number)
    }
    if (operatorArray[0] == '-'){
        return OperatorArrays.subtractArrays(OperatorArrays.first_number, OperatorArrays.second_number)
    }
    if (operatorArray[0] == '×'){
        return OperatorArrays.multiplyArrays(OperatorArrays.first_number, OperatorArrays.second_number)
    }
    if (operatorArray[0] == '/'){
        return OperatorArrays.divideArrays(OperatorArrays.first_number, OperatorArrays.second_number)
    }
}

const clearArrays =  () => {
    numberArray = [];
    numberArray2 = [];
    operatorArray = [];
    return;
}

const addfinalsumtoArray = (final_sum) =>{
    numberArray.push(final_sum)
    return numberArray
}




