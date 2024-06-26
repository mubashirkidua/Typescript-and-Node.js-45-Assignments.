/* 37. Large Shirts: Modify the make_shirt() function so that shirts
       are large by default with a message that reads I love TypeScript.
        Make a large shirt and a medium shirt with the default message,
         and a shirt of any size with a different message. */
function make_shirt(size = "Large", printMessage = "I Love Typescript") {
    console.log(`Creating a ${size} shirt with ${printMessage} print on shirt.`);
}
//  Calling a function with default values:
make_shirt();
// Calling a function now with Medium size and default message:
make_shirt("Medium");
// Calling a function now with Small size and also different print Message:
make_shirt("Small", "I Love Javascript");
export {};
