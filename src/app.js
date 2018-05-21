import { dialogflow, Image, BasicCard } from 'actions-on-google'
import log from 'roarr'
import {
  chain,
  find,
  isNothing
} from 'sanctuary'

import { findCardsByName } from './mtgio'
import initI18n from './i18n'

export function dialogflowApp () {
  const app = dialogflow()
  const i18n = initI18n({lng: 'en'})
  const t = (...args) => i18n.t(...args)

  app.intent('get_card_by_name', async (conv, { cardName }) => {
    const cards = await findCardsByName(cardName)
    const card = find(({imageUrl}) => !!imageUrl, cards)

    if (isNothing(card)) {
      conv.close('Could not find card.')
      return
    }

    chain(c => {
      const { name, text, imageUrl, flavor } = c
      const body = text || flavor
      const bc = new BasicCard({
        text: body,
        title: name,
        image: new Image({
          url: imageUrl,
          alt: name
        })
      })
      conv.ask(t('card', {name, body}))
      conv.ask(bc)
      log({ c }, 'Card')
      return card
    }, card)
  })

  return app
}
