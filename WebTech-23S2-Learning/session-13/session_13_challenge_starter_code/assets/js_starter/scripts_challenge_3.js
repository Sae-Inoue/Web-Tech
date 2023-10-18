// Challenge 3 Starter
function safeDivide(a, b) {
    //try block
    try {

        // if the denominator is 0 then send an error
        if (b === 0) {
            // throw new error
            throw new Error ("Division by zero is not allowed.")
        }

        return a / b;
        //catch block using the error object
    } catch (error) {
        // if error name Error
        if (error.name === "Error"){
            // log out a specific a message
            console.error("An error occurred:", error.message)
        } else {
            // else log out a general error message
            console.error("An unexpected error occurred")
        }
    }
}

console.log(safeDivide(10, 0)); // Expected Output: "An error occurred: Division by zero is not allowed."
console.log(safeDivide(10, 2)); // Expected Output: 5