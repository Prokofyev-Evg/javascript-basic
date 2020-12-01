// Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, 
// мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, 
// десятки и сотни. Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. 
// Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

function numberToObject(num) {
    if ((num > 999) | (num < 0)) {
        console.log("Число должно быть в пределах [0;999]!");
        return [];
    } else {
        let retVal = [];
        retVal["единицы"] = num % 10;
        retVal["десятки"] = Math.floor((num % 100) / 10);
        retVal["сотни"] = Math.floor(num / 100);
        return retVal;
    }
}

console.log(numberToObject(245));


///////////////////////////////// TASK 2 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
class Product{
    constructor(id, name, price){
        this.id = id;
        this.name = name;
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

    countBasketPrice(){
        let sum = 0;
        for (const key in this._productList) {
            if (this._productList.hasOwnProperty(key)) {
                const element = this._productList[key];
                sum += element.item.price * element.qty;
            }
        }
        return sum;
    }
}

let cart = new Cart()
cart.addProductToCart(new Product(1, "Велосипед", 23999));
console.log(cart.countBasketPrice());

cart.addProductToCart(new Product(2, "Коньки", 13999));
console.log(cart.countBasketPrice());

cart.addProductToCart(new Product(3, "Лыжи", 5999));
console.log(cart.countBasketPrice());

cart.addProductToCart(new Product(3, "Лыжи", 5999));
console.log(cart.countBasketPrice());

cart.removeProductFromCart(2);
console.log(cart.countBasketPrice());

cart.removeProductFromCart(3);
console.log(cart.countBasketPrice());