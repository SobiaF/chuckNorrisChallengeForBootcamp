function jokeApp() {
    fetch('https://api.chucknorris.io/jokes/random', {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        let jokes = document.querySelector('#jokes');
        jokes.innerHTML = data.value;
    })
}

document.querySelector("#clickForJoke").addEventListener("click", jokeApp);
