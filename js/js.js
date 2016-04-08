//business
var quantity = 0;

function Pizza(){
  this.topping = [];
  this.crust = [];
  this.sauce = [];
  this.amount = [];
}
function Toppings(pepperoni, chicken, bacon, mushrooms, olives, onions, peppers, pineapple, soylentGreen){
  this.pepperoni = pepperoni;
  this.chicken = chicken;
  this.bacon = bacon;
  this.mushrooms = mushrooms;
  this.olives = olives;
  this.onions = onions;
  this.peppers = peppers;
  this.pineapple = pineapple;
  this.soylentGreen = people;
}
function Crust(regular, thin, deep, squarePan){
  this.regular = regular;
  this.thin = thin;
  this.deep = deep;
  this.squarePan = squarePan;
}
function Sauce(pizzaSauce, garlicWhite, bbq){
  this.pizzaSauce = standard;
  this.garlicWhite = whiteSauce;
  this.bbq = barbeque;
}
function Amount(small, medium, large, absurd){
  this.small = sm;
  this.medium = md;
  this.large = lg;
  this.absurd = xl;
}
Pizza.prototype.finalOrder = function(){
  return "You ordered " + quantity + " " + this.ammount + " " + this.crust + " pizza(s) with " + this.sauce + ", and " + this.topping;
}
