// ! 💻 Remember when working in the browser, be sure to save the changes in this file, and refresh the browser window to run the code again.

// ! 👨‍🏫 Read the readme carefully, and practice using "window.prompt()" to gather user input
let calculation = true
// * Write your code below!
while(calculation) {
// Taking user input using prompt
let num1 = prompt("What's your first number?");
let num2 = prompt("What's your second number?");
//be able to +, -, / and *
let operator = window.prompt("What would your like your numbers to do? Select +,-,/ or *?");
if (operator === '+'){
    window.alert(num1 + num2)
}if (operator === '-'){
     window.alert(num1-num2)
}if (operator === '/'){
    window.alert(num1/num2)
} if (operator === '*'){
    window.alert(num1 * num2)
}
calculation = window.confirm('You like to go again?')
}
console.log('Thanks, goodbye!')