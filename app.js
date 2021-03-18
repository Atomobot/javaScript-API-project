const bounceClass = 'bouncer';
const bounceTarget = '.title';
const box = ".container";
const button = document.querySelector(box+" button");
const jokeAPI = 'https://icanhazdadjoke.com/';
const jokeText = document.querySelector(box+" .joke p");
const gifPath = 'https://media.giphy.com/media/';
const gifSuffix = '/giphy.gif';
const dadGifs = [
    "l1J9AnvuqmlX7fz2w",
    "fGRLn3m6XvmHeLNOzn",
    "3o6ZtbrMqneLcJGtZ6",
    "ZgSCwxQMHWDSETpYFL",
    "3owvKeE82XiHObCiUE",
    "dB0MobdNQ321T8APAR"
];
let randomNum = 0; // initialisation of the random gif
let lastRand = 0;

document.addEventListener("DOMContentLoaded", getJoke);
button.addEventListener("click", getJoke);

async function getJoke() {
    let jokeData = await fetch( jokeAPI, {
        headers: {
            Accept: "application/json"
        }
    });
    let jokeObj = await jokeData.json();
    jokeText.innerHTML = jokeObj.joke;
    while( randomNum === lastRand ) { randomNum = Math.floor(Math.random() * dadGifs.length); }
    lastRand = randomNum;
    document.querySelector(box).setAttribute("style", "background-image: url("+gifPath+dadGifs[randomNum]+gifSuffix+")");
}