import React from 'react'
import { Link } from 'react-router-dom'

function Game (props) {
  const { id, date, location } = props.game
  const { gamedata, fetchGameData } = props
  return (
    <div className="row">
      <div className="col s12 m10 offset-m1">
        <div className="card">
          <div className="card-action">
            <Link to= {`/games/game/${id}/edit/`}>
              <div className="center">
                <div className="waves-effect waves-light btn">Edit Game Details</div>
              </div>
            </Link>
          </div>
          <div className="card-content">
            <table className="striped">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>{date}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Location</td>
                  <td>{location}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="card">
          <div className="card-action">
            <table className="stripped">
              <thead>
                <tr>
                  <th>thead1</th>
                  <th>thead2</th>
                </tr>
              </thead>
              <tbody>
                {gamedata.map(pdata => {
                  const {player_id, position} = pdata
                  return <tr key={player_id}>
                  <td>{player_id}</td>
                  <td>{position}</td>
                </tr>
              })}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  )
}
export default Game
