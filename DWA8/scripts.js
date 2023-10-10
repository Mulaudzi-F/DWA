import {BOOKS_PER_PAGE, genres, books, authors } from "./data.js";

const matches = books

let  page = 1;

/**
 *  This function  return a new button  element that contains cgildren element
 * that creates a preview of portion of books 
 *
 * 
 */

// function createPreview({author, id, image, title}) {
//     let element = document.createElement('button');
//     element.classList = 'preview';
//     element.setAttribute('data-preview', id) 
//     element.innerHTML = /* html */ `
//     <img
//      class='preview__image'
//     src="${image}"
//      />
     
//      <div class="preview__info">
//      <h3 class="preview__title">${title}</h3>
//      <div class="preview__author">${authors[author]}</div>
//      </div>
//      `;

//      return element

// }
// //--This Is fragment of the first 36 books that will appear on the screen--//
//  const fragment1 = document.createDocumentFragment() 
//  const extracted = books.slice(0, 36) 
//  for (const { author, title, image, id } of extracted) {
    
//    const preview = createPreview({author, id, image, title})
    
  
//    fragment1.appendChild(preview) 
   
//  }

// Module.dataListItem.appendChild(fragment1)

// let showMore = page * BOOKS_PER_PAGE

// //Show more books button
// Module.dataListBtn.addEventListener('click', () =>{
//     const remaining = matches.slice(showMore, matches.length) 
    
//     const fragment = document.createDocumentFragment()
//     for(const {author, title, image, id} of remaining){
//         const  preview = createPreview({author, id, image, title});
//         fragment.appendChild(preview)
//     }
//     Module.dataListItem.appendChild(fragment) 
//     showMore += remaining.length;
//     Module.dataListBtn.disabled = !(matches.length - showMore > 0)
// });

// // Responsible for show more title

// Module.dataListBtn.innerHTML  = /* html */ `
//  <span>show More(
// <span class='list__remaining'>${matches.length - showMore > 0 ? matches.length - showMore : 0}</span>)
// `

// //Handle preview click

// Module.dataListItem.addEventListener('click', (event)=>{
//     const pathArray = Array.from(event.path || event.composedPath());
    
//     let active;
//     for (const node of pathArray){ 
        
//         if(active)break;
//         const previewId = node.dataset?.preview;
        
//        for (const singleBook of books) { 
           
//             if(singleBook.id === previewId){
//                 active = singleBook;
                
//                 break
//             }
//         }
//     }
 
//     if(!active) {return}
      
//         Module.listActive.open = true;
//         Module.listImg.setAttribute('src', active.image);
//         Module.listBlur.style.backgroundImage = `url('${active.image}')`
//         Module.listTitle.textContent = active.title;
//         Module.listSubtitle.textContent = `${authors[active.author]} (${new Date(active.published).getFullYear()})`
//         Module.listDescription.textContent = active.description
    
//  })


// // List Close 
// Module.listCloseBtn.addEventListener('click', () =>{
//     Module.listActive.open = false
// })

// // Search modal show 

// Module.searchHeaderBtn.addEventListener('click', () =>{
//     Module.searchOverlay.open = true;
//     //data-search-title.focus()
// }) 

// // SEARCH BUTTON

// // Search specific book

// Module.searchForm.addEventListener('submit', (event) =>{
//     event.preventDefault();


//     // hide book list
//     Module.dataListItem.style.display = 'none';

//      // clear message area
//     Module.listMessage.innerHTML = '';
      
//     //get form data
    
//     const formData = new FormData(event.target);
//     const title1 = formData.get('title');
//     const genre1 = formData.get('genre');
//     const author1 = formData.get('author'); 
    

//     // Array to store filtered books
//     const filteredBooks = []

//     // looping through  all books
//    for(let i = 0; i < books.length; i++) {
//     const book = books[i] 

//     // if genre and author are not selected, filter by title only
//     if (genre1 === 'any' && author1 ==='any') {
//         if(book.title.toLowerCase().includes(title1.toLowerCase())) {
//             filteredBooks.push(book) 
//         }
//     } 
 
//       // if genre is not selected, filter by author and title

//    if(genre1 ==='any'){
//     if(book.title.toLowerCase().includes(title1.toLowerCase()) && book.author === author1){
//         filteredBooks.push(book);
//     }
//    }

//     // If title is not enterd, filter by author and genre

