import request from 'request-promise-native'

const req = request.defaults({
  baseUrl: 'https://api.magicthegathering.io/v1',
  json: true
})

export const findCardsByName = async name => {
  const { cards } = await req.get('/cards', { qs: { name } })
  return cards
}

export const findCardByName = async name => {
  const cards = findCardsByName(name)
  return cards[0]
}
