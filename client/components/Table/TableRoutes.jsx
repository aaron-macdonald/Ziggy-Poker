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
  }
  componentWillMount() {
    this.fetchPlayers(),
    this.fetchTable()
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
  render() {
    const {table, players} = this.state
    const playerResultArray = []
    const playerResult = players.map(player => {
      return table.filter(result => {
        return result.player_id === player.id
      })
    })
    playerResultArray.push(playerResult)

    console.log(playerResultArray);


    return (
      <div className="table-routes">
        <Switch>
          <Route exact path='/table' render={ props =>
            <Table
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
