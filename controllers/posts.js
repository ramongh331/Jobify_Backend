// const User = require("../models/user")
const Post = require("../models/post")
const auth = require("../auth/index")
const {Router} = require("express")
const router = Router()


// Index Route
  router.get("/", auth, async (req, res) => {
    try {
        const {username} = req.payload
        res.status(200).json(await Post.find({username}))
        
    } catch (error) {
      res.status(400).json({error});
    }
  });


// Create Route
router.post("/", auth, async (req, res) => {
  try{
    console.count()
    console.log(req.payload)
    const {username} = req.payload
    console.count()
    req.body.username = username
    res.status(200).json(await Post.create(req.body))

  }catch(error){
      res.status(400).json(error)
  }
})

// Update Route
router.put('/:id', auth, async (req, res) => {
  try {
    const {username} = req.payload
    req.body.username = username
    const {id} = req.params
    res.status(200).json(await Post.findByIdAndUpdate(id, req.body, {new:true}))

  } catch (error) {
      res.status(400).json(error)
  }
})

// Delete Route
router.delete('/:id', auth, async (req, res) => {
  try {
    const {id} = req.params
    res.status(200).json(await Post.findByIdAndRemove(id))
  } catch (error) {
      res.status(400).json(error)
  }
})

// Show Route
router.get("/:id", async (req, res) => {
  try {
    const {id} = req.params
    res.status(200).json(await Post.findById(id))
  } catch (error) {
      res.status(400).json(error);
  }
})

module.exports = router