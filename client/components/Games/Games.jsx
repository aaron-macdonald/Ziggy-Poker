import React from 'react'
import { Link } from 'react-router-dom'

function Games (props) {
  const games = props.games
  console.log(games);
  return (
    <div className='games'>
      <div className='row valign-wrapper'>
        <h4 className='col s12'>Games</h4>
          <Link to='#'>
            <div className="waves-effect waves-light btn">
              Add Game
            </div>
          </Link>
      </div>
      <table className="striped centered">
        <thead>
          <tr>
            <th><h5>Date</h5></th>
            <th><h5>Location</h5></th>
          </tr>
        </thead>
        <tbody>
          {games.map(game => {
            console.log(game);
          })}
        </tbody>
      </table>
    </div>
  )
}
Games.defaultProps = {
  date: '',
  location: ''
}
export default Games
