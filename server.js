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

/* <ROUTING> */

// This is where we pass URLs into body
app.get('/', async (req, res) => {
    const shortUrls = await ShortUrl.find()
    // response, render index file - pass in fullUrls into body
    res.render('index', { shortUrls: shortUrls })
})

// From form post
// Call the fullUrl property in the body of the EJS file
app.post('/shortUrls', async (req, res) => {
    await ShortUrl.create({ full: req.body.fullUrl })

    // Create new Short URL and redirect user home
    res.redirect('/')
})

// get anything after the "/"
app.get('/:shortUrl', async (req, res) => {
    // findOne({Search Query})
    const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl })
    if (shortUrl == null) return res.sendStatus(404)

    shortUrl.clicks++
    shortUrl.save()

    res.redirect(shortUrl.full)
})

/* </ ROUTING> */

// Listen on the environment or port 5000 
app.listen(process.env.PORT || 5000);