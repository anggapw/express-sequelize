const express = require('express')
const router = require('express').Router()

const {
    getAllSubscription,
    addSubscription
} = require('../controllers/Subscription')

router.get('/subscription', getAllSubscription)
router.post('/subscription', addSubscription)

module.exports = router