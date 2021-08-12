const express = require('express')
const router = express.Router()
const Form = require('../models/form')


//Route for contact form page
router.get('/new', (req, res) => {
    res.render('contact/new', {form: new Form() })
})

//Route to submit contact form
router.post('/', (req, res) => {
    const form = new Form({
        name: req.body.name
    })
    form.save((err, newForm) => {
        if (err) {
            res.render('contact/new', {
                errorMessage: 'Error: Please try again'
            })
        } else {
            res.redirect('contact/new')
        }
    })
})

module.exports = router