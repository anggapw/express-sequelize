const db = require('../config/connection')
const Sequelize = require('sequelize');
const User = require('./User');

const Subscription = db.define('subscriptions', {
    subscriptionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    status: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
}, {
    // options
});

User.hasOne(Subscription, {
    foreignKey: 'userId'
});
Subscription.belongsTo(User, {
    foreignKey: 'userId',
    constraints:false
})

module.exports = Subscription;