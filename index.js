var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(name) {
  var price = Math.random()*100
  Math.floor(price)

  cart.push({itemName: name, itemPrice: price})
  return `${name} has been added to your cart.`
}

function viewCart() {
  if(cart.length === 0){
    return "Your shopping cart is empty."
  } else if (cart.length === 1) {
    return `In your cart, you have ${name} at ${}`
  }

  }

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
