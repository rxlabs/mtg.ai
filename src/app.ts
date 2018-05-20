import { dialogflow } from 'actions-on-google'
import * as request from 'request'

const req = request.defaults({
  baseUrl: 'https://api.magicthegathering.io/v1',
  json: true
})

const findCard = (name, cb) => {
  req.get('/cards', { qs: { name } }, cb)
}

export function dialogflowApp() {
  const app = dialogflow()

  app.intent('get_card_by_name', (conv, { cardName }) => {
    findCard(cardName, (err, res, body) => {
      if (err || body.cards.length === 0) {
        conv.close('Could not find card.')
      }

      const { name, text } = body.cards[0]
      conv.close(`The card ${name} reads ${text}`)
    })
  })

  return app
}
