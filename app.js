// [fetch] Create a random chuck norris joke app!
// Sending a GET request to https://api.chucknorris.io/jokes/random will
// result in a random chuck norris joke being sent to you!
// Display the random joke inside of an H1 tag
// Add a button that allows you to fetch a brand new random joke


function jokeApp () {
    fetch('https://api.chucknorris.io/jokes/random', {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
        console.log(data.value); // this line
        let jokes = document.querySelector('#jokes');
        console.log(jokes);
        jokes.innerHTML = data.value;
    })
}


document.querySelector("#clickForJoke").addEventListener("click", jokeApp);

