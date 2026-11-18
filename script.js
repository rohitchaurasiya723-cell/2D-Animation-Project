
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
const wavingArm = document.querySelector(".left-arm");
waveBtn.addEventListener("click", () => {
    wavingArm.classList.add("wave");

    setTimeout(() => {
        wavingArm.classList.remove("wave");
    }, 1500);
});
// Talking animation
const talkBtn = document.getElementById("talkBtn");
const mouth = document.querySelector(".mouth");
const speech = document.getElementById("speech");

talkBtn.addEventListener("click", () => {
    const message = speech.textContent;

    const voice = new SpeechSynthesisUtterance(message);
    voice.lang = "en-US";
    voice.rate = 0.9;

    window.speechSynthesis.cancel();

    mouth.classList.add("talking");
    speech.classList.add("show");

    voice.onend = () => {
        mouth.classList.remove("talking");
    };

    window.speechSynthesis.speak(voice);
});
