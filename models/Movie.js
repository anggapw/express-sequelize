const db = require('../config/connection')
const Sequelize = require('sequelize');

const Movie = db.define('movies', {
    movieId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    year: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    genre: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    url_trailer: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    // options
});

module.exports = Movie;