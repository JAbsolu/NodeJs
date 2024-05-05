const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');

/**
 * @param {*} file // Takes a file as argument
 * @returns A clean readable reversed file
 */
const reverseFile = (file) => {
  // convert the string into an array of strings
  let fileArray = file.split(' '); 

  // declare the reversed variable
  let reversed; 

  // start iterating over the array of strings
  for (let i = 0; i < fileArray.length - 1; i+=1) {

    // call the reverseWord function and assin its return val to reversed
    reversed = reverseWord(fileArray[i]); 

    // replace the item at i with the reversed word;
    fileArray[i] = reversed; 
  }

  // return a clean version of the file that ensures commas 
  // are maintain where appririate and remove extra commas
  return fileArray.toString().replaceAll(',', ' ').replaceAll(',,', ',').replaceAll(' .', '. ');
}

/**
 * @param {*} word takes in a word as argument
 * @returns the word in reversed
 */
const reverseWord = (word) => {
  // initiate reversed as an empty string
  let reversed = ''; 

  // initiate i
  let i = word.length -1; 
  
  // iterate over the chars of the word
  while (i != -1) {
    // add characters to reversed
    reversed += word[i]; 
    // decrement i
    i-=1;
  }
  // return the reversed word
  return reversed; 
} 

/**
 * Read the file from the directory, and select the text file
 * if there's an error, print out the error
 * if the data exists print out the reversed text
 */
fs.readFile(path.join(__dirname, 'fedexDataEngineer.txt'), 'utf-8', (err, data) => {
  // if there is an error, print out an error
  if (err) console.log(err);

  // if there is data
  if (data) {
    
    // call the reverseFile and pass the data, save res as reversedData
    const reversedData = reverseFile(data);

    //Call the createNewFile function, pass in the file name and the data
    createNewFile("reversed", reversedData);
        
    //Call the createNewFile function, pass in the file name and the data
    createNewDesktopFile("reversed.txt", reversedData);
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

    // print out error, if there's an error
    if (err) console.log(err); 
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

    // print out error, if there's an error;
    if (err) console.log(err); 
  })
}