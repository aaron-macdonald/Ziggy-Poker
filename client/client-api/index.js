import request from 'superagent'

export function getPlayers (props) {
  return request.get('/api/v1')
    .then(data => {
      const players = data.body
      return players.map(player => {
        return Object.assign(
          {},
          player
        )
      })
    })
    .catch(err => {
      throw Error('Cannot GET Players!')
    })
}
