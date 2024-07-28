```Javascript

const clock = document.getElementsByClassName("clock")[0];

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);


```
