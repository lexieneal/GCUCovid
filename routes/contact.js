const express = require('express')
const router = express.Router()
const Form = require('../models/form')

//Route for contact form page
router.get('/new', (req, res) => {
    res.render('contact/new', {form: new Form() })
})

//Route to submit contact form
router.post('/', (req, res) => {
    res.send('Create')
})

module.exports = router