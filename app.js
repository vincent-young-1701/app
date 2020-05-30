const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.get("/", (req, res) => {
  console.log("test");
  res.removeHeader("X-Powered-By");
  res.header("X-Website", "weatherwizard.xyz");
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
