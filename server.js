const express = require('express') 
const cors = require('cors') 
const morgan = require('morgan') 
const bodyParser = require('body-parser') 
const mongoose = require('mongoose') 

const app = express() 

// Middlewares 
app.use(cors()) 
app.use(morgan('dev')) 
app.use(bodyParser.urlencoded({extended: true})) 
app.use(bodyParser.json()) 

let PORT = 5000 || process.env.PORT 
app.listen(PORT, () => { 
    console.log(`Server is on fire on port no. ${PORT}`); 
    mongoose.connect('mongodb://localhost:27017/mern-project', {useNewUrlParser: true}, () => {
        console.log('Database running'); 
    }) 
}) 

