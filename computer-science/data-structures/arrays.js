// Array of strings in JS
const array = ["Corey Taylor", "Mick Thomson", "Paul Gray"];

console.log("1:", array); // This command will show our array to terminal -> ["Corey Taylor", "Mick Thomson", "Paul Gray"]

// We can find element using index
const secondElement = array[1];
console.log("2:", secondElement); // Will show in console second value of array -> "Mick Thomson"

// For adding element to end of list we should use push method
array.push("Joey Jordison");
console.log("3:", array); // Now we will see 4 elements in our array -> ["Corey Taylor", "Mick Thomson", "Paul Gray", "Joey Jordison"]

// Removing an element from end of array
array.pop();
console.log("4:", array); // We remove last element from array and now it will show again -> ["Corey Taylor", "Mick Thomson", "Paul Gray"]

// and etc...