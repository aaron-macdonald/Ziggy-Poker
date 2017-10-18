import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Table from './Table'

import { getTableData } from '../../client-api'

class TableRoutes extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      table: [],
      errorMessage: ''
    }
    this.fetchTable = this.fetchTable.bind(this)
  }
  componentWillMount() {
    this.fetchTable()
  }
  fetchTable() {
    return getTableData()
      .then(table => {
        this.setState({ table: table })
      })
      .catch(err => {
        this.setState({ errorMessage: err.message })
      })
  }
  render() {
    return (
      <div className="table-routes">
        <Switch>
          <Route exact path='/table' render={ props =>
            <Table
            />
          }/>
        </Switch>
        {this.state.errorMessage &&
          <h1>{this.state.errorMessage}</h1>}
      </div>
    )
  }
}
module.exports = TableRoutes
