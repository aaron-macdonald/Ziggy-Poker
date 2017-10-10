import request from 'superagent'

export function getPlayers () {
  return request.get('/v1/players')
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
