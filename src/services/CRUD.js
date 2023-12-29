const connection = require('../config/databaseConnection');

const getAllUsers = async () => {
    let [rows, fields] = await connection.query('SELECT * FROM Users u ');
    return rows;
}
const getUserById = async (userId) => {
    let[rows, fields] = await connection.query('SELECT * FROM Users u WHERE UserID = ?', [userId])
    let user = rows && rows.length > 0 ? rows[0] : {};
    return user;
}
const updateUserById = async (name, email, city, userId) => {
    let [rows, fields] = await connection.query(` UPDATE Users 
    SET FullName = ?, Email = ?, City = ?
    WHERE UserID = ?`, [name, email, city, userId])
}

const deleteUserById = async(userID) => {
    let [rows, fields] = await connection.query(` 
    DELETE FROM Users WHERE UserID = ?`, [userID]
    )
}

module.exports = { getAllUsers, getUserById, updateUserById, deleteUserById }