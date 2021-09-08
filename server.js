const express = require("express");
const mongoose = require("mongoose");

const port = 3000;
const dbUrl = "mongodb://localhost/hastebin";

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const Document = require("./models/Documents");
mongoose.connect(dbUrl, {});

app.get("/", (req, res) => {
  const code = `Welcome to Hastebin!
  
Use the command in the top right corner 
to create a new file to share with others.`;

  res.render("code-display", { code });
});

app.get("/new", (req, res) => {
  res.render("new");
});

app.post("/save", async (req, res) => {
  const value = req.body.value;

  try {
    const document = await Document.create({ value });
    res.redirect(`/${document.id}`);
  } catch (error) {
    res.render("new", { value });
  }
});

app.listen(port);
