const joke = document.getElementById("joke");
const btn = document.getElementById("btn");

const url = "https://v2.jokeapi.dev/joke/Any?type=single";

async function getjoke(url){
    joke.classList.remove("fade");
    const response = await fetch(url);
    const data = await response.json();
   // console.log(data)
      joke.innerHTML = data.joke;
      joke.classList.add("fade");
}

getjoke(url);

