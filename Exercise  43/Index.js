/* 43. Unchanged Magicians: Start with your work from Exercise 40.
       Call the function make_great() with a copy of the array of
       magicians’ names. Because the original array will be unchanged,
       return the new array and store it in a separate array. Call
       show_magicians() with each array to show that you have one array
       of the original names and one array with the Great added to each
       magician’s name. */
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
// Function to make magicions great through .map() it will modify an Array:
function make_great(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
// Define an Array with magicians name:
let magician_names = ["Adam.", "Harry.", "Patel."];
// Making a copy of origional Array through.slice() function:
let copy_magicion_names = magician_names.slice();
// Modify the copied array to include "The Great" with thier names:
let copy_great_magicions = make_great(copy_magicion_names);
// show both arrays origional and copied:
//  Origional
console.log("Origional Array\n");
show_magicians(magician_names);
// Copied:
console.log("\nCopied Array\n");
show_magicians(copy_great_magicions);
export {};
