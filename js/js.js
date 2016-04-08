//business
var quantity = 0;

function Pizza(){
  this.topping = [];
  this.crust = [];
  this.sauce = [];
  this.amount = [];
}
function Toppings(){
  this.topping = ["pepperoni", "chicken", "bacon", "mushrooms", "olives", "onions", "peppers", "pineapple", "soylentGreen"];
}
function Crust(){
  this.crust = ["regular", "thin", "deep", "squarePan"];
}
function Sauce(pizzaSauce, garlicWhite, bbq){
  this.sauce = ["pizzaSauce", "garlicWhite", "bbq"];
}
function Amount(){
  this.amount = ["small", "medium", "large", "absurd"];
}
Pizza.prototype.finalOrder = function(){
  return "You ordered " + quantity + " " + this.ammount + " " + this.crust + " pizza(s) with " + this.sauce + ", and " + this.topping;
}



//user
