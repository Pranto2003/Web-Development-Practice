document.querySelector(".box").addEventListener("click", function (e) {
  e.stopPropagation();
  alert("Box was clicked");
});
document.querySelector(".card").addEventListener("click", function (e) {
  e.stopPropagation();
  alert("Card was clicked");
});
document.querySelector(".container").addEventListener("click", function (e) {
  e.stopPropagation();
  alert("Container was clicked");
});

function getRandomColor() {
  let var1 = Math.ceil(1 + Math.random() * 255);
  let var2 = Math.ceil(1 + Math.random() * 355);
  let var3 = Math.ceil(1 + Math.random() * 455);
  return `rgb(${var1},${var2},${var3})`;
}

setInterval((e) => {
  document.querySelector(".box").style.backgroundColor = getRandomColor();
}, 1000);

// setTimeout((e) => {
//   document.querySelector(".box").style.backgroundColor = "Yellow";
// }, 2000);
