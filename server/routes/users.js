const router = require(`express`).Router()

const User = require(`../models/users`)

// read all records
router.get(`/users`, (req, res) => 
{   
    User.find((error, data) => 
    {
        res.json(data)
    })
})

module.exports = router