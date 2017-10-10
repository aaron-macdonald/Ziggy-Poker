import React from 'react'
import { Link } from 'react-router-dom'

export function Player () {
    const {id, firstName, surName, knickName, favHand, favHeadsUp, leastFavHeadsUp} = this.props.player
    return (
      <tr className='player'>
         <td>{firstName} {surName}</td>
         <td>{knickName}</td>
         <td>{favHand}</td>
         <td>{favHeadsUp}</td>
         <td>{leastFavHeadsUp}</td>
         <td>
            <Link to={`/players/edit/${id}`}>
              <button>Edit</button>
            </Link>
        </td>
      </tr>
    )
}
Player.defaultProps = {
  player: {
    firstName: '',
    surName: '',
    knickName: '',
    favHand: '',
    favHeadsUp: '',
    leastFavHeadsUp: ''
  }
}
export default Player
