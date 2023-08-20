const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const ejs = require("ejs");

const header = "Aguiar Node"

//Directory static default.
app.use(express.static(path.join(__dirname + "/public")));
app.use(express.urlencoded({extended: true}));

//Definindo ao express que usaremos o EJS com View
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home", {header: header});
})

app.listen(port, () => {
    console.log("Server running on port 3000");
})