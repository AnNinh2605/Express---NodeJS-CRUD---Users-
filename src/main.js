const express = require('express')
const path = require('path')
const webRoutes = require('./routes/web.js')
const configViewEngine = require('./config/configViewEngine.js')

const app = express()

// dotenv
require('dotenv').config()
const port = process.env.PORT || 8102

//config req.body
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data

//view engine
configViewEngine(app)

//routes
app.use('/', webRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})