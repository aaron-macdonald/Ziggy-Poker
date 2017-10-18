import React from 'react'
import { Link } from 'react-router-dom'

function Table (props) {

  return (
    <div className='table'>
      <div className='row valign-wrapper'>
        <h4 className='col s12'>Table</h4>
      </div>
      <table className="striped centered">
        <thead>
          <tr>
            <th><h5>Knickname</h5></th>
            <th><h5>Played</h5></th>
            <th><h5>1st's</h5></th>
            <th><h5>2nd's</h5></th>
            <th><h5>3rd's</h5></th>
            <th><h5>4th's</h5></th>
            <th><h5>Average</h5></th>
            <th><h5>Spend</h5></th>
            <th><h5>Prizemoney</h5></th>
            <th><h5>Profit/Loss</h5></th>
          </tr>
        </thead>
        <tbody>
          <tr >
            <td><h5>Azza</h5></td>
            <td><h5>6</h5></td>
            <td><h5>1</h5></td>
            <td><h5>1</h5></td>
            <td><h5>1</h5></td>
            <td><h5>0</h5></td>
            <td><h5>3.3</h5></td>
            <td><h5>380</h5></td>
            <td><h5>390</h5></td>
            <td><h5>10</h5></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
export default Table
