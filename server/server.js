require('dotenv').config()
const express = require('express')
const axios = require('axios').default

const app = express()

const PORT = process.env.PORT || 5000
const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET

let token = null

axios.post('https://accounts.spotify.com/api/token', null, {
  auth: {
    username: CLIENT_ID,
    password: CLIENT_SECRET
  },
  params: {
    grant_type: 'client_credentials'
  },
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
  .then(result => {
    token = result.data.access_token
    console.log(token)
  })
  .catch(error => console.log(error))

app.use('/', (req, res) => res.status(200).send(`Hello!`))

app.listen(PORT, () => console.log(`Listening at https://localhost:${PORT}`))
