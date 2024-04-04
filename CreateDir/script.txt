// Add function
const add = (num1, num2) => {
  return num1 + num2;
}

// Minus function
const minus = (num1, num2) => {
  return num1 - num2;
}

// Multiply function
const multiply = (num1, num2) => {
  return num1 * num2;
}

// Divide function
const divide = (num1, num2) => {
  return num1 / num2;
}

// Exponential function
const toExponent = (num1, num2) => {
  return num1**num2;
}

// Print results
console.log(add(3,4));
console.log(minus(3,4));
console.log(multiply(3,4));
console.log(divide(3,4));
console.log(toExponent(3,4));

// Numbers array
const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13];

// Reversed array function
const reverseArr = (arr) => {
  console.log(`Array before reversed: `, arr)
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i + 1; j < arr.length; j += 1) {
      const temp = arr[j]
      if (arr[i] < arr[j]) {
        arr[j] = arr[i]
        arr[i] = temp
      }
    }
  }
  console.log(`Reversed array: `, arr);
}

// Call array
reverseArr(numbers);