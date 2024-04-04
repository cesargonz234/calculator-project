const calculator = document.querySelector('#calculator')
const keys = document.querySelector('#calculator_keys')
const display = document.querySelector('#calculator_text')
keys.addEventListener('click', event => {
    if(!event.target.closest('button')) return

    const key = event.target
    const keyValue = key.textContent
    const displayValue = display.textContent
    if (key.classList.contains('number')){
    if (displayValue == '0'){
        display.textContent = keyValue
    }
    else{
        display.textContent = displayValue + 
        keyValue
    }
}
    if(key.classList.contains('operator')){
        console.log(key)
    }
})
 