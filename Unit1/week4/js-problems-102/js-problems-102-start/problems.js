/* eslint-disable no-unused-vars */


// ? write a function to remove all empty values (null, undefined, '', NaN, false) EXCEPT 0 from an array.
// ? It should handle complex data types eg: {}, [] etc.
// ? eg: [0, false, [], undefined, {}, NaN, 'Kevin'] => [0, [], {}, 'Kevin'];
function removeBlank(array) {

 const array = [0, false, [], undefined, {}, NaN, 'Kevin'];
 array = array.filter(item => item);
 console.log(array);
// contents.splice(0, contents.length)
}

// ? write a function to return a random element from an array
// ? eg: [1,"elephant", "apple", 67] => "elephant"
function randomElement(array) {
const array = [1,"elephant", "apple", 67]
return array[Math.floor(Math.random()* array.length)];
}

// ? write a function that returns the second lowest and second highest number in an array
// ? eg: [1,2,3,4,5,6,7,8] => [2,7]
//wasnt sure how to attempt this
function secondLowestSecondHighest(array) {
numbersArray = [0,1,2,3,4,5,6,7,8,9,10]
size = numbersArray.length
      for (int i = 0; i< size; i++) {
         for(int j= i+1; j< size; j++) {
            if(array[i]>array[j]) {
               temp = array[i]
               array[i] = array[j]
               array[j] = temp
            }
         }
      }
}

// ? write a function that will convert a price into coins needed to make up that price
// ? the coins available are 1, 2, 5, 10, 20, 50, 100
// ? the function should use the smallest number of coins possible
// ? eg: coins(1.99) => [100, 50, 20, 20, 5, 2, 2]
function coins(price) {
const coinsAvailable = [1, 2, 5, 10, 20, 50, 100]
const getPrice = (priceInCoins) => {
  return coinsAvailable.reverse().map(coin => {
      let amountCoin = Math.floor(priceInCoins/coin)
      priceInCoins -= amountCoin * coin
      return amountCoin
  }).reverse()
}
}

// ? write a function to merge two arrays and remove duplicates
// ? eg: mergeUnique([9,8,8,9], [7,8,8,7]) => [9,8,7]
function mergeUnique(arr1, arr2) {
  let array1 = array.concat();
  for (let i =0; i<a.lenght; i++) {
    for(let j=i+1; j<a.lenght; j++) {
      if (a[i] === a[j]
        a.splice(j--, 1)
    }
  }
  return a;
} 
let array1 = [9,8,8,9]
let array2 = [7,8,8,7]
//merging array 1 and array 2
let array3 = arrayUnique(array1.concat(array2))
}

// ? write a function to find the first n fibonacci numbers
// ? the fibonacci sequence is a series of numbers, each number is the sum of the last two
// ? 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 etc...
// ? eg: fibonacci(4) => [0,1,1,2]; fibonacci(8) => [0, 1, 1, 2, 3, 5, 8, 13];
// taken from stack academy
function fibonacci(n) {
  let fibNumber = [];
  let [a, b] = [0, 1]; // array destructuring

  while (a < n) {
    fibNumber.push(a);
    [a, b] = [b, a + b];
  }
  
  return fibNumber;
}


module.exports = {
  removeBlank,
  randomElement,
  secondLowestSecondHighest,
  coins,
  mergeUnique,
  fibonacci
}
