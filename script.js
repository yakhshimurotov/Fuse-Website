
const darkTheme = () => {
    const body = document.querySelector("body");
    const button = document.querySelector("button");
    const section = document.querySelector("section");
    const p = document.querySelector("body p")
    button.addEventListener("click", () => {
        body.classList.toggle("darkTheme");
        section.classList.toggle("bag");
        body.classList.toggle("color")
    });
}
darkTheme();

const listCard = () => {
    const list = document.querySelector(".list");
    const card = document.querySelector(".card");
    const icon = document.querySelector("i")
    list.addEventListener("click", () => {
        card.classList.toggle("cards");
        icon.classList.toggle("icon");
    });
};
listCard();

const navAnim = () => {
     const burger = document.querySelector(".burger");
     const line1 = document.querySelector(".line1");
     const ul = document.querySelector("ul")
     burger.addEventListener("click", () => {
        line1.classList.toggle("box1");
        ul.classList.toggle("top-nav")
        burger.classList.toggle("toggle")
     });
};
navAnim();

function play() {
    let audio = document.getElementById('audio');
    audio.play();
};
