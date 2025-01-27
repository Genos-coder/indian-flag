const chakraSpokes = document.querySelector(".chakra-spokes");
for (let i = 0; i < 24; i++) {
  const spoke = document.createElement("div");
  spoke.style.width = "40px";
  spoke.style.height = "2px";
  spoke.style.transform = `rotate(${i * 15}deg)`;
  chakraSpokes.appendChild(spoke);
}

const chakra = document.querySelector(".chakra");
let angle = 0;
setInterval(() => {
  angle = (angle + 1) % 360;
  chakra.style.transform = `rotate(${angle}deg)`;
}, 50);
const audio = new Audio("./jaggajiteya.mp3");

document.addEventListener("DOMContentLoaded", () => {
  audio.play();
});

audio.addEventListener("ended", () => {
  audio.currentTime = 0;
  audio.play();
});
