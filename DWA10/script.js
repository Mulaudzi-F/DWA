const MAX_NUMBER = 10
const MIN_NUMBER = -5
// add values by certain amount 
// const STEP_AMOUNT = 5;

const number = document.querySelector('[data-key="number"]')
const subtract = document.querySelector('[data-key="subtract"]')
const add = document.querySelector('[data-key="add"]') 
const reset= document.querySelector('[data-key="reset"]')

// parseInt counts for every click number.value eirther more or less
// if disabled is true disable fucntion will display from css style
// SubtractHandle holds newValue data
const subtractHandler = () => {
    const newValue = parseInt(number.value) - 1  //replace value with STEP_AMOUNT to add by 5
    number.value = newValue;

    if (add.disabled === true){
        add.disabled = false 
    }

    if (newValue <= MIN_NUMBER){
        subtract.disabled = true 
    }
}
// addHandle holds newValue data
const addHandler = () => {
    const newValue = parseInt(number.value) + 1 //replace value with STEP_AMOUNT to add by 5
    number.value = newValue

    if (subtract.disabled === true){ 
        subtract.disabled = false 
    }

    if (newValue >= MAX_NUMBER){
        add.disabled = true 
    }
}


subtract.addEventListener('click', subtractHandler)
add.addEventListener('click', addHandler) 

reset.addEventListener('click',() =>{

    const alert = document.querySelector('sl-alert') 
    if(number.value === 10){
    number.value = 0;
    alert.style.display = "Block"
    add.disabled = false;
    }
   
  
   setTimeout(() => {
    alert.style.display = "none"
   }, 2000);
   
} )