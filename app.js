const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const shopRoutes = require("./routes/shop");
// const adminData = require("./routes/admin");
const adminRoutes = require("./routes/admin");
const errorController = require("./controllers/error");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: "true" }));

app.use(express.static(path.join(__dirname, "public")));

app.use(shopRoutes);
app.use("/admin", adminRoutes);
app.use(errorController.getError);

app.listen("3000");
