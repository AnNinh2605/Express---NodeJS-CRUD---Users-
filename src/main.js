const express = require('express')
const path = require('path')
const app = express()
const webRoutes = require('./routes/web.js')
const configViewEngine = require('./config/configViewEngine.js')
// dotenv
require('dotenv').config()
const port = process.env.PORT || 8102

//view engine
configViewEngine(app)

//routes
app.use('/', webRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})