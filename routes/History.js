const express = require('express')
const router = require('express').Router()

const {
    getAllHistory,
    addHistory,
    deleteHistory
} = require('../controllers/History')

router.get('/history', getAllHistory)
router.post('/history', addHistory)
router.delete('/history', deleteHistory)

module.exports = router