const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(express.static("public"));

app.get("/contact", (req, res) => {
  res.send("Contact me");
});

app.get("/about", (req, res) => {
  res.send("about me");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/:slug", (req, res) => {
  res.send(`Used express parameters ${req.params.slug}`);
});
