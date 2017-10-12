const express = require('express')

const players = require('./routes/players')
const games = require('./routes/games')

const server = express()
server.use(express.static('public'))

server.use('/api/v1/players', players)
server.use('/api/v1/games', games)

module.exports = server
