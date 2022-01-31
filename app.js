// get ONLY  **unique categories
// iterate over categories return buttons
// make sure to select buttons when they are available


// items
// displaying items on a screen
const menu = [
    {
        id: 1,
        title: "item-1",
        category:"dessert",
        price: 24.00,
        img: "images/item-1.jpeg",
        desc: 'skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing. ',    
    },
    {
        id: 2,
        title: "item-2",
        category: "dessert",
        price: 15.00,
        img: "images/item-2.jpeg",
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore '    
    },
    {
        id: 3,
        title: "item-3",
        category: "dessert",
        price: 19.00,
        img: "images/item-3.jpeg",
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',   
    },
    {
        id: 4,
        title: "item-4",
        category: "lunch",
        price: 32.00,
        img: "images/item-4.jpeg",
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',   
    },
    {
        id: 5,
        title: "item-5",
        category: "lunch",
        price: 27.00,
        img: "images/item-5.jpeg",
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',    
    },
    {
        id: 6,
        title: "item-6",
        category: "lunch",
        price: 30.00,
        img: "images/item-6.jpeg",
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',    
    },
    {
        id: 7,
        title: "item-7",
        category: "snacks",
        price: 18.00,
        img: "images/item-7.png",
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',    
    },
    {
        id: 8,
        title: "item-8",
        category: "snacks",
        price: 14.00,
        img: "images/item-8.jpeg",
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',    
    },
    {
        id: 9,
        title: "item-9",
        category: "snacks",
        price: 15.00,
        img: "images/item-9.jpeg",
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',    
    },
    {
        id: 10,
        title: "item-10",
        category: "dinner",
        price: 45.00,
        img: "images/item-10.jpeg",
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',    
    },
];

// when page loads, will access the Menu array, and dynamically populate the menu items

// targetting the section-center
const sectionCenter = document.querySelector('.section-center');

const container = document.querySelector('.btn-container');


// when page loads, want to do something - loading all items here
window.addEventListener('DOMContentLoaded', function(){
    displayMenuItems(menu);
    // as an argument, we are passing in the 
    displayMenuButtons();
});

// function will look for an array
// here we have menu items array
function displayMenuItems(menuItems){
    
    // map method allows us to access data - similar to filter- allows us to access each item within the parameter
    // we have our menuItems array here
    let displayMenu = menuItems.map(function(item){
        // console.log(item);

        // dynamically populate string using template literals
        return `<article class="menu-item">
        <img src=${item.img} class="photo" alt=${item.title}/>
        <div class="item-info">
            <header> <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4></header>
                <p>${item.desc}</p>
        </div>
    </article>`;
    });
    // joining items together 
    displayMenu = displayMenu.join("");
    // then displaying it in sectionCenter (parent element) and using innerHTML property to set it equal to displayMenu
    sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons(){
        // want to iterate over menu array and return only the cetegories
    // passing parameter, 'values' in the function and we will iterate over each 'item' in the menu array.
    const categories = menu.reduce(function(values, item){
        // if values DOES NOT include the item category, then should push the value in the values array.
        if (!values.includes(item.category)){
            values.push(item.category);
        }
        return values;
    },
    ["all"]
    );
    // we are returning 'all' because we have this button all 
    const categoryBtns = categories.map(function(category){
        // now returning button
        return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`;
    }).join("");
    // Once added buttons, then select them
    container.innerHTML = categoryBtns;
// selecting my buttons AFTER adding them dynamically in our DOM
const filterBtns = document.querySelectorAll('.filter-btn')

// filter items (buttons)
// referencing each and every btn as a parameter
filterBtns.forEach(function(btn){
    // have my function and will be looking for event object 'e'
    btn.addEventListener('click', function(e){
        // use target and dataset property - use to access 'data-id' in the index.html
        const category = e.currentTarget.dataset.id;      
    // creating new array menuCategory
    const menuCategory = menu.filter(function(menuItem){
        // console.log(menuItem.category)
        // only want to return if an item matches whatever we have in the category (which is the data-id)
        // filter out the items that have the same exact match to a category
    if(menuItem.category === category){
        return menuItem;
    }
    })
    // console.log(menuCategory);
    if(category === 'all'){
        // display all menu items with menu array
        displayMenuItems(menu)
    // if menu items is something else - specific category like lunch
    // we would use the filter array 'menuCategory' - we pass in menucategory into the function displayMenuItems
    } else{
        displayMenuItems(menuCategory);
    }
    });

});


    
}

// goal: iterate over my menu array, and place my data into html
 