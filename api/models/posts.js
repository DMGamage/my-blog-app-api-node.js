const PATH ="./data.json"
const fs = require('fs');

class Post{
    get(){
        return this.readData();

    }

    getIndividualBlog(postId){
        const posts =this.readData();
        const foundPosts = posts.find((posts)=>posts.id==postId);
        return foundPosts;


    }

    add(newPost){
        const currentPost= this.readData();
        currentPost.unshift(newPost);
        this.storeData(currentPost);

    }
    readData(){
        let rawData = fs.readFileSync(PATH);
        let posts = JSON.parse(rawData);
        return posts;
         

    }
    storeData(rawData){
        let data = JSON.stringify(rawData);
        fs.writeFileSync(PATH,data);

    }

}

module.exports =Post;