import React from 'react'
import { Link } from 'react-router-dom'

function Player (props) {

  const {id, firstName, surName, knickName, favHand, favHeadsUp, leastFavHeadsUp, image} = props.player

  return (
    <table className="">
      <thead>
        <tr>
          <th>Name</th>
          <th>{firstName} {surName}</th>
        </tr>
      </thead>
      <tbody>
        <tr className=''>
          <td>Knickname</td>
          <td>{knickName}</td>
        </tr>
        <tr>
          <td>Favorite Hand</td>
          <td>{favHand}</td>
        </tr>
        <tr>
          <td>Favorite Heads Up</td>
          <td>{favHeadsUp}</td>
        </tr>
        <tr>
          <td>Least Favorite Heads Up</td>
          <td>{leastFavHeadsUp}</td>
        </tr>
        <tr>
          <td>Image</td>
          <td><img src={image} alt="" height="400" width="300"></img></td>
        </tr>
        <tr>
          <td>
          <Link to={`/players/edit/${id}`}>
            <button>Edit</button>
          </Link>
          </td>
        </tr>
      </tbody>
    </table>
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
