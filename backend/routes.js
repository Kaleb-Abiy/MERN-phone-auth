const express = require('express')
const router = express.Router()
const Users = require("./models")


router.get('/get-data/:uid', async (req, res) => {
    try {
      const users = await Users.findOne({uuid:req.params.uid})
      res.json(users)
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  })


router.post('/save', async (req, res)=>{
   let user = new Users({
       full_name: req.body.full_name,
       bio: req.body.bio,
       uuid: req.body.uuid
   });

   try {
    const newUser = await user.save()
    res.status(201).json(newUser)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})  


module.exports = router