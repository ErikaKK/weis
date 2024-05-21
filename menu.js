// const itemCardTemplate = document.querySelector("[data-item-template]")
// const itemCardContainer = document.querySelector("[data-item-cards-container]")

// // get menu from json file, pass to html. each page has 15 items at maximum
// fetch('menu.json')
//     .then(res => res.json())
//     .then(data => {
//         data.forEach(item => {
//             const card = itemCardTemplate.content.cloneNode(true).children[0]
//             console.log(card)
//             const name = card.querySelector("[data-header]")
//             const price = card.querySelector("[data-price]")
//             const image = card.querySelector("[data-image]")
//             name.textContent = item.name
//             price.textContent = item.price
//             image.textContent = item.image
//         });
//         // const menuData = data;
        

//         // Extract unique categories
//         // const categories = [...new Set(menuData.map((item) => {return item}))];
//         // console.log(categories); 
//     })


const itemCardTemplate = document.querySelector("[data-item-template]");
const itemCardContainer = document.querySelector("[data-item-cards-container]");
const paginationContainer = document.getElementById('pagination');

const itemsPerPage = 12;
let currentPage = 1;
let menuData = [];

// Fetch menu data and initialize
fetch('menu.json')
    .then(res => res.json())
    .then(data => {
        menuData = data;
        displayMenu(currentPage);
        setupPagination(menuData.length);
    })
    .catch(error => console.error('Error fetching menu:', error));

// Function to display menu items for a given page
function displayMenu(page) {
    itemCardContainer.innerHTML = '';
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedItems = menuData.slice(startIndex, endIndex);

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
        pageButton.addEventListener('click', () => {
            currentPage = i;
            displayMenu(currentPage);
        });
        paginationContainer.appendChild(pageButton);
    }
}


// search bar, hide whatever doesn't match, case insensitive