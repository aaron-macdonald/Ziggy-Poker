import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Table from './Table'

import { getTableData } from '../../client-api'
import { getPlayers } from '../../client-api'


class TableRoutes extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      players: [],
      table: [],
      errorMessage: ''
    }
    this.fetchTable = this.fetchTable.bind(this)
    this.fetchPlayers = this.fetchPlayers.bind(this)
  }
  componentWillMount() {
    this.fetchPlayers(),
    this.fetchTable(),
    this.makeTable()

  }
  fetchPlayers () {
    return getPlayers()
      .then(players => {
        this.setState({ players: players })
      })
      .catch(err => {
        this.setState({ errorMessage: err.message })
      })
  }
  fetchTable() {
    return getTableData()
      .then(table => {
        this.setState({ table: table })
      })
      .catch(err => {
        this.setState({ errorMessage: err.message })
      })
  }
  makeTable() {
  }

  render() {
    const {table, players} = this.state
    const playerResults = players.map(player => {
      return table.filter(result => {
        return result.player_id === player.id
      })
    })
    const playerTable = playerResults.map(playa => {
      let knickName = ""
      let playerSummary = {}
      let played = 0
      let buyin = 0
      let rebuys = 0
      let addons = 0
      let prizeMoney = 0
      playa.map(game => {
        knickName = game.knickName
        played = played + 1
        buyin = buyin + game.buyin
        rebuys = rebuys + game.rebuys
        addons = addons + game.addons
        prizeMoney = prizeMoney + game.prizemoney
      })
      let profitLoss = prizeMoney - buyin - rebuys - addons
      playerSummary = {
        knickName, played, buyin, rebuys, addons, prizeMoney, profitLoss
      }
      return playerSummary
    })


    return (
      <div className="table-routes">
        <Switch>
          <Route exact path='/table' render={ props =>
            <Table playerTable={playerTable}
            />
          }/>
        </Switch>
        {this.state.errorMessage &&
          <h1>{this.state.errorMessage}</h1>}
      </div>
    )
  }
}
module.exports = TableRoutes
