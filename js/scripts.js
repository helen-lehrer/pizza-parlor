//Business Logic
function Pizza (toppings, size, id) {
  this.toppings = toppings;
  this.size = size;
  this.id = 0; 
}

Pizza.prototype.calculateBasePrice = function () {
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

Pizza.prototype.calculateFinalPrice = function (basePrice) {
  let price;
  if (this.toppings.length === 0) {
    price = basePrice;
  }
  price = basePrice + (2 * this.toppings.length);
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
let pizzaDatabase = new PizzaDatabase();

function handleFormSubmission (event) {
  event.preventDefault();
  let size = document.getElementById("size-select").value;
  let toppingsSelections = document.querySelectorAll("input[name=toppings-checkbox]:checked");
  let toppingsSelectionsArray = Array.from(toppingsSelections);

  let pizza = new Pizza (toppingsSelectionsArray, size);
  pizzaDatabase.addPizza(pizza);
  let price = pizza.calculateFinalPrice(pizza.calculateBasePrice());
  const priceDisplay = document.getElementById("price-display");
  priceDisplay.innerText = price;
}

window.addEventListener("load", function () {
  const orderForm = document.getElementById("order-form");
  orderForm.addEventListener("submit", handleFormSubmission);
})
