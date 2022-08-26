function Pizza (toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.calculatePrice() {
  let price;
  if (size === "small") {
    price = 10;
  } else if ( size === "medium") {
    price = 13;
  } else if 
}