//     if(title1 === '') {
//         if (book.author === author1 && book.genres.includes(genre1)){
//             filteredBooks.push(book);
//         }
//     }

//     // If neither title nor author are selected, filter by genre only 
//   if (title1 ==='' && author1 ==='any') {
//     if(book.genres.includes(genre1)) {
//         filteredBooks.push(book)
//     }
//   } 
//      // Displaying message if no books matchs filters

//      if(filteredBooks.length > 0) {
//         Module.listMessage.textContent = '';
//         Module.dataListBtn.disabled = true;
    
//        }else{
//         Module.listMessage.textContent = 'No results found. Your filters might be to narrow.';
//         Module.dataListBtn.disabled = true;
//        }


//    }
  
//        //display filtered books
//        Module.listMessage.style.display = 'block'  
    

//        //create  fragment to hold filtered books

//     const fragment2 = document.createDocumentFragment();
//     for (const {author, image, title, id, description, published} of filteredBooks) {
//         const preview = document.createElement('button');

//         preview.className = 'preview';
//         preview.dataset.id = id;
//         preview.dataset.title = title;
//         preview.dataset.image = image;
//         preview.dataset.subtitle = `${authors[author]} (${new Date(published).getFullYear()})`
//         preview.dataset.description = description;
//         preview.dataset.genre = genres;

//         //create preview button with book information

//         preview.innerHTML = /*html */
//         `
//         <div>
//             <img
//             class='preview__image'
//          src="${image}"
//             />
//         </div>
        
//         <div class="preview__info">
//         <dt class="preview__title">${title}</dt>
//         <div class="preview__author">${authors[author]}</div>
//         </div>
//         `;

//         //append preview button to fragment
//         fragment2.appendChild(preview);
//     }
//     // add filtered books to message area;

//     const booklist2 = Module.listMessage;
//     booklist2.appendChild(fragment2);
//     Module.searchForm.reset();
//     Module.searchOverlay.close();
   
// })
// // Drop down for genres
// const allGenresOption = document.createElement('option');
// allGenresOption.value ='any';
// allGenresOption.innerText = 'All Genres';
// Module.searchGenre.appendChild(allGenresOption);


// for (const [id, names] of Object.entries(genres)) {
//     const element = document.createElement('option');
//     element.value = id;
//     element.innerText = names;
//     Module.searchGenre.appendChild(element);
// }

// // Drop Down for Authors

// const allAuthorsOption = document.createElement('option');
// allAuthorsOption.value = 'any';
// allAuthorsOption.innerText = 'All Authors';

// Module.searchAuthor.appendChild(allAuthorsOption);
// for (const [id, names] of Object.entries(authors)) {
//     const element = document.createElement('option');
//     element.value = id;
//     element.innerText = names;
//     Module.searchAuthor.appendChild(element)
// }


// //closes the preview overlay

// Module.listCloseBtn.addEventListener('click', () =>{
//     Module.listActive.open = false
// });

// //Theme mode
// //Get the settings button and add a click event listener
// Module.settingHeaderBtn.addEventListener('click', (event) =>{
// event.preventDefault();

// //Show the theme overlay dialog
// Module.settingOverlay.show();

// Module.settingCancelBtn.addEventListener('click', () =>{
//     Module.settingOverlay.close()
// })

// }) 

// //******   Defines the color values for the day and night themes  
// //
// const css ={
// day:{
//     dark: '10, 10, 20',
//     light: '255, 255, 255',
// },

// night:{
//     dark: '255, 255, 255',
//     light: '10, 10, 20',
// }

// } 


// Module.settingForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const theme = Module.settingTheme.value;
//     document.documentElement.style.setProperty('--color-dark', css[theme].dark);
//     document.documentElement.style.setProperty('--color-light', css[theme].light);
//     Module.settingOverlay.close()
//   });
  


////////////////******************************New javaScript codes**************************************/////


/**
 * 
 * @returns  fragment to hold books
 */
