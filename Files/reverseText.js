const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');

/**
 * @param {*} file // takes a file as argument
 * @returns A clean readable reversed file
 */
const reverseFile = (file) => {
  let fileArray = file.split(' '); //convert the string into an array of strings
  let reversed; // declare the reversed variable
  /**
   * Start iterating over the array of strings
   */
  for (let i = 0; i < fileArray.length - 1; i+=1) {
    // call the reverseWord function and assin its return val to reversed
    reversed = reverseWord(fileArray[i]); 
    fileArray[i] = reversed; // replace the item at i with the reversed word;
  }
  /**
   * return a clean version of the file that ensures commas 
   * are maintain where appririate and remove extra commas
   */
  return fileArray.toString().replaceAll(',', ' ').replaceAll(',,', ',').replaceAll(' .', '. ');
}

/**
 * @param {*} word takes in a word as argument
 * @returns the word in reversed
 */
const reverseWord = (word) => {
  let reversed = ''; // initiate reversed as an empty string
  let i = word.length -1; // initiate i
  
  // iterate over the chars of the word
  while (i != -1) {
    reversed += word[i]; //add characters to reversed
    i-=1;
  }
  return reversed; //return the reversed word
} 

/**
 * Read the file from the directory, and select the text file
 * if there's an error, print out the error
 * if the data exists print out the reversed text
 */
fs.readFile(path.join(__dirname, 'fedexDataEngineer.txt'), 'utf-8', (err, data) => {
  if (err) console.log(err);
  if (data) {
    const reversedData = reverseFile(data);
    createNewFile("reversed", reversedData);
    createNewDesktopFile("reversed.txt", reversedData);
  }
})

/**
 * @param {*} newFileName takes in a new filename
 * @param {*} data takes in the data to be added to the new file
 * Creates a new file in the current directory
 */
const createNewFile = (newFileName, data) => {
  // if the file doesn't have an extension, it defaults to a txt file
  if (newFileName.includes('.') !== true) newFileName = `${newFileName}.txt`;
  //Create the file in the current dir
  fs.writeFile(`${__dirname}/${newFileName}`, data , (err) => {
    if (err) console.log(err); // print out error, if there's an error
  })
}

/**
 * @param {*} newFileName 
 * @param {*} data 
 * Creates a new file in desktop
 */
const createNewDesktopFile = (newFileName, data) => {
    // if the file doesn't have an extension, it defaults to a txt file
  if (newFileName.includes('.') !== true) newFileName = `${newFileName}.txt`;
  //Create the file in desktop
  fs.writeFile(`${os.homedir()}/Desktop/${newFileName}`, data , (err) => {
    if (err) console.log(err); // print out error, if there's an error;
  })
}