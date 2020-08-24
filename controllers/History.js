const History = require('../models/History')
const Subscription = require('../models/Subscription')
const User = require('../models/User')
const Movie = require('../models/Movie')

module.exports = {
    getAllHistory: (req, res) => {
        History.findAll({
            raw: true,
            include: {
                model: User,
                model: Subscription,
                model: Movie
            }
        })
            .then(result => {
                res.send({
                    message: 'Get all history data',
                    status: 200,
                    result
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
    addHistory: (req, res) => {
        History.create(req.body)
            .then(result => {
                res.send({
                    message: "History has been successfully displayed",
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
    },
    deleteHistory : (req, res) => {
        const {id} = req.params;
        History.destroy({
            where: {
                historyId: id
            }
        })
        .then(result => {
            res.status(200).send({
                message: "History deleted",
                status: 200,
                result
            })
        })
        .catch(error => {
            console.log(error);
            res.status(500).send({
                message: "Internal server error",
                status: 500,
            })
        })
    }
}