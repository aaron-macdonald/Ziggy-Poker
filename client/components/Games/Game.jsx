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
                  <th>Player ID</th>
                  <th>Buyin</th>
                  <th>Rebuy</th>
                  <th>Addon</th>
                  <th>Position</th>
                  <th>Prizemoney</th>
                  <th>Profit/Loss</th>
                </tr>
              </thead>
              <tbody>
                {gamedata.map(pdata => {
                  const {player_id, buyin, rebuys, addons, position, prizemoney} = pdata
                  const profitLoss = prizemoney - buyin - rebuys - addons
                  return <tr key={player_id}>
                    <td>{player_id}</td>
                    <td>{buyin}</td>
                    <td>{rebuys}</td>
                    <td>{addons}</td>
                    <td>{position}</td>
                    <td>{prizemoney}</td>
                    <td>{profitLoss}</td>
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
