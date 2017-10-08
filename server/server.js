const express = require('express')

const players = require('./routes/players')

const server = express()
server.use(express.static('public'))

server.use('/v1/players', players)

module.exports = server
