const express = require('express')

const players = require('./routes/players')

const server = express()
server.use(express.static('public'))

server.use('/players', players)

module.exports = server
