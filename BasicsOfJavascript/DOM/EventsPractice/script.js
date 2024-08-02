const boxes = document.querySelectorAll(".box");

function getRandomColor() {
  let var1 = Math.ceil(1 + Math.random() * 255);
  let var2 = Math.ceil(1 + Math.random() * 355);
  let var3 = Math.ceil(1 + Math.random() * 455);
  return `rgb(${var1},${var2},${var3})`;
}

boxes.forEach((box) => {
  box.addEventListener("click", function (e) {
    alert("You have clicked it");
    this.style.backgroundColor = getRandomColor();
  });
});
