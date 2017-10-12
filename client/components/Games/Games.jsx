import React from 'react'
import { Link } from 'react-router-dom'

function Games (props) {
  const games = props.games
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
            <th></th>
          </tr>
        </thead>
        <tbody>
          {games.map(game => {
            const {id, date, location} = game
            return <tr key={id} className='game'>
              <td><h5>{date}</h5></td>
              <td><h5>{location}</h5></td>
                <td>
                  <Link to={`/players/player/${id}`}>
                    <div className="waves-effect waves-light btn">
                      View Game
                    </div>
                  </Link>
                </td>
            </tr>
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
