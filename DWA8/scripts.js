import {BOOKS_PER_PAGE, genres, books, authors } from "./data.js";

const matches = books

let  page = 1;


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
 
 function preview({author, id, image, title}){

   
    const fragment1 = fragment() 
    
    const booksForPreview = {
        author,
        id,
        title,
        image,
    createPreview({author, id, image, title}) {
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
    },
    sliceBooks(previewSlice){ 
        const fragment1 = fragment()
     for (const { author, id, image, title } of previewSlice) {
        
         const bookPreview = this.createPreview({author,id,image,title}) 
         fragment1.appendChild(bookPreview)
     } 
       
       document.querySelector("[data-list-items]").appendChild(fragment1)
     } 
    
    } 
    return booksForPreview
     }  

     const firstBooksPreview = preview({books}) 
     firstBooksPreview.sliceBooks(matches.slice(0, BOOKS_PER_PAGE))
     console.log(firstBooksPreview)

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
 
 const appendingMoreOptions = (optionCategory,filterCategory) =>{
    const filterCat = SearchOptions(`${filterCategory}`)
 for (const [id, name] of Object.entries(optionCategory)) {
     const element = document.createElement('option') 
     element.value = id
     element.innerText = name
    
     filterCat.appendChild(element) 
     document.querySelector(`[data-search-${filterCategory}]`).appendChild(filterCat)
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
 
 appendingMoreOptions(genres, "genres") 
 appendingMoreOptions(authors, "authors") 
 
 

 //Check and set the initial theme based on system preference
 if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
     document.querySelector("[data-settings-theme]").value = 'night'
     nightMode()
 } else {
     document.querySelector("[data-settings-theme]").value = 'day'
    dayMode()
 }
 
 document.querySelector("[data-list-button]").innerText = `Show more (${books.length - BOOKS_PER_PAGE})`
 document.querySelector("[data-list-button]").disabled = (matches.length - (page * BOOKS_PER_PAGE) < 0 )
 
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
     const secondBooksPreview = preview(books) 
     secondBooksPreview.sliceBooks(result.slice(0, BOOKS_PER_PAGE))
     
     
 
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
 const thirdBooksPreview = preview(books) 
  thirdBooksPreview.sliceBooks(matches.slice(page * BOOKS_PER_PAGE, (page + 1) * BOOKS_PER_PAGE))
 
 
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

 /**
  * 
  * @param {*} param0 
  * @returns {object} 
  */
 
