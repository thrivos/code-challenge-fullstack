
const express = require('express')
const app = express()
const port = 3001

app.get('/breeds/all', (req, res) => {
  res.send({
      breeds: [
          // TODO: Fill this list...
      ]
  })
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
