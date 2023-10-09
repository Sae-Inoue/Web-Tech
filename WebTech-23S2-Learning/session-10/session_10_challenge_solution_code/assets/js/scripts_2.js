function ifValidEmail(email) {
    // Use expression operators, strings, and an if-else statement to validate the email
    if (email.match(/^\S+@\S+\.\S+$/) !== null) {
      return `The email "${email}" is valid.`;
    } else {
      return `The email "${email}" is invalid.`;
    }
}
  
// Test cases
console.log(isValidEmail("john@example.com"));
console.log(isValidEmail("invalidemail@.com"));
console.log(isValidEmail("no spaces@example.com"));
console.log(isValidEmail("bad email"));