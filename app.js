const express = require("express");
const app = express();
const Post = require("./api/models/posts")
const postsData = new Post();





app.get("/api/posts",(req,res)=>{
    res.status(200).send(postsData.get());
});

app.get("/api/posts/:post_id",(req,res)=>{
    const postId = req.params.post_id;
    const foundPosts = postsData.getIndividualBlog(postId);
    if(foundPosts){
        res.status(200).send(foundPosts);
    }else{
        res.status(404).send("Not Found");
    }

})



app.listen(3000,()=>console.log("Listening on http://localhost:3000"));