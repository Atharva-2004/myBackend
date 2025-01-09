require('dotenv').config()
const express = require('express')
const app = express()


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res) => {
    res.send('atharva.ajagekar');
})

app.get('/login', (req,res) => {
    res.send('<h1>My name is Slim Shady</h1>');
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})