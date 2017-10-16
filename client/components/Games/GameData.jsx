import React from 'react'
import { Link } from 'react-router-dom'

class GameData extends React.Component {
  // const {id, fetchGameData, gamedata} = this.props

  componentWillMount() {
    this.props.fetchGameData(this.props.id)
  }
  render () {
    return (
      <div className="card">
        <div className="card-action">
          <table className="stripped">
            <thead>
              <tr>
                <th>Game_Id</th>
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
              {this.props.gamedata.map(pdata => {
                const {id, game_id, player_id, buyin, rebuys, addons, position, prizemoney} = pdata
                const profitLoss = (prizemoney - buyin - rebuys - addons)
                return <tr key={id}>
                  <td>{game_id}</td>
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
    )
  }
}
export default GameData
