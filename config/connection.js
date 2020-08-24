const Sequelize = require('sequelize')

const db = new Sequelize({
    host: 'localhost',
    dialect: 'mysql',
    database: 'netpliks_sequelize',
    username:'root',
    password:'4@bttrliF3'
})

module.exports = db
// require('dotenv/config');
// const Sequelize = require('sequelize')

// const db = new Sequelize({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DATABASE,
//     dialect: 'mysql'
// })

// module.exports = db