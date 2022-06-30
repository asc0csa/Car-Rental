


let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

// OPEN CART
cartIcon.onclick = () => {
    cart.classList.add("active");
};

// CLOSE CART
closeCart.onclick = () => {
    cart.classList.remove("active");
};




// ADD CAR TO CART BUTTON
(function(){

    const cartBtn = document.querySelectorAll(".add-cart");
    
    cartBtn.forEach(function(btn) {
        btn.addEventListener("click", function(event) {

 //         console.log(event.target);

            // GET ITEM PICTURE
        if(event.target.classList.contains("add-cart")) {

            let fullPath = 
            event.target.parentElement.previousElementSibling.src;
            let pos = fullPath.indexOf("image");
            let partPath = fullPath.slice(pos);

 //           console.log(partPath);

            const item = {};
            item.img = `${partPath}`;

            // ITEM NAME
            let name = event.target.previousElementSibling.textContent;
            item.name = name;
  //          console.log(name);

            // ITEM PRICE
            let price = event.target.nextElementSibling.textContent;
            let finalPrice = price.slice(1).trim();
           item.price = finalPrice;
   //         console.log(price);


   //         console.log(item);



const cartItem = document.createElement("div");
    cartItem.classList.add("cart-content");

    cartItem.innerHTML = ` 
        <img src="${item.img}" class="cart-img">
        <div class="detail-box">
            <div class="cart-product-title">${item.name}</div>
            <div class="cart-price">$${item.price} Per Day</div>
            <input type = "number" value="1" class="cart-quantity">
        </div>
        <i class = 'bx bxs-trash-alt cart-remove'></i>
        </div>
        `;

// SELECT CART
const cart = document.querySelector(".cart");
const total = document.querySelector(".total");
cart.insertBefore(cartItem, total);
updatetotal();
alert("item added to cart!");


// REMOVING ITEMS
const removeCartButtons = document.getElementsByClassName("cart-remove");
console.log(removeCartButtons);

for (var i=0; i < removeCartButtons.length; i++) {
    var button = removeCartButtons[i];
    button.addEventListener('click', removeCartItem);
}

function removeCartItem(event) {
var buttonClicked =event.target;
buttonClicked.parentElement.remove();

}




function updatetotal() {
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName('detail-box');
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName('cart-price')[0];
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
        var price = parseFloat(priceElement.innerText.replace("$", ""));
        var quantity = quantityElement.value;
        total = total + price * quantity;


        document.getElementsByClassName('total-price')[0].innerText = "$" + total;
    }
}








        }
        });
    });

})();


/*
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

function ready() {
    var removeCartButtons = document.getElementsByClassName("cart-remove");
    console.log(removeCartButtons);
    for (var i=0; i < removeCartButtons.length; i++) {
        var button = removeCartButtons[i];
        button.addEventListener('click', removeCartItem);
    }
    // Cost change
    var quantityInputs = document.getElementsByClassName('cart-quantity');
    for (var i=0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    }

// Add to cart //////
var addCart= document.getElementsByClassName("add-cart");
for (var i=0; i < addCart.length; i++) {
    var button = addCart[i];
    button.addEventListener("click", addCartClicked);
}

}
function removeCartItem(event) {
    var buttonClicked =event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}

function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value= 1;
    }
    updatetotal();
}

//add to cart //////
function addCartClicked(event) {
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
    var price = shopProducts.getElementsByClassName("price")[0].innerText;
    var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
    addProductToCart(title, price, productImg);
    updatetotal();
}
function addProductToCart(title, price, productImg) {
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("detail-box");
    var cartItems = document.getElementsByClassName("cart-content")[0];
    var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
    for (var i=0; i < cartItemsNames.length; i++) {
        if (cartItemsNames[i].innerText == title) {
        alert("You have already added this item to cart");
        return;
    }
}



var cartBoxContent = `
                    <img src="${productImg}" class="cart-img">
                    <div class="detail-box">
                        <div class="cart-product-title">${title}</div>
                        <div class="cart-price">${price}</div>
                        <input type = "number" value="1" class="cart-quantity">
                    </div>
                    <!--remove cart-->
                    <i class = 'bx bxs-trash-alt cart-remove'></i>`;

cartShopBox.innerHTML = cartBoxContent;
cartItems.append(cartShopBox);
cartShopBox.getElementsByClassName("cart-remove")[0].addEventListener("click", removeCartItem);
cartShopBox.getElementsByClassName("cart-quantity")[0].addEventListener("change", quantityChanged);
}


function updatetotal() {
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName('detail-box');
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName('cart-price')[0];
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
        var price = parseFloat(priceElement.innerText.replace("$", ""));
        var quantity = quantityElement.value;
        total = total + price * quantity;


        document.getElementsByClassName('total-price')[0].innerText = "$" + total;
    }
}

*/