// Challenge 2 Starter
const userObject = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isStudent: false,
    address: {
        street: "123 Main St",
        city: "Anytown",
        zipCode: "12345"
    },
    skills: ["JavaScript", "HTML", "CSS"],
    socialProfiles: {
        twitter: "@johndoe",
        linkedIn: "linkedin.com/in/johndoe"
    },
    isEmployed: true,
};

// Deep clone the complexObject three times using the spread operator for shallow cloning
function deepClone(userObject){
    return
    JSON.parse(JSON.stringfy(userObject));
}



// Store the cloned objects in an array
const clone1 = {...userObject}
const clone2 = {...userObject}
const clone3 = {...userObject}

// Sort the array of cloned objects based on the 'age' property in ascending order
const clonedObjects = [clone1, clone2, clone3]
clonedObjects.sort((a,b) => a.age - b.age)

// Log the sorted array to the console
console.log(clonedObjects)

