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
        console.log(`App: ${players}`)
        this.setState({ players: players })
      })
      .catch(err => {
        this.setState({ errorMessage: err.message })
      })
  }

  render () {
    return (
      <div id='layout' className='pure-g'>
        <div className='sidebar pure-u-1 pure-u-md-1-4'>
          <Header />
        </div>
        <div className='content pure-u-1 pure-u-md-3-4'>
          <AppRoutes
            players={this.state.players}
            fetchplayers={this.fetchPlayers}
          />
          {this.state.errorMessage &&
            <h1>{this.state.errorMessage}</h1>
          }
        </div>
        <Footer />
      </div>
    )
  }

}

module.exports = App
