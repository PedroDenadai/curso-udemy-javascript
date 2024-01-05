const input = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`;

let split_input = input.split('\n');
let list_numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// Define a function to extract numbers from a string
function extractNumbers(str) {
  return str.split('').filter(char => list_numbers.includes(parseInt(char, 10)));
}

// Iterate through the split strings and extract numbers
split_input.forEach((line, index) => {
  let numbers = extractNumbers(line);
  console.log(`Numbers in line ${index + 1}: ${numbers}`);
});
