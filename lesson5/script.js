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

function renderCart(){
    let cartDiv = document.getElementById('cart');
    let qty = cart.countGoodsCount();
    let totalPrice = cart.countCartPrice();
    let text = qty == 0 ? "В корзине  нет товаров" :  `В корзине ${qty} ${Generate(qty, 'товар', 'товара', 'товаров')}, на сумму ${totalPrice} ${Generate(totalPrice, 'рубль', 'рубля', 'рублей')}`;
    cartDiv.insertAdjacentText('afterbegin', text);
}

function renderCatalog(){
    let catalogDiv = document.getElementById('catalog');
    catalog.forEach(product => {
        catalogDiv.insertAdjacentHTML('beforeend', `
        <div class="product">
            <header class="product-header">
                <img src="${product.imgUrl}" alt="${product.name}">
                <div class="product-name">
                    ${product.name}
                </div>
            </header>
            <footer class="product-footer">
                <div class="product-price">
                    ${product.price}
                </div>
                <button class="product-button">
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

let catalog = [
    new Product(1, "Велосипед", "https://via.placeholder.com/150", 23590),
    new Product(2, "Лыжи", "https://via.placeholder.com/150", 11999),
    new Product(3, "Ролики", "https://via.placeholder.com/150", 5990),
    new Product(4, "Сноуборд", "https://via.placeholder.com/150", 8990),
    new Product(5, "Коньки", "https://via.placeholder.com/150", 7990),
    new Product(6, "Мяч", "https://via.placeholder.com/150", 1990),
    new Product(7, "Кроссовки", "https://via.placeholder.com/150", 2570),
    new Product(8, "Футболка", "https://via.placeholder.com/150", 690)
]



let cart = new Cart()
cart.addProductToCart(catalog[1]);
cart.addProductToCart(catalog[2]);

renderCart();
renderCatalog();