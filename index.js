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
        id:"1a",
        username:"chhagan Rakhade",
        post : "i Love coding"
    },
    {
        id:"2a",
        username : "nandu dumare",
        post : "i love the girl"
    },
    {
        id:"3a",
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

app.get("/posts/:id" ,(req,res) => {   
    const id = req.params.id;
    const post = posts.find((p) => id === p.id)
    console.log(post);
    res.render("details",{post})
   
 
    console.log(id);
    res.send("id will have")
})


app.post('/posts',(req,res) => {
    const {username,post} = req.body;
    posts.push({username,post})
    res.redirect("/posts")
  
    
})