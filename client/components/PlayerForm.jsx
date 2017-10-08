import React from 'react'
import { addPlayer, updatePlayer } from '../api'

class PlayerForm extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      errorMessage: null,
      firstName: '',
      surName: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillMount () {
    const {player} = this.props
    if (player) {
      this.setState(Object.assign({}, player)
    )}
  }

  componentWillReceiveProps (nextProps) {
    const {player} = nextProps
    if (player && !this.props.player) {
      this.setState(Object.assign({}, player))
    }
  }

  handleSubmit (e) {
    e.preventDefault()
    this.setState({ errorMessage: null })
    const {player} = this.props
    if (player) {
      updatePlayer(this.state)
        .then(() => this.props.fetchPlayers())
        .then(() => this.props.history.push(`/players/${player.id}`))
        .catch(err => this.setState({ errorMessage: err.message }))

    } else {
      addPlayer(this.state)
        .then((newPlayer) => {
          this.props.fetchPlayers()
          .then(() => this.props.history.push(`/players/${newPlayer.id}`))
        })
        .catch(err => this.setState({ errorMessage: err.message }))
    }
  }

  render () {
    return (
      <form className='playerForm' onSubmit={this.handleSubmit}>
        {this.props.player &&
          <h2 className=''>Edit Player</h2>
        }
        {!this.props.player &&
          <h2 className=''>Add a New Player</h2>
        }

        <fieldset>

          <div className=''>
           <label htmlFor='firstName'>First Name</label>
           <input
             type='text'
             name='firstName'
             value={this.state.firstName}
             onChange={(e) => this.setState({ firstName: e.target.value })}
           />
          </div>
          <div className=''>
           <label htmlFor='surName'>Last Name</label>
           <input
             type='text'
             name='surName'
             value={this.state.surName}
             onChange={(e) => this.setState({ surName: e.target.value })}
           />
          </div>

          <div className=''>
            <input className='' type='submit' />
          </div>
        </fieldset>

        {this.state.errorMessage &&
          this.state.errorMessage
        }
      </form>
    )
  }
}

export default PlayerForm
