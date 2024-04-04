const fs = require("node:fs");
const fsPromises = require("node:fs").promises;
const os = require("node:os");
const path = require("node:path");

/**
 * Create a new directory if it doesn't exist
 */

if (!fs.existsSync("./TestDir")) {
  fs.mkdir("./TestDir", (err) => {
    if (err) console.error(err);
    console.log("The new directory has been created!");
  })
}

/**
 * Read a file, create a new js file in the Test directory and write the text file to the new js file
 */

const operation = async () => {
  try {
    const data = await fsPromises.readFile(path.join(__dirname, "script.txt"), "utf-8");

    // If the file exists, delet it and then create a new one with the file
    if (fs.existsSync(`${__dirname}/TestDir/index.js`)) {
      // Delete the file if it exists
      fs.unlink(`${__dirname}/TestDir/index.js`, (err) => {
        if (err) console.error(err); // throw an error, if there is one
      })

      //Write the file. (Write file automatically create a new file, if it doesnt exist)
      fs.writeFile(`${__dirname}/TestDir/index.js`, data, (err) => {
        if (err) console.log(err); // Throw an error
        console.log("New js file created!"); // Print a message to confirm the file was created
      })

    } else {
      //Else it doesnt exist, create a new index js file
      fs.writeFile(`${__dirname}/TestDir/index.js`, data, (err) => {
        if (err) console.log(err); // throw an error, if there is one
        console.log("New js file created!"); // print a message to confirm that the js file was created
      })
    }
  } catch (error) {
    console.error(error);
  }
}

operation(); // Invoke the operation function