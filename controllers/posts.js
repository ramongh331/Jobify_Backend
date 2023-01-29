// const User = require("../models/user")
const Post = require("../models/post")
const auth = require("../auth/index")
const {Router} = require("express")
const router = Router()


// Index Route
  router.get("/posts", async (req, res) => {
    try {
        const {username} = req.payload
        res.status(200).json(await Post.find({username}))
        
    } catch (error) {
      res.status(400).json({error});
    }
  });


// Create Route
router.post("/posts", async (req, res) => {
  try{
    const {username} = req.payload
    req.body.username = username
    res.status(200).json(await Post.create(req.body))

  }catch(error){
      res.status(400).json(error)
  }
})

// Update Route
router.put('/posts/:id', async (req, res) => {
  try {
    const {username} = req.payload
    req.body.username = username
    const {id} = req.params
    res.status(200).json(await Post.findByIdAndUpdate(id, req.body))

  } catch (error) {
      res.status(400).json(error)
  }
})

// Delete Route
router.delete('/posts/:id', async (req, res) => {
  try {
    const {id} = req.params
    res.status(200).json(await Post.findByIdAndRemove(id))
  } catch (error) {
      res.status(400).json(error)
  }
})

// // Show Route
// router.get("/posts/:id", async (req, res) => {
//   try {
//       res.json(await Post.findById(req.params.id))
//   } catch (error) {
//       res.status(400).json(error);
//   }
// })

module.exports = router