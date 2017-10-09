import React from 'react'

import {Route, Switch} from 'react-router-dom'

import Home from './Home'
import Players from './Players'
import PlayerForm from './PlayerForm'
import Player from './Player'

class Routes extends React.Component {
  render () {
    return (
      <div>
        <Switch>

          <Route
            exact
            path='/'
            render={(props) =>
              <Home />}
          />

          <Route
            exact
            path='/players'
            render={(props) =>
              <Players
                players={this.props.players}
                fetchPlayers={this.props.fetchPlayers}
                {...props}
              />
            }
          />
          <Route
            path='/players/new'
            render={(props) =>
              <PlayerForm
                fetchPlayers={this.props.fetchPlayers}
                {...props}
              />
            }
          />
          <Route
            path='/players/edit/:id'
            render={(props) =>
              <PlayerForm
                fetchPlayers={this.props.fetchPlayers}
                players={this.props.players.find((player) =>
                  player.id === Number(props.match.params.id))
                }
                {...props}
              />
            }
          />
          <Route
            path='/players/:id'
            render={(props) =>
              <Player
                fetchPlayers={this.props.fetchPlayers}
                player={this.props.players.find((player) =>
                  player.id === Number(props.match.params.id)
                )}
                {...props}
              />
            }
          />

        </Switch>
      </div>
    )
  }
}

export default Routes
