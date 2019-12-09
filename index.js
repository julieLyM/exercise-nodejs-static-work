const express = require("express");
const app = express();
const engines = require("consolidate");
const images = require("./images.json");

app.use("/myPhotos", express.static("./images"));
app.use("/style", express.static("./style"));

app.use("/alert", express.static("./javascript"));

app.engine("hbs", engines.handlebars);
app.set("view engine", "hbs");

app.get("/", function(req, res) {
  res.render("index.hbs", { images });
});

const server = app.listen(4000, function() {
  console.log(`Server started on http://localhost:${server.address().port}`);
});
