import React from 'react'
import { Link } from 'react-router-dom'

function Players (props) {
  const players = props.players
  return (
    <div className='players'>
      <div className='row valign-wrapper'>
        <h4 className="col s11">Players</h4>
        <button className ="col s2"><Link to='/players/new'>Add Player</Link></button>
      </div>
        <table className="striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {players.map(player => {
              const {id, firstName, surName, knickName, favHand, favHeadsUp, leastFavHeadsUp, image} = player
              return <tr key={id} className='player'>
                <td>{firstName} {surName}</td>
                <td><img src={image} alt="" height="100" width="100"></img></td>
                <td>
                  <Link to={`/player/${id}`}>
                    <button>View</button>
                  </Link>
                </td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
  )
}
Players.defaultProps = {
  players: []
}
export default Players
