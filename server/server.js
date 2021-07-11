require('dotenv').config()
const express = require('express')
const app = express()

const PORT = process.env.PORT || 5000
const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET

app.use('/', (req, res) => res.status(200).send(`Hello!`))

app.listen(PORT, () => console.log(`Listening at https://localhost:${PORT}`))
