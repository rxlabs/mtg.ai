import { dialogflow } from 'actions-on-google'
import * as request from 'request-promise-native'

const req = request.defaults({
  baseUrl: 'https://api.magicthegathering.io/v1',
  json: true
})

const findCard = name => req.get('/cards', { qs: { name } })

export function dialogflowApp() {
  const app = dialogflow()

  app.intent('get_card_by_name', (conv, { cardName }) => {
    return findCard(cardName).then(body => {
      if (body.cards.length === 0) {
        conv.close('Could not find card.')
        return
      }

      const { name, text } = body.cards[0]
      conv.close(`The card ${name} reads ${text}`)
    })
  })

  return app
}
