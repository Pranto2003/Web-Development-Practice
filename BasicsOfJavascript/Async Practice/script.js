let time;
const randomColor = () => {
  const r = Math.ceil(Math.random() * 255);
  const g = Math.ceil(Math.random() * 255);
  const b = Math.ceil(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
};
document.querySelector(".yes").addEventListener("click", function () {
  time = setInterval(() => {
    document.querySelector(".container").style.backgroundColor = randomColor();
  }, 1000);
});
document.querySelector(".no").addEventListener("click", function () {
  clearInterval(time);
});
