// создадим класс для корзины товаров
const Cart = function(items = [], totalPrice = 0, count = 0) {
  this.items = items;
  this.totalPrice = totalPrice;
  this.count = count;
};

// создадим класс для товаров
const Goods = function(price = 0, productName = 'noname', discont = 0) {
  this.price = price;
  this.productName = productName;
  this.discont = discont;
};

// создадим подклассы, которые наследуются из Goods

// добавить свойство калории
const FoodGoods = function(price, productName, discont, calories) {
  // наследуем от свойства от Goods
  Goods.call(this, price, productName, discont),

    this.calories = calories;
};

// добавить свойство материал
const СlothingGoods = function(price, productName, discont, material) {
  // наследуем от свойства от Goods
  Goods.call(this, price, productName, discont),

    this.material = material;
};

// добавить свойство тип техники
const TechnicsGoods = function(price, productName, discont, tehnic) {
  // наследуем от свойства от Goods
  Goods.call(this, price, productName, discont),

    this.tehnic = tehnic;
};


// принимает объект (товар), записывает его в массив items
Cart.prototype.add = function({ productName, price, currentCount = 1, calories = 0, material = '', tehnic = ''}) {
  //этот метод формирует объект из полученных параметров и добавляет его в cart
  this.items.push({ productName, price, currentCount, calories, material, tehnic });
  
  // увеличить количество товаров в корзине на количество товара 
  this.increaseCount(currentCount);
  this.calculateItemPrice();
};

// Принимает один параметр(число). Увеличивает свойство count на это число
Cart.prototype.increaseCount = function(number) {
  this.count += number;
};

//посчитать общую стоимость товаров.
Cart.prototype.calculateItemPrice = function() {
  //пересчитывает стоимость всей корзины используя метод reduce и записывает значение в totalPrice
  this.items.reduce((total, item) => {  
   return this.totalPrice = total + item.price * item.currentCount; 
  }, 0);
};

//Очищает полностью нашу корзину, возвращает все значения в изначальные
Cart.prototype.clear = function() {
  this.items = [];
  this.totalPrice = 0;
  this.count = 0;
};

// Выводит в консоль JSON строку из массива items и на следующей строке выводит общую стоимость корзины
Cart.prototype.print = function() {
  console.log(JSON.stringify(this.items));
  console.log(JSON.stringify(this.totalPrice));
};

const cart1 = new Cart();

const good1 = new Goods(50000, 'television set', 10);

const good2 = new FoodGoods(100, 'chips', 0, 400);

const good3 = new СlothingGoods(1000, 'T-shirt', 0, 'cotton');

const good4 = new TechnicsGoods(12000, 'AirPods3', 5, 'headphones');

cart1.add(good1);
cart1.add(good2);
cart1.add(good3);
cart1.add(good4);

cart1.print();

