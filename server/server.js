const express = require('express')

const players = require('./routes/players')

const server = express()
server.use(express.static('public'))

server.use('/api/v1', players)

module.exports = server
