/* 16. More Guests: You just found a bigger dinner table, so now more 
    space is available. Think of three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to 
   the end of your program informing people that you found a bigger 
   dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add 
  one new guest to the end of your list. • Print a new set of 
  invitation messages, one for each person in your list. */

let guestArray : string [] = ["Ali", "Raza", "Wali", "Khan", "Taha"];
let canNotAttend : string = "Wali";

let newGuest : string = "Amir";

guestArray[guestArray.indexOf(canNotAttend)] = newGuest;
console.log(guestArray);

 guestArray.map((items) =>


  console.log(`Dear ${items}, I found a bigger dinner table so I am Inviting some more people.`));
  
let guestBeg : string = "Faisal";
guestArray.unshift(guestBeg);
console.log(guestArray);

let middleGuest : string = "Faizan";
let middleIndex = guestArray.length/3
guestArray.splice(middleIndex,0,middleGuest);
console.log(guestArray);

guestArray.push("Faraz");
console.log(guestArray);

guestArray.map((items) =>
console.log (`Dear ${items}, you are Invited in the more people list on dinner.`));

