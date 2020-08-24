const express = require('express')
const bodyParser = require('body-parser')
const db = require('./config/connection')
const app = express()

// router
const userRouter = require('./routes/User')
const movieRouter = require('./routes/Movie')
const SubscriptionRouter = require('./routes/Subscription')
const HistoryRouter = require('./routes/History')

// models
const User = require('./models/User')
const Movie = require('./models/Movie')
const Subscription = require('./models/Subscription')
const History = require('./models/History')

app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// sequelize up connection
db
.authenticate()
.then(()=> {
    console.log('Database Sequelize connected...')
})
.then(()=> {
    User.sync().then(()=> console.log('Table user created'))
    Movie.sync().then(()=> console.log('Table movie created'))
    Subscription.sync().then(()=> console.log('Table subscription created'))
    History.sync().then(()=> console.log('Table history created'))
})
.catch(err => {
    console.log(err)
})


app.get('/', (req, res) => {
    res.send('welcome')
})

app.use('/', userRouter)
app.use('/', movieRouter)
app.use('/', SubscriptionRouter)
app.use('/', HistoryRouter)


app.listen(5100, ()=> {
    console.log('Server is running...')
})