const boxes = document.querySelectorAll(".box");

boxes[2].style.backgroundColor = "Yellow";
boxes[2].style.color = "Black";

const newBox = document.querySelector("#redbox");
newBox.style.backgroundColor = "red";

// boxes.forEach((e) => {
//     e.style.backgroundColor = "green";
//   });

boxes[1].style.backgroundColor = "Black";
boxes[1].style.color = "White";

boxes[3].style.backgroundColor = "Purple";
boxes[3].style.color = "White";

boxes[4].style.backgroundColor = "Blue";
boxes[4].style.color = "White";

function getRandomColor() {
  let var1 = Math.ceil(1 + Math.random() * 255);
  let var2 = Math.ceil(1 + Math.random() * 355);
  let var3 = Math.ceil(1 + Math.random() * 455);

  return `rgb(${var1},${var2},${var3})`;
}

boxes.forEach((e) => {
  e.style.backgroundColor = getRandomColor();
  e.style.color = getRandomColor();
  e.style.fontWeight = "Bolder";
  e.style.fontSize = "19px";
  e.style.padding = "5px";
});
