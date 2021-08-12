const express = require('express')
const router = express.Router()

//Route for contact form page
router.get('/', (req, res) => {
    res.render('travel/main')
})

module.exports = router