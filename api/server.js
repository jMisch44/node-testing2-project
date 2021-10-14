const express = require('express')

const server = express()

server.use(express.json())

server.post('/', (req, res) => {
    res.end()
})

server.delete('/', (req, res) => {
    res.end()
})

module.exports = server
