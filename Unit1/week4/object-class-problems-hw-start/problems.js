/*
Create an object that defines a laptop. It should have the following properties:

make (string)
model (string)
ram (number)
storage (number)
*/

const laptop = {
make: 'apple',
model:'macbookAir',
ram: 8,
storage: 256,
}

/*
Create an object that defines a bottle of wine. It should have the following properties:

name (string)
grape (string, eg: Merlot)
vintage (number, eg: 2017)
volume (number, eg: 750)
amountRemaining (number, eg: 750) */

const wineBottle = {
name:'wine',
grape:'Merlot',
vintage: 2018,
volume: 700
amountRemaining: 750
//It should have the following methods:
//drink(amount) - removes the `amount` from the `amountRemaining`
//refill(amount) - adds the `amount` to the amountRemaining
//  drink(amount) {
  drink(amount) {
  this.amountRemaining -= amount + 175
  }

  drink(refill) {
  this.amountRemaining += amount + 175
  }
}
/*
write a Product class that has the following properties:

name (string)
description (string)
price (number)
*/

class Product { 
  constructor (productName, description, price){
  this.productName = productName
  this.description = description
  this.price = price
  }
}

/*
Write a Cart class that has the following properties:

contents (array)

and the following methods:

addItem(item) - adds the given item into the contents array
removeItem(item) - removes the given item from the contents array
empty() - removes all items from the contents array
getTotal() - returns the total price of all items in the contents array
*/

class Cart {
constructor(contents = [{item:'bread', price:5} ,{item:'milk',price:8} ,{item:'pasta', price:10}, {item:'eggs', price:10}, {item:'peas', price:6}, {item:'tomatoes', price:8}]){
this.contents = contents
}
// addItem(item) - adds the given item into the contents array
addItem(item){
  this.contents.push(bananas)
}
// removeItem(item) - removes the given item from the contents array
removeItem(item){
  this.contents
  // const removeItem = contents.indexof(2)
  // if (index > -1) {
  //  contents.splice(index, 1);
}
// method empty() - removes all items from the contents array
empty() {
  this.contents =[]
// contents.splice(0, contents.length)
}
// method getTotal() - returns the total price of all items in the contents array
getTotal {
  //reducers
  return this.contents.reduce(
    (accumulator, currentItem) => accumulator + currentItem.price,
  0
  )
 }
}
/*
Write a Shape class that has the following properties:

width (number)
height (number)

and the following methods:

getArea() - calculates the area of the shape
getPerimeter() - calculates the total length of all sides of the shape
*/

class Shape {
  constructor(width, height){
  this.width = width
  this.height = height
  }

getArea(){
 return this.width * this.height
}
getPerimeter(){
  return 2 * this.width + 2 * this.height
}
}
// ! please do not alter below ✋

module.exports = {
  laptop,
  wineBottle,
  Product,
  Cart,
  Shape
}
