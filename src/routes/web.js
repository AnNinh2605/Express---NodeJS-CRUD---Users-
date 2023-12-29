const express = require('express')
const router = express.Router()
const { getHomePage, addUser, addUserButton, editUser, editUserButton, deleteUser, deleteUserButton } = require('../controllers/homeController')

router.get('/', getHomePage)
router.get('/add-user', addUser)
router.post('/add-user-button', addUserButton)
router.get('/edit-user/:id', editUser)
router.post('/edit-user-button', editUserButton)

router.get('/delete-user/:id', deleteUser)
router.post('/delete-user-button', deleteUserButton)

module.exports = router