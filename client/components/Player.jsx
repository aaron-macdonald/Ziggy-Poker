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
    const {firstName, surName, id} = this.props.player
    return (
      <div className='player'>
        <Link to={`/players/${id}`}>
          <header className=''>
            <h2 className=''>{firstName}</h2>
            <h2 className=''>{surName}</h2>
          </header>
        </Link>

        <div className='' role=''>

          <Link to={`/players/edit/${id}`}>
            <button className=''>Edit</button>
          </Link>
          <button className='' onClick={this.deletePlayer}>Delete</button>
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
