console.log('Script is working!');

const audioRain = document.getElementById("audioRain");
audioRain.volume = 0.2;
const sound = document.getElementById("sound");
const links = document.querySelectorAll("ul a");
const audioClick = document.getElementById("audioClick");
const audioHover = document.getElementById("audioHover");

sound.addEventListener("click", () => {
    // Toggle audio mute state
    audioRain.muted = !audioRain.muted;

    // If mute, change the icon style
    if (audioRain.muted) {
        sound.classList.remove("bxs-volume-full");
        sound.classList.add("bxs-volume-mute");
    } else {
        sound.classList.remove("bxs-volume-mute");
        sound.classList.add("bxs-volume-full");
    }

    // Optional click sound effect
    clickSound();
});

// Adding hover event listener on the sound icon
sound.addEventListener("mouseenter", hoverSound);

// Selecting all links
for (let i = 0; i < links.length; i++) {
    // adding click event listener on the links
    links[i].addEventListener("click", clickSound);
    // adding hover effect listener on the links
    links[i].addEventListener("mouseenter", hoverSound);
}

// Click sound effect
function clickSound() {
    audioClick.play();
}

// Hover sound effect
function hoverSound() {
    audioHover.play();
}