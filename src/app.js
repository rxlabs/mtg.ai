import { dialogflow, Image } from 'actions-on-google'
import log from 'roarr'
import {
  chain,
  find,
  isNothing
} from 'sanctuary'

import { findCardsByName } from './mtgio'

export function dialogflowApp () {
  const app = dialogflow()

  app.intent('get_card_by_name', async (conv, { cardName }) => {
    const cards = await findCardsByName(cardName)
    const card = find(({imageUrl}) => !!imageUrl, cards)

    if (isNothing(card)) {
      conv.close('Could not find card.')
      return
    }

    chain(c => {
      const { name, text, imageUrl } = c
      conv.ask(new Image({url: imageUrl, alt: name}))
      conv.ask(`The card ${name} reads ${text}`)
      log({ c }, 'Card')
      return card
    }, card)
  })

  return app
}
