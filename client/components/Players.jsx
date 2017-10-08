import React from 'react'

import Player from './Player'

function Players (props) {
  return (
    <div className='players'>
      <h4 className=''>Players</h4>
      {props.players.map(player => {
        return <Player key={player.id} player={player} fetchPlayers={props.fetchPlayers} path={props.location.pathname}/>
      })}
    </div>
  )
}

Players.defaultProps = {
  players: []
}

export default Players
