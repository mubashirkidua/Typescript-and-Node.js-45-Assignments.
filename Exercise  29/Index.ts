/* 29. Favorite Fruit: Make a array of your favorite fruits, and then 
       write a series of independent if statements that check for 
       certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of
  fruit is in your array. If the fruit is in your array, the if block 
  should print a statement, such as You really like bananas! */

  const favorite_fruits : string[] = ["banana", "apple", "mango"];

  if (favorite_fruits.includes("banana")) {
    console.log("you really like banana!");
  }
  if (favorite_fruits.includes("apple")) {
    console.log("you really like apple!");
  }
  if (favorite_fruits.includes("mango")) {
    console.log("you really like mango!");
  }
  if (favorite_fruits.includes("strawberry")) {
    console.log("I do not like strawberry!");
  }
  if (favorite_fruits.includes("orange")) {
    console.log("I do not like orange!");
  }