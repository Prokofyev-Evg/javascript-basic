class Product{
    constructor(id, name, imgUrl, price){
        this.id = id;
        this.name = name;
        this.imgUrl = imgUrl;
        this.price = price;
    }
}

class Cart{
    constructor(productList = {}){
        this._productList = productList;
    }

    addProductToCart(product){
        if (this._productList.hasOwnProperty(product.id)) {
            this._productList[product.id].qty += 1;
        } else {
            this._productList[product.id] = {item: product, qty: 1};
        }
    }

    removeProductFromCart(id){
        if (this._productList.hasOwnProperty(id)) {
            if (this._productList[id].qty > 1) {
                this._productList[id].qty -= 1;
            } else {
                delete this._productList[id];
            }
        }
    }

    countCartPrice(){
        let sum = 0;
        for (const key in this._productList) {
            if (this._productList.hasOwnProperty(key)) {
                const element = this._productList[key];
                sum += element.item.price * element.qty;
            }
        }
        return sum;
    }

    countGoodsCount(){
        return Object.values(this._productList).reduce((acc, {qty}) => acc + qty, 0)
    }
}

class Catalog{
    constructor(productList = {}){
        this._productList = productList;
    }
}

let cart = new Cart()
let catalog = [
    new Product(0, "Велосипед", "https://via.placeholder.com/150", 23590),
    new Product(1, "Лыжи", "https://via.placeholder.com/150", 11999),
    new Product(2, "Ролики", "https://via.placeholder.com/150", 5990),
    new Product(3, "Сноуборд", "https://via.placeholder.com/150", 8990),
    new Product(4, "Коньки", "https://via.placeholder.com/150", 7990),
    new Product(5, "Мяч", "https://via.placeholder.com/150", 1990),
    new Product(6, "Кроссовки", "https://via.placeholder.com/150", 2570),
    new Product(7, "Футболка", "https://via.placeholder.com/150", 690)
]
renderCart();
renderCatalog(); 
let addToCartButtons = document.getElementsByClassName('product-button-add');
let productSlider = document.querySelector(".modal-product-slider");
let productModalClose = document.querySelector(".close-modal");
let productModal = document.querySelector(".modal-product");
let productPhotos = document.getElementsByClassName('product-photo');
let slides = document.getElementsByClassName('modal-product-slide');


function renderCart(){
    let cartDiv = document.getElementById('cart');
    let qty = cart.countGoodsCount();
    let totalPrice = cart.countCartPrice();
    let text = qty == 0 ? "В корзине  нет товаров" :  `В корзине ${qty} ${Generate(qty, 'товар', 'товара', 'товаров')}, на сумму ${totalPrice} ${Generate(totalPrice, 'рубль', 'рубля', 'рублей')}`;
    cartDiv.innerHTML = text;
}

function renderCatalog(){
    let catalogDiv = document.getElementById('catalog');
    catalog.forEach(product => {
        catalogDiv.insertAdjacentHTML('beforeend', `
        <div class="product">
            <header class="product-header">
                <div class="product-photo">
                    <img src="${product.imgUrl}" alt="${product.name}">
                    <div class="product-name">
                        ${product.name}
                    </div>
                </div>
            </header>
            <footer class="product-footer">
                <div class="product-price">
                    ${product.price}
                </div>
                <button data-id="${product.id}" class="product-button-add">
                    Купить
                </button>
            </footer>
        </div>
        `);
    });
}


function Generate(number, nominativ, genetiv, plural)
{
    let titles = [ nominativ, genetiv, plural ];
    let cases = [ 2, 0, 1, 1, 1, 2 ];
    return titles[number % 100 > 4 && number % 100 < 20 ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}

let sliderIndex = 0;
function toggleModal() {
    productModal.classList.toggle('is-open');
    sliderIndex = 0;
    renderSlide();  
}


for (var i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener('click', (e) => {
        const id = e.target.getAttribute('data-id');
        cart.addProductToCart(catalog[id]);
        renderCart();
    });
}


productSlider.addEventListener('click', () => {
    sliderIndex = (sliderIndex + 1) % slides.length;
    renderSlide();
})

function renderSlide() {
    let element = document.querySelector(".modal-product-show");
    element.classList.remove('modal-product-show');
    slides[sliderIndex].classList.add('modal-product-show');
}

productModalClose.addEventListener('click', toggleModal);
for (var i = 0; i < productPhotos.length; i++) {
    productPhotos[i].addEventListener('click', toggleModal);
}