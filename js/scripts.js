//Business Logic
function Pizza (toppings, size) {
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
    price = " size not selected";
  }
  return price;
};

Pizza.prototype.calculateFinalPrice = function () {
  let basePrice = this.calculateBasePrice();
  let price;
  if (this.toppings.length === 0) {
    price = basePrice;
    return price;
  } else if (basePrice === " size not selected") {
    return " size not selected";
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

//UI Logic
function resetForm () {
  const form = document.getElementById("order-form");
  form.reset();
}

function handleFormSubmission () {
  let pizzaDatabase = new PizzaDatabase();
  let size = document.getElementById("size-select").value;
  let toppingsSelections = document.querySelectorAll("input[name=toppings-checkbox]:checked");
  let toppingsSelectionsArray = Array.from(toppingsSelections);

  let pizza = new Pizza (toppingsSelectionsArray, size);
  pizzaDatabase.addPizza(pizza);
  let price = pizza.calculateFinalPrice(pizza.calculateBasePrice());
  const priceDisplay = document.getElementById("price-display");
  priceDisplay.innerText = price;

  const orderedPizzaDisplay = document.getElementById("ordered-pizza-display");
  orderedPizzaDisplay.removeAttribute("class", "hidden");
  const li = document.createElement("li");
  const ol = document.getElementById("ol");
  ol.append(li);

  let displayToppingsArray = toppingsSelectionsArray.map(function(input) {
    return input.value;
  });

  if (price !== " size not selected") {
    li.innerText = "size: " + size + " toppings: " + displayToppingsArray.join(", ");
    const orderedPizzaList = document.getElementById("ordered-pizza-list");
    orderedPizzaList.append(ol);
  }

  resetForm();
}

function submitEvent(event) {
  event.preventDefault();
  handleFormSubmission();
}

window.addEventListener("load", function () {
  const orderForm = document.getElementById("order-form");
  orderForm.addEventListener("submit", submitEvent);
})
