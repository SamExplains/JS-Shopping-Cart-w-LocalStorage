<?php include "resources/includes/header.php" ?>

<div class="container">

  <div class="d-flex justify-content-center m-3">
    <h3 class="Lobster-Two">
      <span>
        <img src="resources/img/store.svg" width="40em" alt="">
      </span>Exotic Store</h3>
  </div>

  <div class="fixed-top d-flex justify-content-end m-3">
    <button class="btn btn-light dropdown-toggle" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <img src="resources/img/cart.svg" width="30" alt=""><span class="ml-2 mr-2 total-Items my-auto Yantram-700" id="cart-total-items"></span>
    </button>
    <div class="dropdown-menu col-12 animated fadeIn" aria-labelledby="triggerId" style="height: 50vh !important; overflow: scroll !important;">
      <div id="cart-items">
        <!--Added Products Here-->
      </div>
      <div class="col-8 offset-2">
        <div class="btn btn-outline-danger btn-block m-3 Yantram-700" id="clear-cart">Clear Cart</div>
      </div>
    </div>
  </div>

</div>

<!-- Items Available -->
<div class="container animated fadeInUp" style="margin-top: 5rem">
  <div class="row" id="product-list">

    <div class="col-md-8 col-12 mb-5" id="itemForSale">
      <h4 class="Lobster-Two-700">Ferrari <u class="ml-2 price">$250,000</u></h4>
      <img src="resources/img/ferrari.jpg" class="img-fluid rounded" alt="">
      <p class="Yantram mt-3 mb-3 description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium atque aut commodi cupiditate deleniti
        distinctio doloremque dolorum, ea eius enim et eum ex excepturi expedita id impedit inventore ipsa ipsam itaque
        maxime minus nam neque nisi odio pariatur praesentium quam quod reiciendis rerum saepe sapiente, sit suscipit
        temporibus vitae voluptatum.</p>
      <button class="btn btn-primary btn-block add-to-cart Yantram-900" data-id="1" >Add To Cart</button>
    </div>

    <div class="col-md-4 col-12 mb-5" id="itemForSale">
      <h4 class="Lobster-Two-700">Tiger <u class="ml-2 price">$10,000</u></h4>
      <img src="resources/img/tiger.jpg" class="img-fluid rounded" alt="">
      <p class="Yantram mt-3 mb-3 description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium atque aut commodi cupiditate deleniti
        distinctio doloremque dolorum, ea eius enim et eum ex excepturi expedita id impedit inventore ipsa ipsam itaque
        maxime minus nam neque nisi odio pariatur praesentium quam quod reiciendis rerum saepe sapiente, sit suscipit
        temporibus vitae voluptatum.</p>
      <button class="btn btn-primary btn-block add-to-cart Yantram-900" data-id="2">Add To Cart</button>
    </div>

    <div class="col-md-3 col-12 mb-5" id="itemForSale">
      <h4 class="Lobster-Two-700">Flower <u class="ml-2 price">$2,500</u></h4>
      <img src="resources/img/flower.jpg" class="img-fluid rounded" alt="">
      <p class="Yantram mt-3 mb-3 description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium atque aut commodi cupiditate deleniti
        distinctio doloremque dolorum, ea eius enim et eum ex excepturi expedita id impedit inventore ipsa ipsam itaque
        maxime minus nam neque nisi odio pariatur praesentium quam quod reiciendis rerum saepe sapiente, sit suscipit
        temporibus vitae voluptatum.</p>
      <button class="btn btn-primary btn-block add-to-cart Yantram-900" data-id="3">Add To Cart</button>
    </div>

    <div class="col-md-6 col-12 mb-5" id="itemForSale">
      <h4 class="Lobster-Two-700">Vacation <u class="ml-2 price">$4,500</u></h4>
      <img src="resources/img/vacation.jpg" class="img-fluid rounded" alt="">
      <p class="Yantram mt-3 mb-3 description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium atque aut commodi cupiditate deleniti
        distinctio doloremque dolorum, ea eius enim et eum ex excepturi expedita id impedit inventore ipsa ipsam itaque
        maxime minus nam neque nisi odio pariatur praesentium quam quod reiciendis rerum saepe sapiente, sit suscipit
        temporibus vitae voluptatum.</p>
      <button class="btn btn-primary btn-block add-to-cart Yantram-900" data-id="4">Add To Cart</button>
    </div>

    <div class="col-md-3 col-12 mb-5" id="itemForSale">
      <h4 class="Lobster-Two-700">Parrot <u class="ml-2 price">$3,250</u></h4>
      <img src="resources/img/bird.jpg" class="img-fluid rounded" alt="">
      <p class="Yantram mt-3 mb-3 description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium atque aut commodi cupiditate deleniti
        distinctio doloremque dolorum, ea eius enim et eum ex excepturi expedita id impedit inventore ipsa ipsam itaque
        maxime minus nam neque nisi odio pariatur praesentium quam quod reiciendis rerum saepe sapiente, sit suscipit
        temporibus vitae voluptatum.</p>
      <button class="btn btn-primary btn-block add-to-cart Yantram-900" data-id="5">Add To Cart</button>
    </div>


  </div>
</div>



<?php include "resources/includes/footer.php"; ?>
