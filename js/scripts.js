//Business Logic
function Pizza (toppings, size, id) {
  this.toppings = toppings;
  this.size = size;
  this.id = 0; 
}

Pizza.prototype.calculateSizePrice = function () {
  let price;
  if (this.size === "small") {
    price = 10;
  } else if (this.size === "medium") {
    price = 13;
  } else if (this.size === "large") {
    price = 16;
  } else {
    price = "size not selected";
  }
  return price;
};

Pizza.prototype.calculateToppingsPrice = function (sizePrice) {
  let price;
  if (this.toppings.length === 0) {
    price = sizePrice;
  }
  price = sizePrice + (2 * this.toppings.length);
  return price;
};

function PizzaDatabase () {
  this.pizzas = {};
  this.currentId = 0;
}

PizzaDatabase.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
}

PizzaDatabase.prototype.addPizza = function (pizza) {
  pizza.id = this.assignId();
  this.pizzas[pizza.id] = pizza;
}

PizzaDatabase.prototype.findPizza = function (id) {
  if (this.pizzas[pizza.id] !== undefined) {
    return this.pizzas[pizza.id];
  }
  return false;
};

//UI Logic
function handleFormSubmission (event) {
  event.preventDefault();
  let size = document.getElementById("size-select").value;
  let toppings = document.getElementById("")
  let pizza = new Pizza (toppings, size);
}

window.addEventListener("load", function () {
  const orderForm = document.getElementById("order-form");
  orderForm.addEventListener("submit", handleFormSubmission);
})
