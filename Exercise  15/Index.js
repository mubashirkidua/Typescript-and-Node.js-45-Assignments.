/* 15. Changing Guest List: You just heard that one of your guests
can’t make the dinner, so you need to send out a new set of invitations.
 You’ll have to think of someone else to invite.

 • Start with your program from Exercise 14. Add a print statement at
    the end of your program stating the name of the guest who can’t make
    it.
 • Modify your list, replacing the name of the guest who can’t make it
    with the name of the new person you are inviting.

 • Print a second set of invitation messages, one for each person who
   is still in your list.*/
let guestArray = ["Ali", "Raza", "Wali", "Khan", "Taha"];
guestArray.map((items) => (console.log(`Dear ${items} , You are invited to the dinner.`)));
let canNotAttend = "Khan";
console.log("Unfortunately", canNotAttend + " " + "can not attend the dinner.");
console.log("\nThe New List of Invitation : \n");
let newGuest = "Yasir";
guestArray[guestArray.indexOf(canNotAttend)] = newGuest;
console.log(guestArray);
guestArray.map((items) => console.log(`Dear ${items} , You are invited to the dinner.`));
export {};
