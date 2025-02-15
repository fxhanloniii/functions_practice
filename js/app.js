/* 1. printGreeting
Write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting.

console.log(printGreeting("Slimer"));
=> Hello there, Slimer! */

function printGreeting(name) { // Declares function printGreeting with the parameter name
    console.log(`What's Up ${name}`); // Console Logs String
} 
printGreeting("Frankie"); // Calls Function with "Frankie" as an argument

/* 2. reverseWordOrder
Write a function reverseWordOrder that accepts a single argument, a string. The function should return a string with the order of the words reversed. Don’t worry about punctuation.

console.log(reverseWordOrder("Ishmael me Call"));
=> "Call me Ishmael"

console.log(reverseWordOrder("I use Lâncome on my comb"));
=> "comb my on Lâncome use I" */

function reverseWordOrder(string) { // Declares function with the parameter string
    return string.split(" ").reverse().join(" "); // splits string between words into an array, reverses the array, then joins the array back into a string.
}
console.log(reverseWordOrder("Hello My Name Is Frankie")); // console logs/calling function with argument

/* 3. calculate
Write a function called calculate.

This function should take three arguments: two numbers and a string.

Name the parameters num1, num2, and operation.

If if the function is called with the third argument as “add”, it should return the sum of num1 and num2.

If if the function is called with the third argument as “sub”, it should return return num1 minus num2.

Do the same thing for multiplication “mult”, division “div”, and exponent “exp” (where num2 is the exponent of num1).

console.log(calculate(4, 3, "sub"));=> 1
console.log(calculate(4, 3, "exp"));=> 64 */

function calculate(num1, num2, operation) { // declares function calculate with parameters num1 num2 num3
    if (operation === "add") { // if/elseif to determine what operation to perform based on operation argument
        return num1 + num2;
    } else if (operation === "sub") {
        return num1 - num2;
    } else if (operation === "mult") {
        return num1 * num2;
    } else if (operation === "div") {
        return num1 / num2;
    } else if (operation === "exp") {
        return Math.pow(num1, num2); // Math.pow performs exponentation src: https://www.w3schools.com/jsref/jsref_pow.asp
    } else {
        return "Invalid Operation";
    }
}
console.log(calculate(5,5,"add"));
console.log(calculate(5,5,"sub"));
console.log(calculate(5,5,"mult"));
console.log(calculate(5,5,"div"));
console.log(calculate(5,5,"exp"));

/* 4. pandigital numbers
Note: The following question is weird, we know. In interviews, you will absolutely be given coding challenges with “weird” questions and you’ll need to be very careful when reading these types of questions to make sure you understand what you’re being asked to do.

A number of length n is 1-to-n pandigital if it makes use of all the digits 1 to n exactly once.

The number 15234 is 1-to-n pandigital because it is 5 numbers long and includes 1, 2, 3, 4, and 5.
The number 333 is not 1-to-n pandigital.
The number 0 is not 1-to-n pandigital.
The number 987654321 is 1-to-n pandigital.
Write a function that checks if a number is 1-to-n pandigital. */

function isPandigital(number) { // Declares isPandigital as function with number parameter
    let n = number.toString().length; // declares n variable, converting to string array, finding length
    let p = Array.from(number.toString()); // creates string array from number declaring p
    let t = p.sort(); // sorts p array in numerical order
    let numIsPandigital = false; // decalres numIsPandigital variable as false
    for (let i = 0; i < n; i++) { // sorts through array
        if (t[0] === "1" && t[n-1] === n.toString()) { // if t array index 0 is equal to 1, and the last index is equal to length of array - 1 (which would be highest number in the array completing the 1-n pandigital check)
            numIsPandigital = true;
        }
    }
    if (numIsPandigital) {
        console.log(`${number} is pandigital`);
    } else {
        console.log(`${number} is NOT pandigital`);
    }

}
isPandigital(987654321);

/* 5. printGreeting v2.0
There is a very rudimentary JavaScript function for receiving user input called prompt().

Usage:

    const userInput = prompt("Please enter some input");
userInput is now whatever the user entered.

There is another rudimentary JavaScript function for displaying text called alert(). You probably have heard of it. It takes a string as a parameter. Read about it on MDN.

Let’s revisit printGreeting.

First get the userInput as above. Then write a function called printGreeting2 with a parameter name that returns a greeting with the argument interpolated into the greeting as before, but this time use the alert function to display the greeting to the user. */

//let userInput = prompt("What is your name?"); // declares variable userInput and display dialog box prompting user to input text

//function printGreeting2(userInput) { // declares function taking userInput and displaying pop up box with greeting
  //alert(`Your name is ${userInput}`);
//}
//printGreeting2(userInput);

/* 6. Functions + loops: a special partnership
Write a function that, when called (“call” = “invoke”) creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space (a “white square”) or a # character (representing a black square). Hence, the characters should form a chessboard.

Calling your function should print something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
*/
function chessBoard() { // the \n creates a new line in the string
    console.log(" # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n")
}
chessBoard();

/* 7. Modify it to make any size grid.
When you have a function that generates this pattern, modify it to take a parameter size. Make the function work for any size, outputting a properly formatted grid of the given width and height. If it helps you to have this set. The very first square should always be white.

Remember to give it a nice semantic name

This problem was adapted from one in Eloquent Javascript so hopefully you’ve already seen it because you’ve been reading Eloquent Javascript. If you haven’t yet, read the first 3 chapters (this reads great on a phone, and if you take transit, this is a great thing to read on the train/bus on your way in). Homework will be assigned soon. */

function chessBoard2(width,height) {
    
}