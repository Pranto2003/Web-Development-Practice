function addLanguage(langName) {
  const li = document.createElement("li");
  li.innerHTML = `${langName}`;
  document.querySelector(".language").appendChild(li);
}

addLanguage("Python");
addLanguage("TypeScript");

//THE BEST WAY WHICH I HAVE TO USE

function addBestWayLanguage(langName) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(langName));
  document.querySelector(".language").appendChild(li);
}

addBestWayLanguage("C++");
