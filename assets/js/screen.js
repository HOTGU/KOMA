const screen = document.querySelector(".main-screen");
const text = document.querySelector(".main-text");

const handleResize = () => {
  const width = window.outerWidth;
  const percent = 1530 / width;
  const percentSize = 60 / percent;
  const percentPadding = 30 / percent;
  const percentTop = 220 / percent;
  text.style.fontSize = percentSize;
  text.style.padding = percentPadding;
  text.style.top = parseInt(percentTop, 10);
};

const randomImage = () => {
  text.classList.add("hidden");
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  screen.style.backgroundImage = `url('../static/images/${randomNumber}.jpg')`;
  screen.style.backgroundSize = "100% 100%";
  screen.animate([{ opacity: "0" }, { opacity: "1" }], 1500);
};

function init() {
  handleResize();
  setInterval(randomImage, 4000);
}

if (screen) {
  init();
}
