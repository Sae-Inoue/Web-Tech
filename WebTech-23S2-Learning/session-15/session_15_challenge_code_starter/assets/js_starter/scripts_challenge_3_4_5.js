// Challenge 3
async function GetArticleID() {
    try{
        // Start fetching data from the server
        let respnse = await fetch('https://jsonplaceholder.typicode.com/posts/') // Step 1: Initiate an HTTP request

        //If the call failed throw an error
        if(!respnse.ok){
            throw "Something went wrong"
        }

        let data = await respnse.json()

        // This message will be displayed immediately
        console.log(data); // Step 6: Display this message
    }catch (error){
        console.log(error)
    }

}

GetArticleID(3);


