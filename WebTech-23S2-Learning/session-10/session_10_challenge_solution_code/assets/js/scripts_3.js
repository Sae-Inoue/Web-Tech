function isValidEmail(email) {
    // Use expression operators, strings, and a template literal containing a ternary operator to validate the email
    const valid = email.match(/^\S+@\S+\.\S+$/) !== null;
    return `The email "${email}" is ${valid ? 'valid' : 'invalid'}.`;
}

// Test cases
console.log(isValidEmail("john@example.com"));
console.log(isValidEmail("invalidemail@.com"));
console.log(isValidEmail("no spaces@example.com"));
    