const express = require('express')
const app = express()

const connection = require('../config/databaseConnection');

const { getAllUsers, getUserById, updateUserById, deleteUserById } = require('../services/CRUD')
//Controllers
const getHomePage = async (req, res) => {
    let rows = await getAllUsers();
    return res.render('viewHomePage.ejs', { rows: rows })
}
const addUser = (req, res) => {
    res.render('viewAddUser.ejs')
}
const addUserButton = async (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let city = req.body.city;

    let [rows, fields] = await connection.query(`INSERT INTO Users(FullName, Email, City) VALUES(?, ?, ?)`, [name, email, city]);
    res.redirect('/');
}
const editUser = async (req, res) => {
    let userId = req.params.id;
    let user = await getUserById(userId);
    res.render('viewEditUser.ejs', { row: user })
}
const editUserButton = async (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let city = req.body.city;
    let userId = req.body.id;
    await updateUserById(name, email, city, userId);
    res.redirect('/');
}


const deleteUser = async (req, res) => {
    let userID = req.params.id;
    let user = await getUserById(userID);
    res.render('viewDeleteUser.ejs', {row: user});
}

const deleteUserButton = async (req, res) => {
    let userID = req.body.id;
    await deleteUserById(userID);
    res.redirect('/');
}

module.exports = { getHomePage, addUser, addUserButton, editUser, editUserButton, deleteUser, deleteUserButton }