const User = require('../models/User')

module.exports = {
    getAllUser: (req, res) => {
        User.findAll({
            raw: true
        })
            .then(result => {
                res.send({
                    message: 'Get all user data',
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
    createUser: (req, res) => {
        User.create(req.body)
            .then(result => {
                res.send({
                    message: "User has been created successfully",
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
    updateUser : (req, res) => {
        const {id} = req.params;
        const {fullname, username, email, address} = req.body;
        User.update({
            fullname : fullname,
            username : username,
            email : email,
            address: address
        }, {
            where: {
              UserId: id
            }
        })
        .then(result => {
            res.send({
                message: "Update was successful",
                status: 200,
                result
            })
        })
        .catch(error => {
            console.log(error);
            res.send({
                message: "Internal server error",
                status: 500,
            })
        })
    },
    deleteUser : (req, res) => {
        const {id} = req.params;
        User.destroy({
            where: {
              userId: id
            }
        })
        .then(result => {
            res.send({
                message: "User deleted",
                status: 200,
                result
            })
        })
        .catch(error => {
            console.log(error);
            res.send({
                message: "Internal server error",
                status: 500,
            })
        })
    }
}