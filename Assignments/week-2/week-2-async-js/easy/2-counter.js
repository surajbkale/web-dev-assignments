// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let counter = 0;

function updateCounter() {
  counter++;
  console.log(counter);
  setTimeout(updateCounter, 1000);
}

updateCounter();
// (Hint: setTimeout)
