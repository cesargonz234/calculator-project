let currentValue = '';
let previousValue = '';
const calculator = document.querySelector('#calculator')

let nums = document.querySelectorAll('.number')
let operator = document.querySelectorAll('.operator')
let clear = document.querySelector('.clear');
let equal = document.querySelector('.equal')
let decimal = document.querySelector('.decimal');

let current = document.querySelector('#current')
let previous = document.querySelector('#previous')

nums.forEach((num) => num.addEventListener('click', function(e){
    handleNumber(e.target.textContent)
    current.textContent = currentValue;
}))

operator.forEach((op) => op.addEventListener('click', function(e){
    handleOperator(e.target.textContent)
    previous.textContent = previousValue + " " + operator;
    current.textContent = currentValue;
}))

clear.addEventListener('click', function(){
    previousValue = '';
    currentValue = '';
    operator = '';
    previous.textContent = currentValue;
    current.textContent = currentValue;

})

equal.addEventListener('click', function(){
if(currentValue != '' && previousValue != ''){
    calculate()
    previous.textContent = ''
    current.textContent = previousValue;
    if(previousValue.length <=5){
        current.textContent = previousValue;
    }else{
        current.textContent = previousValue.slice(0,5) + '...'
    }
}  
})

decimal.addEventListener('click', function(){
addDecimal()
console.log('jello')
})

function handleNumber(num){
    if  (currentValue.length <= 5){
    currentValue += num
    }
}

 function handleOperator(op){
operator = op;
previousValue = currentValue;
currentValue = '';
 }

 function calculate(){
    previousValue = Number(previousValue)
    currentValue = Number(currentValue)
     if (operator === '+'){
        previousValue += currentValue;
     }else if (operator === '-'){
        previousValue -= currentValue;
     }else if (operator === "x"){
        previousValue *= currentValue;
     }else if (operator === '/'){
        previousValue /= currentValue;
     }
     
     previousValue = roundNumber(previousValue)
     previousValue = previousValue.toString()
     currentValue = previousValue.toString()
     
 }

 function roundNumber(num){
    return Math.round(num * 1000) / 1000;

 }

 function addDecimal(){
    if (!currentValue.includes('.')){
        currentValue += '.';
    }
 }