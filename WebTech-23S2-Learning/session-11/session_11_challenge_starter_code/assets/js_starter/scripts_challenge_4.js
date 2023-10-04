// Challenge 4 Starter
const eventLinks = document.querySelectorAll("[data-event]");

function logEvent(eventDetails) {
    // Your code goes here
    console.log(`${(eventDetails.innerHTML.toUpperCase())}`)

}

// Your code goes here
for(const [eventDetails] of eventLinks.entries()){
    logEvent(eventDetails)

}
console.log(eventLinks)