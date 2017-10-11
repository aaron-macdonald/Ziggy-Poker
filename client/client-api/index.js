import request from 'superagent'

export function getPlayers () {
  return request.get('/api/v1/players')
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

export function addPlayer (player) {
  return request.post('/api/v1/player/add')
    .send(player)
    .then(result => {
      return result.body
    })
    .catch(err => {
      throw Error('Cannot POST a Post!')
    })
}

export function updatePlayer (player) {
  const{id} = player
  return request.put(`/api/v1/player/${id}/edit`)
    .send(player)
    .then(result => {
      return result.body
    })
    .catch(err => {
      throw Error('Cannot PUT a Post!')
    })
}
