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
      <div id='' className=''>
        <div className=''>
          <Header />
        </div>
        <div className=''>
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
