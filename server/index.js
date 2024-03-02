const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const colors = require('colors')
const dotenv = require('dotenv')
const { connect } = require('mongoose')
const connectDB = require('./config/db')

//env config
dotenv.config();

//router import
const userRoutes = require('./routes/userRoutes');


//mongodb connection 
connectDB();

// rest object
const app = express()

//middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

// routes
app.use('/api/v1/user', userRoutes)
// app.get('/', (req, res ) => {
//     res.status(200).send({
//         'message': "Node server"
//     })
// })

// port
const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log('server Running on ' + process.env.DEV_MODE + ' mode port no. ' + PORT)
})