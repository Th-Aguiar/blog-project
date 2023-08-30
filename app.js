const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const ejs = require("ejs");
const lodash = require("lodash");
const { link } = require('fs');

//user datas
const posts = [];

//Directory static default.
app.use(express.static(path.join(__dirname + "/public")));
app.use(express.urlencoded({extended: true}));

//Definindo ao express que usaremos o EJS com View
app.set("view engine", "ejs");


//Requisiçoes
app.get("/", (req, res) => {
    res.render("home", { posts: posts });
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

//Router Posts
app.get("/:postTittle", (req, res) => {
    //Armazeno o título da requisição e converto para lower case
    const postTittle =  lodash.lowerCase(req.params.postTittle);
    
    //Busco em cada post feito se há um match na requisição do titulo
    posts.forEach( (post) => {

        //Armazeno o título de cada post do blog feito
        const storedPostTittle = lodash.lowerCase(post.postTittle);

        //Faço uma verificação da existência do titulo
        if(postTittle === storedPostTittle){
            console.log("Parametro de url igual");
            //Envio uma reposta com uma pagina EJS.
            res.render("post-page", {
                postTittle: post.postTittle,
                postContent: post.postContent
            });
        }else{ 
            console.log("Parametro de url não é igual, verifique o codigo do app")
        }
    })

    console.log(postTittle);
})

//Method Post

app.post("/post", (req, res) => {
    //Captura de dados
    const datas = req.body;
    console.log(datas)

    //Envio do Objeto ao Array Global
    posts.push(datas);

    //Redirecionamento Para a página home.
    res.redirect("/");

})

app.listen(port, () => {
    console.log("Server running on port 3000");
})