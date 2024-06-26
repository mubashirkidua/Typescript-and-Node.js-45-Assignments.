/* 23. Conditional Tests: Write a series of conditional tests.
        Print a statement describing each test and your prediction for
         the results of each test. Your code should look something like
          this:

        let car = 'subaru';

        console.log("Is car == 'subaru'? I predict True.")

        console.log(car == 'subaru')

       • Look closely at your results, and make sure you understand
         why each line evaluates to True or False.

       • Create at least 10 tests. Have at least 5 tests evaluate to
          True and another 5 tests evaluate to False. */
let car = "subaru";
console.log("\n -- For five True conditions.");
// Condition 1.
console.log("\n Is car == 'subaru'? I predict True.");
console.log(car === 'subaru');
// Condition 2.
console.log("\n Is car !== 'toyota'? I predict True.");
console.log(car !== 'toyota');
// Condition 3.
console.log("\n Is the length of car > 4? I predict True.");
console.log(car.length > 4);
// Condition 4.
console.log("\n Is the length of car <= 6? I predict True.");
console.log(car.length <= 6);
// Condition 5.
console.log("\n Does car start with 's'? I predict True.");
console.log(car.startsWith('s'));
console.log("\n -- For five False conditions.");
// Condition 1.
console.log("\n Is car == 'honda'? I predict False.");
console.log(car === 'honda');
// Condition 2.
console.log("\n Is car in uppercase? I predict False.");
console.log(car.toUpperCase() === car);
// Condition 3.
console.log("\n Is car === 'Subaru'? I predict False.");
console.log(car === 'Subaru');
// Condition 4.
console.log("\n Is car == 'Audi'? I predict False.");
console.log(car === 'Audi');
// Condition 5.
console.log("\n Is the length of car === 7 ? I predict False.");
console.log(car.length === 7);
export {};
