
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
