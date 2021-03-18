const button = document.querySelector(".container button");
const jokeText = document.querySelector(".container .joke p");

document.addEventListener("DOMContentLoaded", getJoke);

button.addEventListener("click", getJoke);


async function getJoke() {
    const jokeData = await fetch("https://icanhazdadjoke.com/", {
        headers: {
            Accept: "application/json"
        }
        
    });
    
    const jokeObj = await jokeData.json();
    
    jokeText.innerHTML = jokeObj.joke;
    
    function chooseGif() {
        document.querySelector(".container").setAttribute("style", "background-Image: url(" + dadGif[randomNum] + ")")
        let randomNum = Math.floor((Math.random(0) * dadGif.length - 1));
    };

    let  = dadGif[
        "https://media.giphy.com/media/l1J9AnvuqmlX7fz2w/giphy.gif",
        "https://media.giphy.com/media/fGRLn3m6XvmHeLNOzn/giphy.gif",
        "https://media.giphy.com/media/3o6ZtbrMqneLcJGtZ6/giphy.gif",
        "https://media.giphy.com/media/ZgSCwxQMHWDSETpYFL/giphy.gif",
        "https://media.giphy.com/media/3owvKeE82XiHObCiUE/giphy.gif",
        "https://media.giphy.com/media/dB0MobdNQ321T8APAR/giphy.gif"
        
    ];
    
    
    
}



