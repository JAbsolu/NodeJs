const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');

/**
 * @param {*} file // Takes a file as argument
 * @returns A clean readable decrypted file
 */
const decryptFile = (file) => {
  // convert the string into an array of strings
  let fileArray = file.split(' '); 

  // declare the decrypted variable
  let decrypted; 

  // start iterating over the array of strings
  for (let i = 0; i < fileArray.length; i+=1) {

    // call the decrypt function and assin its return val to decrypted
    decrypted = decrypt(fileArray[i]); 

    // replace the item at i with the decrypted word;
    fileArray[i] = decrypted; 
  }

  // return a clean version of the file that ensures commas 
  // are maintain where appririate and remove extra commas
  return fileArray.toString().replaceAll(',', ' ').replaceAll(',,', ',').replaceAll(' .', '. ');
}

/**
 * @param {*} word takes in a word as argument
 * @returns the word in decrypted
 */
const decrypt = (word) => {
  // initiate decrypted as an empty string
  let decrypted = ''; 

  // initiate i
  let i = word.length - 1;
  
  // iterate over the chars of the word
  while (i > -1) {
    // add characters to decrypted
    decrypted += word[i]; 
    // decrement i
    i-=1;
  }
  // return the decrypted word
  return decrypted;
} 

/**
 * Read the file from the directory, and select the text file
 * if there's an error, print out the error
 * if the data exists print out the decrypted text
 */
fs.readFile(path.join('/Users/johnabsolu/Documents/Programming/Playgroud/NodeJs/Files', 'reversed.txt'), 'utf-8', (err, data) => {
  // if there is an error, print out an error
  if (err) console.log(err);

  // if there is data
  if (data) {
    
    // call the decryptFile and pass the data, save res as decryptedData
    const decryptedData = decryptFile(data);

    //Call the createNewFile function, pass in the file name and the data
    createNewFile("decrypted", decryptedData);
        
    //Call the createNewFile function, pass in the file name and the data
    createNewDesktopFile("decrypted", decryptedData);
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