Describe: Pizza(toppings, size)

Test: "It should return a Pizza object with two properties for toppings and size"

Code: let pizza = new Pizza(["olives", "garlic"], "medium");

Expected Output: Pizza { toppings: ["olives", "garlic"], size: "medium" }


-------------------------

Describe: Pizza.prototype.calculateBasePrice()

Test: "It should return 3 different prices based on the Pizza object size property"

Code: pizza.calculateBasePrice();

Expected Output:
if pizza.size = small, then expected output = 10
if pizza.size = medium, then expected output = 13
if pizza.size = medium, then expected output = 16

-------------------------

Describe: Pizza.prototype.calculateFinalPrice(sizePrice)

Test: "It should add onto the returned value of Pizza.prototype.calculateSizePrice() based on the amount of toppings selected and return a final price"

Code: pizza.calculateFinalPrice(sizePrice);

Expected Output:
sizePrice + (2 * (pizza.toppings.length))

-------------------------

Describe: PizzaDatabase()

Test: "It should return a PizzaDatabase object with a pizzas property with the value of an empty object"

Code: const pizzaDatabase = new PizzaDatabase();

Expected Output: PizzaDatabase { pizzas: {}}

-------------------------

Describe: PizzaDatabase.prototype.addPizza(pizza)

Test: "It should add Pizza object to the pizzas property of the pizzaDatabase object"

Code: 
pizzaDatabase.addPizza(pizza);
pizzaDatase;

Expected Output: PizzaDatabase { pizzas: pizza }

-------------------------

Describe: PizzaDatabase.prototype.assignId(pizza)

Test: "It should assign an ID of an ascending number value as keys for pizza objects that are added to the database object."

Code: 
pizzaDatabase.addId(pizza);
pizzaDatabase;

Expected Output:
{ currentId: 1
pizzas: {1: Pizza} }

-------------------------

Describe: PizzaDatabase.prototype.findPizza(id)

Test: "It should return the pizza object with the matching id property"

Code: pizzaDatabase.findPizza(id)

Expected Output:
Pizza {toppings: Array(2), size: "medium"}



