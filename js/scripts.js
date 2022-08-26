function Pizza (toppings, size) {
  this.toppings = toppings;
  this.size = size;
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