const express = require('express')
const router = express.Router()
const { getHomePage, addUser, addUserButton } = require('../controllers/homeController')

router.get('/', getHomePage)
router.get('/add-user', addUser)
router.post('/add-user-button', addUserButton)

module.exports = router