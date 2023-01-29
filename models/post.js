const { Schema, model} = require("mongoose")


  const PostsSchema = new Schema({
    username: { type: String, required: true, unique: true},
    role: String,
    details: String,
    location: String,
    onsite: String,
    appURL: String,
    type: String,
    salary: String,
})  

const Post = model("Post", PostsSchema)

module.exports = Post