const Joke_Container = document.getElementById("joke");
const Joke_Button = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";


async function getJoke() {
    Joke_Container.classList.remove("fade");
    response = await fetch(url);
    data = await response.json();
    Joke_Container.innerText = data.joke;
    Joke_Container.classList.add("fade");
}

btn.addEventListener("click", getJoke);
