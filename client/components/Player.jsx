import React from 'react'
import { Link } from 'react-router-dom'
import { deletePlayer } from '../api'

class Player extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      errorMessage: '',
    }
    this.deletePlayer = this.deletePlayer.bind(this)
  }

  componentDidMount () {
  }

  deletePlayer () {
    deletePlayer(this.props.player.id)
      .then(() => this.props.fetchPlayers())
      .catch(err => this.setState({ errorMessage: err.message }))
  }

  render () {
    const {title, dateCreated, id} = this.props.player
    return (
      <div className='player'>
        <Link to={`/players/${id}`}>
          <header className='player-header'>
            <h2 className='player-title'>{firstName}</h2>
            <h2 className='player-title'>{lastName}</h2>
          </header>
        </Link>

        <div className='pure-button-group' role='group'>
          <Link to={`/players/edit/${id}`}>
            <button className='button-secondary pure-button'>Edit</button>
          </Link>
          <button className='button-error pure-button' onClick={this.deletePlayer}>Delete</button>
        </div>

        {this.state.errorMessage &&
          this.state.errorMessage
        }
      </div>
    )
  }
}

Player.defaultProps = {
  player: {
    firstName: '',
    surName: ''
  }
}


export default Player
