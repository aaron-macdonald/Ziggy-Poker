import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import Players from './Players/Players'
import Player from './Players/Player'
import { getPlayers } from '../client-api'

class Layout extends React.Component {
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
      <div className="app">
        <div className="header">
          <Header />
        </div>
        <div className="app-routes container">
          <Switch>
            <Route
              exact
              path='/'
              render={() =>
                <Home />}
            />
            <Route
               exact
               path='/players'
               render={(props) =>
                 <Players
                   players={this.state.players}
                   fetchPlayers={this.fetchPlayers}
                   {...props}
                 />
               }
            />
            <Route
              path='/player/:id'
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
          </Switch>
          {this.state.errorMessage &&
            <h1>{this.state.errorMessage}</h1>}
        </div>
        <div className="footer center">
          <Footer />
        </div>
      </div>
    )
  }
}
module.exports = Layout
