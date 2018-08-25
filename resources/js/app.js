console.log('Script loaded in!');

/* Variables */
const products = $('#product-list'), $cartItem = $('#cart-items'), clearCart = $('#clear-cart');
const $cartTotalItems = $('#cart-total-items');
let totalCartItems;

console.log($cartTotalItems);


loadEventListener();

function loadEventListener() {

  //New product added to cart
  products.click(buyProduct);

  // Remove button clicked for item in cart
  $cartItem.click(removeProduct);

  clearCart.click(clearWholeCart);

  //Document ready for cart
  document.addEventListener('DOMContentLoaded', getFromLocalStorage);
}

$(document).on('click', '.container .dropdown-menu', function (e) {
  e.stopPropagation();
});

function buyProduct(e) {
  e.preventDefault();

  //Use delegation to find course that was added
  if(e.target.classList.contains('add-to-cart')){
    const aProduct = e.target.parentElement;

    getProductInformation(aProduct);
  }

}

function getProductInformation(someProduct) {
  //Product Object
  const productInfo = {
    image: someProduct.querySelector('img').src,
    title: someProduct.querySelector('h4').textContent,
    price: someProduct.querySelector('.price').textContent,
    description: someProduct.querySelector('p').innerText,
    id: someProduct.querySelector('button').getAttribute('data-id')
  };

  //Insert product into shopping car
  addToCart(productInfo);
  // totalCartItems += 1;
  // console.log(productInfo.image);
  //console.log(productInfo);



}

function addToCart(productObject) {

  const $cart =
    `
    <div class="col-8 offset-2 flex-row-reverse text-center p-3" data-id="${productObject.id}">
    <img id="cart-Img" class="img-fluid rounded mb-2" src="${productObject.image}" width="100" alt="">
    <h4 class="text-center Yantram-700">${productObject.title}.</h4>
    <p class="font-weight-light">${productObject.description.substr(0,80)}</p>
    <button class="btn btn-light btn-block removeProduct">
      <img src="./resources/img/delete.svg" width="20" alt="">
    </button>
    </div> 
    `;


  $cartItem.append($cart);

  //Add to local storage
  saveIntoLocalStorage(productObject);
  totalCartItems++;
  $cartTotalItems.text(totalCartItems);

}

function saveIntoLocalStorage(pObject) {
  let products = getProductsFromLocalStorage();

  // Add product into array
  products.push(pObject);

  //Convert into JSON for local storage
  localStorage.setItem('products', JSON.stringify(products));

}

function getProductsFromLocalStorage(){
  let products;

  //Check to see if anything exists in the storage
  if(localStorage.getItem('products') === null){
    products = [];
  } else {
    products = JSON.parse(localStorage.getItem('products'));
  }

  return products
}

function removeProduct(e) {
  e.stopPropagation();

  let product, productID;

  if(e.target.classList.contains('removeProduct')){
    //console.log('Product Removed');
    //console.log('Removing product');
    e.target.parentElement.remove();
    product = e.target.parentElement;
    productID = product.getAttribute('data-id');
  }

  //remove product from local storage;
  removeProductFromLocalStorage(productID);
}

// Clears shopping cart
function clearWholeCart() {
  $cartItem.empty();

  totalCartItems = 0;
  $cartTotalItems.text(totalCartItems);

  //Clear from local storage
  clearFromLocalStorage();

}

function clearFromLocalStorage() {
  localStorage.clear();
}

function getFromLocalStorage() {
  //Loads products into shopping cart
  let productsLS = getProductsFromLocalStorage();

  //Loop through each one to print into DOM -> Shopping Cart
  productsLS.forEach(function (prodLS) {
    const $cart =
      `
    <div class="col-8 offset-2 flex-row-reverse text-center p-3" data-id="${prodLS.id}">
    <img id="cart-Img" class="img-fluid rounded mb-2" src="${prodLS.image}" width="100" alt="">
    <h4 class="text-center Yantram-700">${prodLS.title}.</h4>
    <p class="font-weight-light">${prodLS.description.substr(0,80)}</p>
    <button class="btn btn-light btn-block removeProduct">
      <img src="./resources/img/delete.svg" width="20" alt="">
    </button>
    </div> 
    `;

    $cartItem.append($cart);
  });

  totalCartItems = $cartItem.children().length;
  $cartTotalItems.text(totalCartItems);
}

function removeProductFromLocalStorage(pID) {
  let productsLS = getProductsFromLocalStorage();
  let count = 0;

  productsLS.forEach(function (prod, index) {

    if (pID === prod.id && count < 1){

      //Update Cart When 1 Item Removed
      $cartTotalItems.toggleClass("animated fadeInUp");
      console.log($cartTotalItems);
      totalCartItems--;
      $cartTotalItems.text(totalCartItems);
      console.log($cartTotalItems);
      productsLS.splice(index, 1);
      count++;
    }

  });
    console.log(count);
  //Ad the rest of the array
  localStorage.setItem('products', JSON.stringify(productsLS));

}