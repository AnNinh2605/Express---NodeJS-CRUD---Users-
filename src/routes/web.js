const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('homePage.ejs')
})

router.get('/abc', (req, res) => {
    res.send('ABC')
})

module.exports = router