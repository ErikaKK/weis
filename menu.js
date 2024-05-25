/* Pagination */
const itemCardTemplate = document.querySelector("[data-item-template]");
const itemCardContainer = document.querySelector("[data-item-cards-container]");
const paginationContainer = document.getElementById('pagination');
const categorySelect = document.querySelector('.category-select');

const itemsPerPage = 12;
let currentPage = 1;
let menuData = [];
let filteredData = [];

// Fetch menu data and initialize
fetch('menu.json')
    .then(res => res.json())
    .then(data => {
        menuData = data;
        filteredData = menuData; // Initially display all items
        displayMenu(currentPage);
        setupPagination(filteredData.length);
    })
    .catch(error => console.error('Error fetching menu:', error));



// Function to filter items by category
function filterByCategory(category) {
    if (category === 'All') {
        filteredData = menuData;
    } else {
        filteredData = menuData.filter(item => item.category === category);
    }
    currentPage = 1; // Reset to first page
    setupPagination(filteredData.length);
    displayMenu(currentPage);
}

// Function to display menu items for a given page
function displayMenu(page) {
    itemCardContainer.innerHTML = '';
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedItems = filteredData.slice(startIndex, endIndex);

    paginatedItems.forEach(item => {
        const card = itemCardTemplate.content.cloneNode(true).children[0];
        const name = card.querySelector("[data-header]");
        const price = card.querySelector("[data-price]");
        const image = card.querySelector("[data-image]");
        
        name.textContent = item.name;
        price.textContent = item.price;
        if (item.image) {
            image.src = item.image; // Assuming `item.image` is a URL to the image
            image.alt = item.name;
        } else {
            image.style.display = 'none'; // Hide the image element if the URL is empty
        }
        
        itemCardContainer.appendChild(card);
    });
}

// Function to setup pagination controls
function setupPagination(totalItems) {
    paginationContainer.innerHTML = '';
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.innerText = i;
        if(i === currentPage){
            pageButton.classList.toggle('page-selected');
        }
        pageButton.addEventListener('click', () => {
            currentPage = i;
            displayMenu(currentPage);
            updatePaginationActiveState(totalPages);
        });
        paginationContainer.appendChild(pageButton);
    }
}

function updatePaginationActiveState(totalPages) {
    const pageButtons = paginationContainer.querySelectorAll('button');
    pageButtons.forEach((button,index) => {
        if(index+1=== currentPage){
            button.classList.add('page-selected');

        } else{
            button.classList.remove('page-selected');
        }
    });
}


// search bar, hide whatever doesn't match, case insensitive





/* dropdown menu */
// get all dropdowns from the document
const dropdowns = document.querySelectorAll('.dropdown');

//loop through all dropdown elements
dropdowns.forEach(dropdown => {
    //get inner elements from each dropdown
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.category-selected');
    // add click event to the select element
    select.addEventListener('click', () => {
        //add clicked select styles to the select element
        select.classList.toggle('select-clicked');
        //add the rotate styles to the caret element
        caret.classList.toggle('caret-rotate');
        //add the open style to the menu element
        menu.classList.toggle('menu-open');
    })
    //loop through all option elements
    options.forEach(option => {
        // add click event to the option element
        option.addEventListener('click',() =>{
            // change selected inner text to clicked option inner text
            selected.innerText = option.innerText;
            filterByCategory(option.innerText);
            // remove the clicked select styles to the select element
            select.classList.remove('select-clicked');
            // remove the rotate style to the caret element
            caret.classList.remove('caret-rotate');
            // remove the open style to the menu element
            menu.classList.remove('menu-open');
            // remove  active class from all option elements
            options.forEach(option => {
                option.classList.remove('active');
            })
            // add active class to clicked option element
            option.classList.add('active');
        })
    })
})

// Close dropdowns if clicked outside
window.addEventListener('click', (e) => {
    dropdowns.forEach(dropdown => {
        const select = dropdown.querySelector('.select');
        const caret = dropdown.querySelector('.caret');
        const menu = dropdown.querySelector('.menu');
        
        if (!dropdown.contains(e.target)) {
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
        }
    });
});

/* Dropdown menu selection */
