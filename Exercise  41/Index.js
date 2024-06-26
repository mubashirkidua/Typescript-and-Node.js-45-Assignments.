/* 41. Magicians: Make a array of magician’s names. Pass the array to a
       function called show_magicians(), which prints the name of each
       magician in the array. */
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
//    An Array containing magicians name:
let magician_names = ["Adam.", "Harry.", "Patel."];
// Calling function to print magicians names:
show_magicians(magician_names);
export {};
