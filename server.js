const express = require("express");

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const ehandle = require("express-handlebars");

app.engine("handlebars", ehandle({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgers_controller");

app.use(routes);

app.listen(PORT, function() {
  console.log("Listening on port:%s", PORT);
});
