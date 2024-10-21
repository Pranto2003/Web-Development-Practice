const express = require("express");
const app = express();
const blogs = require('./routes/blogs')
const port = 3000;

app.use(express.static("public"));
app.use('/blogs', blogs)

app
  .get("/", (req, res) => {
    res.send("Hello World!");
  })
  .post("/", (req, res) => {
    console.log("This is a post request");
    res.send("Hello World! POST");
  })
  .put("/", (req, res) => {
    console.log("This is a put request");
    res.send("Hello World! PUT");
  });

  app.get("/api", (req, res) => {
    res.json({ a: 1, b: 2, c: 3, d: 4, name: ["harry", "jerry"] })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
