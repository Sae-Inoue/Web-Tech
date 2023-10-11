// Challenge 4 Starter
// Initialise the array
let numbers = [1, 2, 3, 4, 5, 6];

// Find the index of the number 5 in the array
let index = numbers.findIndex((number) => number === 5)

// If the number 5 is found in the array
if (index !== -1) {
  // Console log each number in the array up to and including 5
    numbers.forEach((number, item) => {
        if(item <= index){
            console.log(number)
        }
    });

} else {
  // Output a message if the number 5 is not in the array
    console.log("Number is not in Array")
}
