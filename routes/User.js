const express = require('express')
const router = require('express').Router()

const {
    getAllUser,
    createUser,
    deleteUser,
    updateUser
} = require('../controllers/User')

router.get('/users', getAllUser)
router.post('/users',createUser)
router.put('/users',updateUser)
router.delete('/users',deleteUser)

module.exports = router