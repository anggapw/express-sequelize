const Subscription = require('../models/Subscription')
const User = require('../models/User')

module.exports = {
    getAllSubscription: (req, res) => {
        Subscription.findAll({
            raw: true,
            include: {
                model: User
            }
        })
            .then(result => {
                result.map(item=>{
                    console.log(item);
                    const data = {
                        id_subscription : item.subscriptionId,
                        id_user: item.userId,
                        fullname: item['user.fullName'],
                        username: item['user.userName'],
                        status: item.status
                    }
                    res.send({
                        message: 'Get all subscription data',
                        status: 200,
                        data
                    })
                })
               
            })
            .catch(error => {
                console.log(error)
                res.send({
                    message: 'Internal server error',
                    status: 500,
                })
            })
    },
    addSubscription: (req, res) => {
        Subscription.create(req.body)
            .then(result => {
                res.send({
                    message: "You have successfully subscribed",
                    status: 201,
                    result
                })
            })
            .catch(error => {
                console.log(error)
                res.send({
                    message: "Internal server error",
                    status: 500
                })
            })
    }
}