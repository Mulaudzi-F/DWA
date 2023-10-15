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
 
}); class BookPreview extends HTMLElement {
  constructor() {
    super();

    // Create a shadow root
    this.attachShadow({ mode: 'open' });

    // Define the HTML template for the book preview
    this.shadowRoot.innerHTML = `
      <style>
        /* Define styles for the shadow DOM */
        /* You can customize the styles here */
      </style>
      <div class="preview">
        <img class="preview__image" src="" alt="Book Image" />
        <div class="preview__info">
          <h3 class="preview__title"></h3>
          <div class="preview__author"></div>
        </div>
      </div>
    `;
  }

  connectedCallback() {
    // Extract data attributes from the custom element
    const author = this.getAttribute('author');
    const title = this.getAttribute('title');
    const image = this.getAttribute('image');

    // Update the content in the shadow DOM
    this.shadowRoot.querySelector('.preview__image').src = image;
    this.shadowRoot.querySelector('.preview__title').textContent = title;
    this.shadowRoot.querySelector('.preview__author').textContent = author;
  }
}

// Define the custom element
customElements.define('book-preview', BookPreview);

<book-preview author="Author Name" title="Book Title" image="book-image.jpg"></book-preview>
