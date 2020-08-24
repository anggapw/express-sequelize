const Movie = require('../models/Movie')

module.exports = {
    getAllMovie: (req, res) => {
        Movie.findAll({
            raw: true
        })
            .then(result => {
                res.send({
                    message: 'Get all movie data',
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
    addMovie: (req, res) => {
        Movie.create(req.body)
            .then(result => {
                res.send({
                    message: "Movie has been added successfully",
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
    updateMovie : (req, res) => {
        const {id} = req.params;
        const {title, year, genre, description, url_trailer} = req.body;
        Movies.update({
            title : title,
            year : year,
            genre : genre,
            description: description,
            url_trailer : url_trailer
        }, {
            where: {
                MovieId: id
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
    deleteMovie : (req, res) => {
        const {id} = req.params;
        Movies.destroy({
            where: {
                MovieId: id
            }
        })
        .then(result => {
            res.send({
                message: "Movie deleted",
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