const express = require('express')
const router = express.Router()

const db = require('../db/db')
const bodyParser = require('body-parser')

router.use(bodyParser.json())

router.get('/', (req, res) => {
  db.getPlayers()
    .then(data => {
      res.json(data)
    })
})

router.post('/', (req, res) => {
  const {firstName, surName, knickName, favHand,  favHeadsUp, leastFavHeadsUp} = req.body
  const player = {firstName, surName, knickName, favHand,  favHeadsUp, leastFavHeadsUp}
  db.addPlayer(player)
    .then(addedPlayer => res.json(addedPlayer))
})

module.exports = router
