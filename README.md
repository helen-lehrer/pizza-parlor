Describe: Pizza(toppings, size)

Test: "It should return a Pizza object with two properties for toppings and size"

Code: let pizza = new Pizza(["olives", "garlic"], "medium");

Expected Output: Pizza { toppings: ["olives", "garlic"], size: "medium" }


-------------------------

Describe: Pizza.prototype.calculateSizePrice()

Test: "It should return 3 different prices based on the Pizza object size property"

Code: pizza.calculateSizePrice()

Expected Output:
if pizza.size = small, then expected output = 10
if pizza.size = medium, then expected output = 13
if pizza.size = medium, then expected output = 16

-------------------------

Describe: Pizza.prototype.calculateToppingsPrice(sizePrice)

Test: "It should add onto the returned value of Pizza.prototype.calculateSizePrice() based on the amount of toppings selected and return a final price"

Code: pizza.calculateToppingsPrice(sizePrice)

Expected Output:
sizePrice + (2 * (pizza.toppings.length))

-------------------------

Describe: PizzaDatabase()

Test: "It should return a PizzaDatabase object with an empty pizzas property"

Code: let pizzaDatabase = new PizzaDatabase()

Expected Output: PizzaDatabase { pizzas: }


