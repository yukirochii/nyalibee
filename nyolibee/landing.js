
let storepic = document.querySelector(".store-picture");

function spic1(link){
    storepic.style.backgroundImage = `url(${link})`;
}
let contentMain = document.querySelector(".content-main");

fetch("maincourse.json")
 .then(response => response.json())
 .then(value => {

    for (let i = 0 ; i< value.length; i++) {
    contentMain.innerHTML += `<div class="product-main">
                <div class="product-pic" style="background-image: url(${value[i].img})"></div>
                <div class="product-info">
                    <p class="name">${value[i].name}</p>
                    <p class="price"><span>₱</span>${value[i].price}</p>
                    <p class="info">${value[i].info}</p>
                </div>
             </div>`
            }
 })

let contentSide = document.querySelector(".content-side");

fetch("side.json")
.then(response => response.json())
.then(value => {
    for (let i = 0 ; i< value.length; i++) {
        contentSide.innerHTML += `<div class="product-main">
                    <div class="product-pic" style="background-image: url(${value[i].img})"></div>
                    <div class="product-info">
                        <p class="name">${value[i].name}</p>
                        <p class="price"><span>₱</span>${value[i].price}</p>
                        <p class="info">${value[i].info}</p>
                    </div>
                 </div>`
                }
})

let contentDrink = document.querySelector(".content-drink");
fetch("drink.json")
.then(response => response.json())
.then(value => {
    for (let i = 0 ; i< value.length; i++) {
        contentDrink.innerHTML += `<div class="product-main">
                    <div class="product-pic" style="background-image: url(${value[i].img})"></div>
                    <div class="product-info">
                        <p class="name">${value[i].name}</p>
                        <p class="price"><span>₱</span>${value[i].price}</p>
                        <p class="info">${value[i].info}</p>
                    </div>
                 </div>`
                }
})