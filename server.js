const express = require("express");
const app = express();
app.set("view engine", "ejs");

const port = 3000;

app.get("/", (req, res) => {
  const code = `Welcome to Hastebin!
  
Use the command in the top right corner 
to create a new file to share with others.`;

  res.render("code-display", { code });
});

app.listen(port);
