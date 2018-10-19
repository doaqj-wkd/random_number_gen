alert("Hi, I'm going to give you a number between two of your own choosing!");
var input1 = prompt("Please type a starting number.");
var bottomNum = parseInt(input1);
var input2 = prompt("Please type the end number.");
var topNum = parseInt(input2);
var randomNum = Math.floor(Math.random() + (topNum - bottomNum + 1)) + bottomNum;
var message = "<h1> Your random number is " + randomNum + ", which is between " + topNum + " and " + bottomNum + ".</h1>";
document.write(message);