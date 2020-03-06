// Require Express & Mongoose
const express = require('express')
const mongoose = require('mongoose')
// Take variables from express and assign them to a variable called app
const app = express()

// Use Mongoose to connect to MongoDB
mongoose.connect('mongodb://localhost:urlShortener', {
    useNewUrlParser: true, useUnifiedTopology: true
})

// Set view engine
app.set('view engine', 'ejs')

// // Routing
app.get('/', (req,res) => {
    // response, render index file
    res.render('index')
})

// From form post
app.post('/shortUrls', (req,res) => {
})

// Listen on the environment or port 5000 
app.listen(process.env.PORT || 5000);