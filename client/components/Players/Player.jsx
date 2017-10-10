import React from 'react'
import { Link } from 'react-router-dom'


function Player (props) {
  console.log(props);
    const {id, firstName, surName, knickName, favHand, favHeadsUp, leastFavHeadsUp} = props.player
    return (
      <tr className='player'>
         <td>{firstName} {surName}</td>
         <td>{knickName}</td>
         <td>{favHand}</td>
         <td>{favHeadsUp}</td>
         <td>{leastFavHeadsUp}</td>
         <td>
            <Link to={`/players/view/${id}`}>
              <button>View</button>
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
