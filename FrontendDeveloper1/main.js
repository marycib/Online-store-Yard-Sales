const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const shoppingCardContainer = document.querySelector('#shoppingCardContainer');
const cardContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');

menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);


function toggleDesktopMenu() {
    const isAsideCloused = shoppingCardContainer.classList.contains('inactive');


    if (!isAsideCloused) {
        shoppingCardContainer.classList.add('inactive');
    }


    desktopMenu.classList.toggle('inactive');
}



function toggleMobileMenu() {
    const isAsideCloused = shoppingCardContainer.classList.contains('inactive');


    if (!isAsideCloused) {
        shoppingCardContainer.classList.add('inactive');
    }

    closeProductDetailAside()
    mobileMenu.classList.toggle('inactive');
}



function toggleCarritoAside() {
    const isMobileMenuCloused = mobileMenu.classList.contains('inactive');
    if (!isMobileMenuCloused) {
        mobileMenu.classList.add('inactive');

    }


    const isProductDetailClosed = productDetailContainer.classList.contains('inactive')

if (!isProductDetailClosed) {
    productDetailContainer.classList.add('inactive');

}


    shoppingCardContainer.classList.toggle('inactive');


}





function openProductDetailAside() {

    shoppingCardContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');




}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
  }


const productList = [];
productList.push({
    name: 'Car',
    price: 120,
    image: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});


productList.push({
    name: 'Tire',
    price: 80,
    image: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});


productList.push({
    name: 'Rear view mirrors',
    price: 40,
    image: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        // product= {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);


        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCart);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardContainer.appendChild(productCard);
    }
}

renderProducts(productList);