const fragment = () =>{
    const booksfragment = document.createDocumentFragment() 
 
    return booksfragment
 
 }
 
 /**
  * 
  * Create a preview button for a book.
  * @param {Object} book - Details of the book
  * @param {string} book.author - Name of author
  * @param {string} book.id - The book's unique Id
  * @param {string} book.image - Url of the book cover image
  * @param {string} book.title- book's title
  * 
  * @returns {ButtonElement} - button containing all details of specific book
  */
 
 const createPreview =({author, id, image, title}) =>{
     const element = document.createElement('button')
     element.classList = 'preview'
     element.setAttribute('data-preview', id)
 
     element.innerHTML = `
         <img
             class="preview__image"
             src="${image}"
         />
         
         <div class="preview__info">
             <h3 class="preview__title">${title}</h3>
             <div class="preview__author">${authors[author]}</div>
         </div>
     ` 
     return element
 }
 
 
 /**
  * Loop through books portion and create preview buttons
  * 
  * @param {Array} booksSlice- Portion of books to appear on the fragment
  * @returns {fragment}- fragment with a specific portion of books
  * 
  */
 
 const sliceBooks =(booksSlice)=>{ 
    const fragment1 = fragment()
 for (const { author, id, image, title } of booksSlice) {
    
     const preview = createPreview({author,id,image,title}) 
     fragment1.appendChild(preview)
 } 
  return fragment1
 
 } 
 
 sliceBooks(matches.slice(0, BOOKS_PER_PAGE)) 
 
 /**
  * Fragment that contains all available options of either  Authors or genres
  * 
  * @param {String} Cartegory--filtering option, could either be Authors or genres
  * @returns {DocumentFragment}
  */
 
 const SearchOptions = (Cartegory) =>{
    const filterOption = document.createDocumentFragment()
 
     const optionElement = document.createElement('option')
     optionElement.value = 'any'
     optionElement.innerText = `All ${Cartegory}`
     filterOption.appendChild(optionElement) 
             
             return filterOption
     }
 
 /**
  * Loops over set of data about that specific category
  * @param {string} optionCategory- Accept the parameter that could either be auth0r or genres
  *  and create a options about the category
  */
 
 const appendingMoreOptions = (optionCategory) =>{
     
 for (const [id, name] of Object.entries(optionCategory)) {
     const element = document.createElement('option') 
     element.value = id
     element.innerText = name
    const filterCategory = SearchOptions(`"${optionCategory}"`)
     filterCategory.appendChild(element) 
     console.log(filterCategory)
     //document.querySelector('[data-search-genres]').appendChild(filterCategory)
 }
 }
 
 /**
  * Applies night mode styles to the web page.
  * This function sets the '--color-dark' and '--color-light' CSS variables
  * to appropriate values for night mode.
  */
 const nightMode = () =>{
     document.documentElement.style.setProperty('--color-dark', '255, 255, 255');
     document.documentElement.style.setProperty('--color-light', '10, 10, 20');
 }
 
 
 /**
  * Applies day mode styles to the web page.
  * This function sets the '--color-dark' and '--color-light' CSS variables
  * to appropriate values for day mode.
  */
 
 const dayMode = () =>{
     document.documentElement.style.setProperty('--color-dark', '10, 10, 20');
     document.documentElement.style.setProperty('--color-light', '255, 255, 255');
 } 
 
 
 /**
  * Handles the click event when canceling the search.
  * Closes the search overlay.
  * @returns {boolean} - Returns `false` to prevent default behavior of the click event.
  */
 
 const handleSearchCancel = () => {
     
    return document.querySelector("[data-search-overlay]").open = false
 }; 
 
 
 /**
  * Handles the click event when canceling the settings.
  * Closes the settings overlay.
  * @returns {boolean} - Returns `false` to prevent default behavior of the click event.
  */
 const handleSettingsCancel = () => {
    return document.querySelector("[data-settings-overlay]").open = false
 };
 
 appendingMoreOptions(genres) 
 appendingMoreOptions(authors) 
 
 

 //Check and set the initial theme based on system preference
 if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
     document.querySelector("[data-settings-theme]").value = 'night'
     nightMode()
 } else {
     document.querySelector("[data-settings-theme]").value = 'day'
    dayMode()
 }
 
 document.querySelector("[data-list-button]").innerText = `Show more (${books.length - BOOKS_PER_PAGE})`
 document.querySelector("[data-list-button]").disabled = (matches.length - (page * BOOKS_PER_PAGE)) > 0
 
 document.querySelector("[data-list-button]").innerHTML = `
     <span>Show more</span>
     <span class="list__remaining"> (${(matches.length - (page * BOOKS_PER_PAGE)) > 0 ? (matches.length - (page * BOOKS_PER_PAGE)) : 0})</span>
 `
 
 /**
  * Handles the click event when canceling the search
  */
 document.querySelector("[data-search-cancel]").addEventListener('click', handleSearchCancel)
 
 /**
  * Handles the click event when canceling the settings
  */
 document.querySelector("[data-settings-cancel]").addEventListener('click', handleSettingsCancel)
 
 /**
  * Handles the click event when initiating a search
  */
 document.querySelector("[data-header-search]").addEventListener('click', () => {
    document.querySelector("[data-search-overlay]").open = true 
    document.querySelector("[data-search-title]").focus()
 })
 
 /**
  *  Handles the click event when opening settings
  */
 document.querySelector("[data-header-settings]").addEventListener('click', () => {
    document.querySelector("[data-settings-overlay]").open = true 
 })
 
 document.querySelector("[data-list-close]").addEventListener('click', () => {
    document.querySelector("[data-list-active]").open = false
 })
 
 /**
  * Handles the form submission for changing the theme 
  * 
  *  @param {event} event - The form submission event
  */
 document.querySelector("[data-settings-form]").addEventListener('submit', (event) => {
     event.preventDefault()
     const formData = new FormData(event.target)
     const { theme } = Object.fromEntries(formData)
 
     if (theme === 'night') {
        nightMode()
     } else {
        dayMode()
     }
     
     handleSettingsCancel()
 })
 
 /**
  * Handles the form submission for filtering books.
  * 
  * @param {Event} event - The form submission for filtering books
  * 
  */
 document.querySelector("[data-search-form").addEventListener('submit', (event) => {
     event.preventDefault()
     const formData = new FormData(event.target)
     const filters = Object.fromEntries(formData)
     const result = []
 
     for (const book of books) {
         let genreMatch = filters.genre === 'any'
 
         for (const singleGenre of book.genres) {
             if (genreMatch) break;
             if (singleGenre === filters.genre) { genreMatch = true }
         }
 
         if (
             (filters.title.trim() === '' || book.title.toLowerCase().includes(filters.title.toLowerCase())) && 
             (filters.author === 'any' || book.author === filters.author) && 
             genreMatch
         ) {
             result.push(book)
         }
     }
 
     page = 1;
     matches = result
 
     if (result.length < 1) {
         document.querySelector("[data-list-message").classList.add('list__message_show')
     } else {
         document.querySelector("[data-list-message").classList.remove('list__message_show')
     }
 
     document.querySelector("[data-list-items]").innerHTML = ''
     
     fragment()
     sliceBooks(result.slice(0, BOOKS_PER_PAGE))
 
     document.querySelector("[data-settings-overlay]").appendChild(newItems)
     document.querySelector("[data-list-button]").disabled = (matches.length - (page * BOOKS_PER_PAGE)) < 1
 
     document.querySelector("[data-list-button]").innerHTML = `
         <span>Show more</span>
         <span class="list__remaining"> (${(matches.length - (page * BOOKS_PER_PAGE)) > 0 ? (matches.length - (page * BOOKS_PER_PAGE)) : 0})</span>
     `
 
     window.scrollTo({top: 0, behavior: 'smooth'});
    handleSearchCancel()
 })
 
 document.querySelector("[data-list-button]").addEventListener('click', () => {
     
 fragment()
 
 booksSlice(matches.slice(page * BOOKS_PER_PAGE, (page + 1) * BOOKS_PER_PAGE)) 
 
 document.querySelector("[data-list-items]").appendChild(fragment())
     page += 1
 })
 
 document.querySelector("[data-list-items]").addEventListener('click', (event) => {
     const pathArray = Array.from(event.path || event.composedPath())
     let active = null
 
     for (const node of pathArray) {
         if (active) break
 
         if (node?.dataset?.preview) {
             let result = null
     
             for (const singleBook of books) {
                 if (result) break;
                 if (singleBook.id === node?.dataset?.preview) result = singleBook
             } 
         
             active = result
         }
     }
     
     if (active) {
        document.querySelector("[data-list-active]").open = true
        document.querySelector("[data-list-blur]").src = active.image
        document.querySelector("[data-list-image]").src = active.image
        document.querySelector("[data-list-title]").innerText = active.title
        document.querySelector("[data-list-subtitle]").innerText = `${authors[active.author]} (${new Date(active.published).getFullYear()})`
        document.querySelector("[data-list-description]").innerText = active.description
     }
 })  
 