import got from 'got'

const http = got.extend({
  baseUrl: 'https://api.magicthegathering.io/v1',
  json: true
})

export const findCardsByName = async name => {
  const { body: { cards } } = await http.get('/cards', { query: { name } })
  return cards
}

export const findCardByName = async name => {
  const cards = await findCardsByName(name)
  return cards[0]
}
