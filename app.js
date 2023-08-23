const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const ejs = require("ejs");

//user datas
const items = [];

//Directory static default.
app.use(express.static(path.join(__dirname + "/public")));
app.use(express.urlencoded({extended: true}));

//Definindo ao express que usaremos o EJS com View
app.set("view engine", "ejs");


//Requisiçoes
app.get("/", (req, res) => {
    res.render("home", {items: items});
})

app.get("/about", (req, res) => {
    res.render("about");
})

app.get("/contact", (req, res) => {
    res.render("contact");
})

app.get("/post", (req, res) => {
    res.render("post");
})

//Method Post

app.post("/post", (req, res) => {
    const datas = req.body;
    console.log(datas)
    items.push(datas);
})



app.listen(port, () => {
    console.log("Server running on port 3000");
})