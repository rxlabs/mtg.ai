import { dialogflow } from 'actions-on-google'
import log from 'roarr'

import { findCardByName } from './mtgio'

export function dialogflowApp() {
  const app = dialogflow()

  app.intent('get_card_by_name', async (conv, { cardName }) => {
    const card = await findCardByName(cardName)
    log(`Card ${card}`)

    if (!card) {
      conv.close('Could not find card.')
      return
    }

    const { name, text } = card
    conv.close(`The card ${name} reads ${text}`)
  })

  return app
}
