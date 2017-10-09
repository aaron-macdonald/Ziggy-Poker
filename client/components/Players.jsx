import React from 'react'
import { Link } from 'react-router-dom'

import Player from './Player'

function Players (props) {
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
            <th>Knick name</th>
            <th>Favorite hand</th>
            <th>Fav heads up opp</th>
            <th>Least fav heads up opp</th>
        </tr>
      </thead>
        <tbody>
          {props.players.map(player => {
            return <Player key={player.id} player={player} fetchPlayers={props.fetchPlayers} path={props.location.pathname}/>
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
