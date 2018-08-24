console.log('Script loaded in!');

/* Variables */
const products = $('#product-list'), $cartItem = $('#cart-items'), clearCart = $('#clear-cart');

loadEventListener();

function loadEventListener() {

  //New product added to cart
  products.click(buyProduct);

  // Remove button clicked for item in cart
  $cartItem.click(removeProduct);

  clearCart.click(clearWholeCart);

}

$(document).on('click', '.container .dropdown-menu', function (e) {
  e.stopPropagation();
});

function buyProduct(e) {
  e.preventDefault();
  // console.log(e.target);

  //Use delegation to find course that was added
  if(e.target.classList.contains('add-to-cart')){
    // console.warn('Item Added');
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

  // console.log(productInfo.image);
  console.log(productInfo);

}

function addToCart(productObject) {
  // const $cart = `<div class="row mt-2" data-id="${productObject.id}">
  //                <div class="col-5 offset-1">
  //                 <img id="cart-Img" class="img-fluid rounded" src="${productObject.image}" width="100" alt="">
  //                </div>
  //                <div class="col-5 text-center Lobster-Two-700" style="font-size: 1.15rem">
  //                 ${productObject.title}
  //                 <div class="row text-center mx-auto">
  //                   <button class="btn btn-light btn-block">
  //                     <img src="./resources/img/delete.svg" width="20" alt="">
  //                   </button>
  //                 </div>
  //                </div></div> `;

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

}

function removeProduct(e) {
  e.stopPropagation();

  if(e.target.classList.contains('removeProduct')){
    //console.log('Product Removed');
    //console.log('Removing product');
    e.target.parentElement.remove();
  }

}

// Clears shopping cart
function clearWholeCart() {
  $cartItem.empty();
}