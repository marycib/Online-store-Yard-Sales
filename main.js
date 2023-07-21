const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burguerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const shoppingCardContainer = document.querySelector("#shoppingCardContainer");
const cardContainer = document.querySelector(".cards-container");
const productDetailContainer = document.querySelector("#productDetail");

menuEmail.addEventListener("click", toggleDesktopMenu);
burguerMenu.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

//cartCounter

function toggleDesktopMenu() {
  const isAsideCloused = shoppingCardContainer.classList.contains("inactive");

  if (!isAsideCloused) {
    shoppingCardContainer.classList.add("inactive");
  }

  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isAsideCloused = shoppingCardContainer.classList.contains("inactive");

  if (!isAsideCloused) {
    shoppingCardContainer.classList.add("inactive");
  }

  closeProductDetailAside();
  mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside() {
  const isMobileMenuCloused = mobileMenu.classList.contains("inactive");
  if (!isMobileMenuCloused) {
    mobileMenu.classList.add("inactive");
  }

  const isProductDetailClosed = productDetailContainer.classList.contains(
    "inactive"
  );

  if (!isProductDetailClosed) {
    productDetailContainer.classList.add("inactive");
  }

  shoppingCardContainer.classList.toggle("inactive");
}

function openProductDetailAside() {
  shoppingCardContainer.classList.add("inactive");
  productDetailContainer.classList.remove("inactive");
}

function closeProductDetailAside() {
  productDetailContainer.classList.add("inactive");
}

const productList = [];
productList.push({
  name: "Alfa Romero",
  price: 70.254,
  image:
    "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});

productList.push({
  name: "2010 Rolls-Royce Ghost",
  price: 40.316,
  image: "https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg"
});

productList.push({
  name: "Lamborghini Negro",
  price: 355.032,
  image: "https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg"
});

productList.push({
  name: "Rolls-Royce Phantom",
  price: 500.108,
  image:
    "https://images.pexels.com/photos/4141954/pexels-photo-4141954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});

productList.push({
  name: "Lamborghini Sián FKP 37",
  price: 3600.205,
  image:
    "https://images.pexels.com/photos/5213525/pexels-photo-5213525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});

productList.push({
  name: "Lamborghini Gallardo",
  price: 134.001,
  image:
    "https://images.pexels.com/photos/13685449/pexels-photo-13685449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});

productList.push({
  name: "2023 BMW X6 M",
  price: 115.205,
  image:
    "https://images.pexels.com/photos/6040846/pexels-photo-6040846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});

productList.push({
  name: "Bentley Continental GT",
  price: 401.416,
  image:
    "https://images.pexels.com/photos/13731866/pexels-photo-13731866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});

/*<div class="product-card">
            <img src="https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="">
            <div class="product-info">
                <div>
                    <p>$120,00</p>
                    <p>Car</p>
                </div>
                <figure>
                    <img src="./icons/bt_add_to_cart.svg" alt="">
                </figure>
            </div>
        </div>*/
function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    // product= {name, price, image} -> product.image
    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);
    productImg.addEventListener("click", openProductDetailAside);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;
    const productName = document.createElement("p");
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement("figure");
    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/shopping_cart.svg");

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardContainer.appendChild(productCard);
  }
}

renderProducts(productList);

function initializeVanillaTilt() {
  const productCards = document.querySelectorAll(".product-card");

  productCards.forEach((productCard) => {
    VanillaTilt.init(productCard, {
      max: 25,
      speed: 400
    });
  });
}

initializeVanillaTilt();

const productCards = document.querySelectorAll(".product-card");

productCards.forEach((productCard) => {
  // Add the button to the product card
  const productButton = document.createElement("button");
  productButton.textContent = "View Product Detail";
  productButton.addEventListener("click", () => {
    // Get the product that corresponds to the product card
    const product = productList.find(
      (product) => product.image === productCard.querySelector("img").src
    );

    // Clear the contents of the product detail card
    productDetail.innerHTML = "";

    // Add the product information to the product detail card
    const productInfoDiv = document.createElement("div");
    productInfoDiv.classList.add("product-info");

    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;
    const productName = document.createElement("p");
    productName.innerText = product.name;

    const productImage = document.createElement("img");
    productImage.setAttribute("src", product.image);

    const productBtn = document.createElement("button");
    productBtn.classList.add("primary-button", "add-to-cart-button");
    productBtn.textContent = "Add to Cart";

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
    productDetail.appendChild(productImage);

    productDetail.appendChild(productInfoDiv);

    productInfoDiv.appendChild(productBtn);
    // Show the product detail card
    productDetail.classList.remove("inactive");
  });

  productCard.appendChild(productButton);
});
