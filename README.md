# Pizza Parlor

**By: Helen Lehrer**  
**Date Created: 8/26/2022**

### [Link to Site](https://helen-lehrer.github.io/pizza-parlor/)
---
### Technologies Used
* HTML
* CSS
* Bootstrap
* Javascript
---

### Description

`Pizza Parlor` is a website for a pizza company where a user can choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy, etc.), a size to order a pizza, and see the final cost.
* `Object constructors with properties are utilizied for toppings and size`
* `Prototype methods are used for calculating the cost of the pizza based on user selections.`

---

### Setup/Installation Requirements

#### To access the code in a source code editor: 
```bash
$ git clone https://github.com/helen-lehrer/pizza-parlor
$ cd pizza-parlor
$ code .
```
To use the application, simply preview index.html in your browser.

---
### Known Bugs
* none

---

### License
[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)

&copy; _Copyright 2022 Helen Lehrer_

---
### TDD
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

Describe: Pizza.prototype.calculateFinalPrice(basePrice)

Test: "It should add onto the returned value of Pizza.prototype.calculateBasePrice() based on the amount of toppings selected and return a final price"

Code: pizza.calculateFinalPrice(basePrice);

Expected Output:
basePrice + (2 * (pizza.toppings.length))

-------------------------

Describe: PizzaDatabase()

Test: "It should return a PizzaDatabase object with a pizzas property with the value of an empty object"

Code: const pizzaDatabase = new PizzaDatabase();

Expected Output: PizzaDatabase { pizzas: {}}

-------------------------

Describe: PizzaDatabase.prototype.addPizza(pizza)

Test: "It should add a Pizza object to the pizzas property of the pizzaDatabase object"

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

Code: pizzaDatabase.findPizza(1)

Expected Output:
Pizza {toppings: Array(2), size: "medium"}



