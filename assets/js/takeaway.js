let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Bread Barrel',
        image: '1.PNG',
        price: 100000
    },
    {
        id: 2,
        name: 'Caesar Salad',
        image: '2.PNG',
        price: 120000
    },
    {
        id: 3,
        name: 'Crab Cake',
        image: '3.PNG',
        price: 220000
    },
    {
        id: 4,
        name: 'Greek Salad',
        image: '4.PNG',
        price: 123000
    },
    {
        id: 5,
        name: 'Lobster Bisque',
        image: '5.PNG',
        price: 320000
    },
    {
        id: 6,
        name: 'Spinach Salad',
        image: '6.PNG',
        price: 120000
    },
    {
        id: 7,
        name: 'Lobster Roll',
        image: '7.PNG',
        price: 120000
    },
    {
        id: 8,
        name: 'Tuscan Grilled',
        image: '8.PNG',
        price: 120000
    },
    {
        id: 9,
        name: 'Mozzarella Stick',
        image: '9.PNG',
        price: 120000
    },
    {
        id: 10,
        name: 'Chicken Rice',
        image: '10.PNG',
        price: 120000
    },
    {
        id: 11,
        name: 'Fruit Salad',
        image: '11.PNG',
        price: 120000
    },
    {
        id: 12,
        name: 'Lucky Cake',
        image: '12.PNG',
        price: 120000
    },
    {
        id: 13,
        name: 'Crab Noodle',
        image: '13.PNG',
        price: 120000
    },
    {
        id: 14,
        name: 'Fresh Dessert',
        image: '14.PNG',
        price: 120000
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}