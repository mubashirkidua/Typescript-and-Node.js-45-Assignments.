/* 44. Sandwiches: Write a function that accepts a array of items a
       person wants on a sandwich. The function should have one
       parameter that collects as many items as the function call
       provides, and it should print a summary of the sandwich that is
       being ordered. Call the function three times, using a different
       number of arguments each time. */
function makeSandwich(...items) {
    console.log("\n Making a sandwich with the following items: \n");
    items.forEach((singleItem) => console.log(singleItem));
    console.log("\n Now Enjoy Sandwich.");
}
// Calling function three times with three different number of arguments:
makeSandwich("Chicken.", "Eggs.", "Mayo.", "Cheese.");
makeSandwich("Bread.", "Butter.");
makeSandwich("Bread.", "Butter.", "Mayo.", "Eggs.", "Cheese.", "Chicken.", "Lettuce.", "Tomato.");
export {};
