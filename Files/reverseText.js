const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');

/**
 * @param {*} file // Takes a file as argument
 * @returns A clean readable reversed file
 */
const reverseFile = (file) => {
  let fileArray = file.split(' '); 
  let reversed; 

  // start iterating over the array of strings
  for (let i = 0; i < fileArray.length - 1; i+=1) {
    // call the reverseWord function and assin its return val to reversed
    reversed = reverseWord(fileArray[i]); 
    // replace the item at i with the reversed word;
    fileArray[i] = reversed; 
  }

  // return clean version file, ensure commas are maintain where needed, remove extra commas
  return fileArray.toString().replaceAll(',', ' ').replaceAll(',,', ',').replaceAll(' .', '. ');
}

/**
 * @param {*} word takes in a word as argument
 * @returns the word in reversed
 */
const reverseWord = (word) => {
  let reversed = ''; 
  let i = word.length -1; 

  // iterate over the chars of the word
  while (i != -1) {
    reversed += word[i]; // add characters to reversed
    i-=1;
  }
  
  return reversed; // return the reversed word
} 

// Read the file from the directory
fs.readFile(path.join(__dirname, 'fedexDataEngineer.txt'), 'utf-8', (err, data) => {
  if (err) console.log(err); // print out an error

  if (data) {
    // call the reverseFile and pass the data, save res as reversedData
    const reversedData = reverseFile(data);
    //Call the createNewFile function, pass in the file name and the data
    createNewFile("reversed", reversedData);
    //Call the createNewFile function, pass in the file name and the data
    createNewDesktopFile("reversed", reversedData);
  }
})

/**
 * @param {*} newFileName takes in a new filename
 * @param {*} data takes in the data to be added to the new file
 * creates a new file in the current directory
 */
const createNewFile = (newFileName, data) => {
  // if the file doesn't have an extension, it defaults to a txt file
  if (newFileName.includes('.') !== true) newFileName = `${newFileName}.txt`;
  // create the file in the current dir
  fs.writeFile(`${__dirname}/${newFileName}`, data , (err) => {
    if (err) console.log(err); // print out error
  })
}

/**
 * @param {*} newFileName 
 * @param {*} data 
 * creates a new file in desktop
 */
const createNewDesktopFile = (newFileName, data) => {
  // if the file doesn't have an extension, it defaults to a txt file
  if (newFileName.includes('.') !== true) newFileName = `${newFileName}.txt`;
  // create the file in desktop
  fs.writeFile(`${os.homedir()}/Desktop/${newFileName}`, data , (err) => {
    if (err) console.log(err); // print out error
  })
}