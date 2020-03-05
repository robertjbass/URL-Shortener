// Require Express
const express = require('express')
// Take variables from express and assign them to a variable called app
const app = express()

// Set view engine
app.set('view engine', 'ejs')

// Routing
app.get('/', (req,res) => {
    // response, render index file
    res.render('index')
})

// Listen on the environment or port 5000 
app.listen(process.env.PORT || 5000);