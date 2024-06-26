/* 24. More Conditional Tests: You don’t have to limit the number of
       tests you create to 10. If you want to try more comparisons,
       write more tests. Have at least one True and one False result
        for each of the following: */
let apple = "apple";
let uppercaseApple = "Apple";
let ten = 10;
let twenty = 20;
let fruits = ["apple", "banana", "orange"];
//  • Tests for equality and inequality with strings
console.log("Is apple equal to apple?");
console.log(apple == "apple");
console.log("\n Is apple not equal to apple?");
console.log(apple != "apple");
//  • Tests using the lower case function
console.log("\n Is APPLE equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");
console.log("\n Is APPLE not equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");
/*  • Numerical tests involving equality and inequality, greater than and
      less than, greater than or equal to, and less than or equal to  */
//  Equal to
console.log("\n Is ten equal to twenty?");
console.log(ten == twenty);
//   Not Equal to
console.log("\n Is ten not Equal to twenty?");
console.log(ten != twenty);
//  Greater than
console.log("\n Is ten greater than zero?");
console.log(ten > 0);
//   Less than
console.log("\n Is twenty less than 10?");
console.log(twenty < 10);
//   Greater than or Equal to
console.log("\n Is ten greater than or Equal to 5?");
console.log(ten >= 5);
//   Less than or Equal to
console.log("\n twenty is less than or Equal to 10");
console.log(twenty <= 10);
//   • Tests using "and" and "or" operators
//  Using && (and)
console.log("\n twenty is not Equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);
console.log("\n twenty is not Equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 30);
// Using || (OR)
console.log("\n 20 is greater than 50 OR 20 is Equal to 20");
console.log(20 > 50 || 20 == 20);
console.log("\n 20 is greater than 50 OR 20 is not Equal to 20");
console.log(20 > 50 || 20 != 20);
//   • Test whether an item is in a array
console.log("\n Is orange include in my Fruits array");
console.log(fruits.includes("orange"));
//   • Test whether an item is not in a array */
console.log("\n Is orange not include in my Fruits array");
console.log(!fruits.includes("orange"));
export {};
