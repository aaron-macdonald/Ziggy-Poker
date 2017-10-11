const express = require('express')
const router = express.Router()

const db = require('../db/db')
const bodyParser = require('body-parser')

router.use(bodyParser.json())

router.get('/players', (req, res) => {
  db.getPlayers()
    .then(data => {res.json(data)})
    .catch(err => res.status(500).end)
})

router.put('/player/:id/edit', (req, res) => {
  let {id} = req.body
  db.editPlayer( id, req.body)
    .then(result => res.json(result))
    .catch(err => res.status(500).end)
})

module.exports = router
