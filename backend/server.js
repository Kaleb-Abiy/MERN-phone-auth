const express = require('express');
require('dotenv').config()
const mongoose = require('mongoose');
var cors = require('cors')
var bodyParser = require('body-parser');
//initialzie express
const app = express();

//connecting our databse to server
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }) 
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))


//middlewres
app.use(cors(origin=true))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(express.json())
const usersRouter = require('./routes')
app.use('/api', usersRouter)

//listening to our server
app.listen(4000, ()=> console.log('server started'));