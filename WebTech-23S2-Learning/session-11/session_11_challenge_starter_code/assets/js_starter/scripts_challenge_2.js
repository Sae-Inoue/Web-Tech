// Challenge 2 Solution
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Your code goes here
for(const [index, number] of numbers.entries()){
    if(number % 2 === 0 ){
         console.log(`${number} is even`)
    }else{
        console.log(`${number} is odd`)
    }
    //consol.log(`{number} is ${number % 2 === 0} "even" : "odd"`)

}