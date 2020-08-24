const express = require('express')
const router = require('express').Router()

const {
    getAllMovie,
    addMovie,
    updateMovie,
    deleteMovie
} = require('../controllers/Movie')

router.get('/movies', getAllMovie)
router.post('/movies', addMovie)
router.put('/movies', updateMovie)
router.delete('/movies', deleteMovie)

module.exports = router