const express = require('express')
const app = express()
const port = 5999

app.get('/', (req, res) => {
  res.send('Welcome to react 19 back end server!')
})

app.listen(port, () => {
  console.log(`React back end server is running on:: ${port}`)
})