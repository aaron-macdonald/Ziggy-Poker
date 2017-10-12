import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Games from './Games'
import Game from './Game'

import { getGames } from '../../client-api'

class GameRoutes extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      games: [],
      errorMessage: ''
    }
    this.fetchGames = this.fetchGames.bind(this)
  }
  componentWillMount () {
    this.fetchGames()
  }
  fetchGames () {
    return getGames()
      .then(games => {
        this.setState({ games: games })
      })
      .catch(err => {
        this.setState({ errorMessage: err.message })
      })
  }
  render () {
    return (
      <div className="game-routes">
        <Switch>
          <Route
            exact
            path='/games'
            render={ (props) =>
              <Games
                games={this.state.games}
                fetchGames={this.fetchGames}
                {...props}
                />
            }
            />
          <Route
            exact
            path='/games/game/:id'
            render={ (props) =>
              <Game
                game={this.state.games.find((game) =>
                  game.id === Number(props.match.params.id))
                }
                fetchGames={this.fetchGames}
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
module.exports = GameRoutes
