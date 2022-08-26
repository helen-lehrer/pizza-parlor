Describe: Pizza()

Test: "It should return a Pizza object with two properties for toppings and size"

Code: const pizzaOrder = new Pizza(["olives", "garlic"], "medium");

Expected Output: Pizza { toppings: ["olives", "garlic"], size: "medium" }

-------------------------

Describe: Pizza.prototype.calculatePrice()

Test: "It should return a price based on the Pizza object properties"
Code: pizzaOrder.calculatePrice()
Expected Output: <a number equal to the expected price>

-------------------------