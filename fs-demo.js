const fs = require("fs");

const fileContents = fs.readFileSync("message.txt");
console.log(fileContents.toString());

const newFileContents = "Hello World";
fs.writeFileSync("message.txt", newFileContents);

const newFileContentsRead = fs.readFileSync("message.txt");
console.log(newFileContentsRead.toString());
