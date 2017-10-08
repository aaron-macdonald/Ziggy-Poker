import React from 'react'

import Player from './Player'

function Players (props) {
  return (
    <div className='players'>
      <h4 className=''>Players</h4>
      <table className="striped">
       <thead>
         <tr>
           <th>Name</th>
           <th>Knick name</th>
           <th>Favorite hand</th>
           <th>Fav heads up opp</th>
           <th>Least fav heads up opp</th>
           <th></th>
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
