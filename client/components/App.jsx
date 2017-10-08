import React from 'react'
import Header from './Header'
import Footer from './Footer'
import AppRoutes from './AppRoutes'
import { getPlayers } from '../api'

class App extends React.Component {
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
        <div className="app-routes">
          <AppRoutes
            players={this.state.players}
            fetchplayers={this.fetchPlayers}
          />

          {this.state.errorMessage &&
            <h1>{this.state.errorMessage}</h1>
          }
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    )
  }

}
module.exports = App
