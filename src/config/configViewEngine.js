const express = require('express')
const path = require('path')
//view engine
const configViewEngine = (app) => {
    app.set('views', 'src/views')
    app.set('view engine', 'ejs')
    //static files
    app.use(express.static('src/public'))
}

module.exports = configViewEngine