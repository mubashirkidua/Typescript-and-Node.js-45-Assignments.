/* 17. Shrinking Guest List: You just found out that your new dinner 
        table won’t arrive in time for the dinner, and you have space 
        for only two guests.
• Start with your program from Exercise 16. Add a new line that prints 
   a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain
   in your list. Each time you pop a name from your list, print a 
   message to that person letting them know you’re sorry you can’t 
   invite them to dinner.

• Print a message to each of the two people still on your list, letting
  them know they’re still invited.

• Remove the last two names from your list, so you have an empty list.
 Print your list to make sure you actually have an empty list at the end
  of your program. */

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

console.log("Unfortunatelt, the new dinner table will not arrive on time, so I can invite only two guests for the dinner.");

while(guestArray.length > 2) {
   let removeGuest = guestArray.pop();
   console.log(`Sorry, ${removeGuest} I can not invite you for the dinner`);
}
console.log("Finally,Invitations for the last two guests.");

guestArray.forEach(lasttwo => console.log(`Congratulation ${lasttwo}, You are still invite for the dinner.`));

guestArray.pop();
guestArray.pop();

console.log(guestArray);

