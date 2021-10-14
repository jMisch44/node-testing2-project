const express = require('express')
const server = express()

server.use(express.json())

server.post('/drinks', (req, res) => {
    res.end()
})

server.delete('/drinks', (req, res) => {
    res.end()
})

module.exports = server
