/* 3.Name Cases: Store a person’s name in a variable, and then print
that person’s name in lowercase, uppercase, and titlecase.*/
let personName = "I Love Karachi";
// Lower Case,
console.log("lowercase:", personName.toLowerCase());
// Uppercase,
console.log("uppercase:", personName.toUpperCase());
// Titlecase,
console.log("titlecase:", personName.replace(/\b\w/g, c => c.toUpperCase()));
export {};
