// Require Express, Mongoose, ShortUrl
const express = require('express')
const mongoose = require('mongoose')
const ShortUrl = require('./models/shortUrl')
const app = express()

// Use Mongoose to connect to MongoDB
mongoose.connect('mongodb://localhost/urlShortener', {
  useNewUrlParser: true, useUnifiedTopology: true
})

// Set view engine
app.set('view engine', 'ejs')
// Set ShortUrl Setting
app.use(express.urlencoded({ extended: false }))

// // Routing
app.get('/', (req, res) => {
    // response, render index file
    res.render('index')
})

// From form post
// Call the fullUrl property in the body of the EJS file
    app.post('/shortUrls', async (req, res) => {
        await ShortUrl.create({ full: req.body.fullUrl })

    res.redirect('/')
})

// Listen on the environment or port 5000 
app.listen(process.env.PORT || 5000);