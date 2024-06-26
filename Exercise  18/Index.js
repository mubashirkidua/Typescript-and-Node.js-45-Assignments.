//    18. Seeing the World: Think of at least five places in the world 
//         you’d like to visit.
//   • Store the locations in a array. Make sure the array is not in 
//    alphabetical order.
let famousplaces = ["Madina", "Switserland", "Australia", "India", "Paris"];
// • Print your array in its original order.
console.log(" Origional order,   " + famousplaces + "\n");
// • Print your array in alphabetical order without modifying the actual 
//    list.
console.log("Alphabetical order,  " + [...famousplaces].sort() + "\n");
// • Show that your array is still in its original order by printing it.
console.log(" Origional order,  " + famousplaces + "\n");
// • Print your array in reverse alphabetical order without changing the 
//   order of the original list.
console.log("reverse alphabetical order,  " + [...famousplaces].sort().reverse() + "\n");
// • Show that your array is still in its original order by printing it 
//    again.
console.log(" Origional order,   " + famousplaces + "\n");
// • Reverse the order of your list. Print the array to show that its order
//    has changed.
console.log("Reverse the order of the list ,  " + famousplaces.reverse() + "\n");
// • Reverse the order of your list again. Print the list to show it’s back
//    to its original order.
console.log("Reverse the order of the list,  " + famousplaces.reverse() + "\n");
// • Sort your array so it’s stored in alphabetical order. Print the array 
//   to show that its order has been changed.
console.log("Alphabetical order,  " + famousplaces.sort() + "\n");
// • Sort to change your array so it’s stored in reverse alphabetical 
//    order. Print the list to show that its order has changed. 
console.log("alphabetical order,  " + famousplaces.sort().reverse() + "\n");
export {};
