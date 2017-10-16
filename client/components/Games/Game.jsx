import React from 'react'
import { Link } from 'react-router-dom'
import GameData from './GameData'

function Game (props) {
  const { id, date, location } = props.game
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
                  <th>Id</th>
                  <th>Date</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{id}</td>
                  <td>{date}</td>
                  <td>{location}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <GameData id ={id} fetchGameData={props.fetchGameData} />
        </div>
      </div>
    </div>
  )
}
export default Game
