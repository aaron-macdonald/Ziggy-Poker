import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Players from './Players'
import Player from './Player'
import PlayerEdit from './PlayerEdit'
import PlayerAdd from './PlayerAdd'
import { getPlayers } from '../../client-api'

class PlayerRoutes extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      players: [],
      errorMessage: ''
    }
    this.fetchPlayers = this.fetchPlayers.bind(this)
  }
  componentWillMount () {
    this.fetchPlayers()
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
  render () {
    return (
      <div className="player-routes">
        <Switch>
          <Route
             exact
             path='/players'
             render={ (props) =>
               <Players
                 players={this.state.players}
                 fetchPlayers={this.fetchPlayers}
                 {...props}
               />
             }
          />
          <Route
            exact
            path='/players/player/add'
            render={(props) =>
              <PlayerAdd
                fetchPlayers={this.fetchPlayers}
                {...props}
              />
            }
          />
          <Route
            exact
            path='/players/player/:id'
            render={(props) =>
              <Player
                player={this.state.players.find((player) =>
                  player.id === Number(props.match.params.id))
                }
                fetchPlayers={this.fetchPlayers}
                {...props}
              />
            }
          />
            render={(props) =>
              <PlayerEdit
                player={this.state.players.find((player) =>
                  player.id === Number(props.match.params.id))
                }
                fetchPlayers={this.fetchPlayers}
                {...props}
              />
            }
          />
        </Switch>
        {this.state.errorMessage &&
          <h1>{this.state.errorMessage}</h1>}
      </div>
    )
  }
}
module.exports = PlayerRoutes
