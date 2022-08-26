Describe: Pizza(toppings, size)

Test: "It should return a Pizza object with two properties for toppings and size"

Code: let pizza = new Pizza(["olives", "garlic"], "medium");

Expected Output: Pizza { toppings: ["olives", "garlic"], size: "medium" }


-------------------------

Describe: Pizza.prototype.calculatePrice()

Test: "It should return 3 different prices based on the Pizza object size property"
Code: pizza.calculatePrice()
Expected Output:
if pizza.size = small, then expected output = 10
if pizza.size = medium, then expected output = 13
if pizza.size = medium, then expected output = 16

-------------------------