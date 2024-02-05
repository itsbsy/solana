const express = require('express');
const router = express.Router();
const validate = require('../validator/validation')

router.get('/get_vote_count', validate.validateParams(validate.getVoteCount), async(req, res) =>{
    try {
        res.send("your vote count is 10")
        
    } catch (error) {
        console.log(error)
    }
})

router.post('/create_vote_topic', validate.validateParams(validate.createTopic), async (req, res) => {
    try {
        res.send("your vote topic has been created")
     
    } catch (error) {
      console.log(error)
    }
 })
 router.post('/cast_vote',  validate.validateParams(validate.castVote), async (req, res) => {
    try {
        res.send("your vote has been casted sucessfully")
      
    } catch (error) {
      console.log(error)
    }
 })
module.exports = router;