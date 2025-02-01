const express = require("express");

const app = express();

const path = require('path');

const port = 3030;

app.set("view engine" , "ejs");
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

//app.set('views',path.join(__dirname,'templates'))

app.listen(port, () => {
    console.log("post is listeneing")
});



let posts = [
    {
        username:"chhagan Rakhade",
        post : "i Love coding"
    },
    {
        username : "nandu dumare",
        post : "i love the girl"
    },
    {
        username : "harish govardhan",
        post:"i am satori"
        
    
    }
]

app.get("/posts" ,(req,res) => {
    res.render("post",{posts})
})

app.get("/posts/newposts" ,(req,res) => {
    console.log(req.params.username)
    res.render('new');
})

app.get("/" ,(req,res) => {

    res.send("response ok in  home")
})


app.post('/posts',(req,res) => {
    const {username,post} = req.body;
    posts.push({username,post})
    res.send("pushed ")
  
    
})