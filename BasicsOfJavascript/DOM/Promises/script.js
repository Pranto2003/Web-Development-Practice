function createColorPromise() {
  return new Promise((resolve, reject) => {
    let var1 = Math.ceil(1 + Math.random() * 255);
    let var2 = Math.ceil(1 + Math.random() * 255);
    let var3 = Math.ceil(1 + Math.random() * 255);

    resolve(`rgb(${var1}, ${var2}, ${var3})`);
  });
}

document.querySelector(".box").addEventListener("click", function (e) {
  let p = createColorPromise();
  p.then((result) => {
    document.querySelector(".box").style.backgroundColor = result;
  }).catch((error) => {
    alert(error);
  });
});
