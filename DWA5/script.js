const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target); 
  
  const { dividend, divider } = Object.fromEntries(entries); 
  
  result.innerText = dividend / divider;

  //------------- Making the number interger if the value is a decimal---------------//
 
  if(!(dividend % divider ==0)) {
    result.innerText = Math.floor(dividend/ divider)
  }
 
//-------------------------Checking  if one of the input is not empty string--------------------//
  if(dividend =="" || divider ==""){
    result.innerText = "Division not performed. Both values are required in inuts. Try again"
  }  

//-----------------prevent Maths operations where  divider is negative-------------------------------//
 if(divider <0){
    result.innerText = "Division not performed.Invalid number provided.Try again" 

    console.error("Division not performed.Invalid number provided.Try again" 
    )
  } 
  
//------------------Crushing the programm if one of the input is not a number-------------------//
  if(isNaN(dividend) || isNaN(divider)){ 
    document.querySelector('body').innerText =`
    Something critical went wrong.Please reload the page
    `
   throw new Error("Something critical went wrong.Please reload the page")

    
  } 
 
}); 