let  = dadGif[
    "https://media.giphy.com/media/l1J9AnvuqmlX7fz2w/giphy.gif",
    "https://media.giphy.com/media/fGRLn3m6XvmHeLNOzn/giphy.gif",
    "https://media.giphy.com/media/3o6ZtbrMqneLcJGtZ6/giphy.gif",
    "https://media.giphy.com/media/ZgSCwxQMHWDSETpYFL/giphy.gif",
    "https://media.giphy.com/media/3owvKeE82XiHObCiUE/giphy.gif",
    "https://media.giphy.com/media/dB0MobdNQ321T8APAR/giphy.gif"
    
  ];

function chooseGif() {
    let randomNum = Math.floor((Math.random() * dadGif.length));
    document.getElementsByClassName(".container").style.backgroundImage =
        "url(" + dadGif[randomNum] + ")";
}
