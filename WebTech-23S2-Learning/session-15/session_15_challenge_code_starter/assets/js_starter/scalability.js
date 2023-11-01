async function fetchAndProcessData()
{
    const urls = [
        'https://jsonplaceholder.typicode.com/posts/1',
        'https://jsonplaceholder.typicode.com/users/1',
        'https://jsonplaceholder.typicode.com/todo/1',
    ];

    try{
        const responses = await Promise.all(urls.map(url => fetch(url)));

        const data = await Promise.all(responses.map(response => response.json()))

        data.forEach((item, index) => {
            console.log(`Data from URL ${urls[index]}:`, item);
        });
    }catch (error){
        console.error("An error occured", error);
    }

    console.log("Async finished")
}

fetchAndProcessData();