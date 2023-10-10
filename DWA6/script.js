
import { books, authors, genres, BOOKS_PER_PAGE } from './data.js'

let page = 1;
let matches = books

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
 * 
 * @param {string} dataAttr 
 * @param {string} [value ]
 * @returns {HTMLElement}
 */

const getHtml = (dataAttr, value) =>{
    const selector = value 
        ? `[data-${dataAttr} = "${value}"]`
        : `[data-${dataAttr}]`;

    const element =document.querySelector(selector) 
    const isHtmlElement = element instanceof HTMLElement;

    if (!isHtmlElement) {
        throw new Error (`${selector} attribute not found in html`)
    }

} 

/**
 * Handles the click event when canceling the search.
 * Closes the search overlay.
 * @returns {boolean} - Returns `false` to prevent default behavior of the click event.
 */

const handleSearchCancel = () => {
    
   return getHtml("search-overlay").open = false
}; 


/**
 * Handles the click event when canceling the settings.
 * Closes the settings overlay.
 * @returns {boolean} - Returns `false` to prevent default behavior of the click event.
 */
const handleSettingsCancel = () => {
   return getHtml("settings-overlay").open = false
};

appendingMoreOptions(genres) 
appendingMoreOptions(authors) 

//Check and set the initial theme based on system preference
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    getHtml("settings-theme").value = 'night'
    nightMode()
} else {
    getHtml("settings-theme").value = 'day'
   dayMode()
}


getHtml("list-button").innerText = `Show more (${books.length - BOOKS_PER_PAGE})`
getHtml("list-button").disabled = (matches.length - (page * BOOKS_PER_PAGE)) > 0

getHtml("list-button").innerHTML = `
    <span>Show more</span>
    <span class="list__remaining"> (${(matches.length - (page * BOOKS_PER_PAGE)) > 0 ? (matches.length - (page * BOOKS_PER_PAGE)) : 0})</span>
`

/**
 * Handles the click event when canceling the search
 */
getHtml("search-cancel").addEventListener('click', handleSearchCancel)

/**
 * Handles the click event when canceling the settings
 */
getHtml("settings-cancel").addEventListener('click', handleSettingsCancel)

/**
 * Handles the click event when initiating a search
 */
getHtml("header-search").addEventListener('click', () => {
    getHtml("search-overlay").open = true 
    getHtml("search-title").focus()
})

/**
 *  Handles the click event when opening settings
 */
getHtml("header-settings").addEventListener('click', () => {
    getHtml("settings-overlay").open = true 
})

getHtml("list-close").addEventListener('click', () => {
    getHtml("list-active").open = false
})

/**
 * Handles the form submission for changing the theme 
 * 
 *  @param {event} event - The form submission event
 */
getHtml("settings-form").addEventListener('submit', (event) => {
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
getHtml("search-form").addEventListener('submit', (event) => {
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
        getHtml("list-message").classList.add('list__message_show')
    } else {
        getHtml("list-message").classList.remove('list__message_show')
    }

    getHtml("list-items").innerHTML = ''
    
    fragment()
    sliceBooks(result.slice(0, BOOKS_PER_PAGE))

    getHtml("settings-overlay").appendChild(newItems)
    getHtml("list-button").disabled = (matches.length - (page * BOOKS_PER_PAGE)) < 1

    getHtml("list-button").innerHTML = `
        <span>Show more</span>
        <span class="list__remaining"> (${(matches.length - (page * BOOKS_PER_PAGE)) > 0 ? (matches.length - (page * BOOKS_PER_PAGE)) : 0})</span>
    `

    window.scrollTo({top: 0, behavior: 'smooth'});
   handleSearchCancel()
})

getHtml("list-button").addEventListener('click', () => {
    
fragment()
booksSlice(matches.slice(page * BOOKS_PER_PAGE, (page + 1) * BOOKS_PER_PAGE)) 

getHtml("list-items").appendChild(fragment())
    page += 1
})

getHtml("list-items").addEventListener('click', (event) => {
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
        getHtml("list-active").open = true
        getHtml("list-blur").src = active.image
        getHtml("list-image").src = active.image
        getHtml("list-title").innerText = active.title
        getHtml("list-subtitle").innerText = `${authors[active.author]} (${new Date(active.published).getFullYear()})`
        getHtml("list-description").innerText = active.description
    }
})  


