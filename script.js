const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target); 
  
  const { dividend, divider } = Object.fromEntries(entries); 
  
  result.innerText = dividend / divider;

  if(!(dividend % divider ==0)) {
    result.innerText = Math.floor(dividend/ divider)
  }
 

  if(dividend =="" || divider ==""){
    result.innerText = "Division not performed. Both values are required in inuts. Try again"
  } 

 if(divider <0){
    result.innerText = "Division not performed.Invalid number provided.Try again" 

    console.error("Division not performed.Invalid number provided.Try again" 
    )
  } 
  
  if(isNaN(dividend) || isNaN(divider)){
   throw new Error("Something critical went wrong.Please reload the page")

    console.error("Something critical went wrong.Please reload the page")
  } 
 
}); 