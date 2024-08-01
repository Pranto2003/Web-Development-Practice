```javascript
function makeCard(title, thumbnail, timestamp, channelname, views, month) {
  let viewsString;
  if (views >= 1000000) {
    viewsString = (views / 1000000).toFixed(1) + "M";
  } else if (views >= 1000) {
    viewsString = (views / 1000).toFixed(1) + "K";
  } else {
    viewsString = views;
  }

  let html = `<div class="card">
          <div class="image">
            <img
             src="${thumbnail}" alt="Thumbnail"
            />
            <div class="capsule">${timestamp}</div>
          </div>
          <div class="text">
            <h1>${title}</h1>
            <p>${channelname} . ${viewsString} views . ${month} months ago</p>
          </div>
        </div>`;
  document.querySelector(".container").innerHTML += html;
}

makeCard(
  "Introduction to Express",
  "https://i.ytimg.com/vi/9JaDBYPmiJ0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCAd3ZbxxsB2vBXnV6ddM23LtNseA",
  "25:06",
  "CodeWithHarry",
  7602860,
  10
);
```
