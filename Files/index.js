const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

// Read the file
const fileName = "lorem.txt"; // name of a file

fs.readFile(path.join(__dirname, fileName), "utf-8", (err, data) => {
  if (err) console.error(err); // print out an error message
  // Append the data from the text file to data.txt
  fs.appendFile(`${__dirname}/data.txt`, `\Data from ${fileName}\n\n${data}`, (err) => {
    if (err) console.error(err); // if there's an error print the error
  });
})


// Reand a file and then append its data to a text file
fs.readFile(path.join(__dirname, fileName), "utf-8", (err, data) => {
  if (err) console.error(err); // print out an error message
  // Append the data from the text file to data.txt
  fs.appendFile(`${__dirname}/data.txt`, `Data from ${fileName}\n\n${data}`, (err) => {
    if (err) console.error(err); // if there's an error print the error
  });
})

//Save text data from data.txt to your local desktop
const HOME_DIR = os.homedir();
fs.readFile(path.join(__dirname, fileName), "utf-8", (err, data) => {
  if (err) console.error(err); // print out an error message
  // Append the data from the text file to data.txt
  fs.appendFile(`${HOME_DIR}/Desktop/newData.txt`, `Data from ${fileName} in ${__dirname}\n\n${data}`, (err) => {
    if (err) console.error(err); // if there's an error print the error
    console.log("Data saved on Desktop");
  });
})

// Exit on uncaught errors
process.on("uncaughtException", (err) => {
  console.error(`There is an uncaught error: ${err}`);
  process.exit(1);
});