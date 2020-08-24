const db = require('../config/connection')
const Sequelize = require('sequelize');
const User = require('./User');
const Movie = require('./Movie');
const Subscription = require('./Subscription');

const History = db.define('history_watches', {
    historyId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    }
}, {
    // options
});

User.hasMany(History, {
    foreignKey: 'userId'
});
History.belongsTo(User, {
    foreignKey: 'userId',
    constraints:false
})

Subscription.hasMany(History, {
    foreignKey: 'subscriptionId'
});
History.belongsTo(Subscription, {
    foreignKey: 'subscriptionId',
    constraints:false
})

Movie.hasMany(History, {
    foreignKey: 'movieId'
});
History.belongsTo(Movie, {
    foreignKey: 'movieId',
    constraints:false
})

module.exports = History;