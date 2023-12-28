
let fetchAPITastyMenu = document.getElementsByClassName("fetchAPITastyMenu")

fetch("../json/tastymenu.json")
    .then((response) => response.json())
    .then((data) => {
        for (i = 0; i < data.length; i++) {
            for (j = 0; j < fetchAPITastyMenu.length; j++) {
                fetchAPITastyMenu[j].innerHTML += `
                <div class="col-lg-6 menu-item filter-starters">
                    <img src="${data[i].img}" class="menu-img" alt="">
                    <div class="menu-content">
                    <a href="#">${data[i].name}</a><span>${data[i].price}</span>
                    </div>
                    <div class="menu-ingredients">
                    ${data[i].description}
                    </div>
                </div>
            `
            }
        }
    })


