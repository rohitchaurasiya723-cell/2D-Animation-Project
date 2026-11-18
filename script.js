
const character = document.getElementById("character");

const jumpBtn = document.getElementById("jumpBtn");
const waveBtn = document.getElementById("waveBtn");

// Jump animation
jumpBtn.addEventListener("click", () => {
    character.classList.remove("jump");

    void character.offsetWidth;

    character.classList.add("jump");

    setTimeout(() => {
        character.classList.remove("jump");
    }, 650);
});

// Wave hand animation
waveBtn.addEventListener("click", () => {
    alert("Hello! Welcome to my Cartoon World!");
});
// Talking animation
const talkBtn = document.getElementById("talkBtn");
const mouth = document.querySelector(".mouth");
const speech = document.getElementById("speech");

talkBtn.addEventListener("click", () => {
    mouth.classList.toggle("talking");
    speech.classList.toggle("show");
});
