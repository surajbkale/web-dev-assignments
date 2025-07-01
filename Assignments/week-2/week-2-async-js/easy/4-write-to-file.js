// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");
const data = "My name is suraj kale";
fs.writeFile("a.txt", data, "utf-8", () => {
  console.log("Data is written");
});
