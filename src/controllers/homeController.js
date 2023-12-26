const connection = require('../config/databaseConnection');
const getHomePage = (req, res) => {
    return res.render('viewHomePage.ejs')
}
const addUser = (req, res) => {
    res.render('viewAddUser.ejs')
}
const addUserButton = (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let city = req.body.city;

    connection.query(`INSERT INTO Users (FullName, Email, City) VALUES (?, ?, ?)`, [name, email, city],
    function (err, results) {
        console.log(results);
    })
    res.send('Add user successful')
}

module.exports = { getHomePage, addUser, addUserButton }