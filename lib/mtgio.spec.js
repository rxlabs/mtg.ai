import test from 'ava'
import nock from 'nock'

import {
  findCardByName,
  findCardsByName
} from './mtgio'

test.beforeEach(t => {
  nock.disableNetConnect()
  t.context.api = 'https://api.magicthegathering.io/v1'
})

test('findCardsByName', async t => {
  nock(t.context.api)
    .get('/cards')
    .query({ name: 'Archangel' })
    .reply(200, { cards: [ { name: 'Archangel Avacyn' } ] })

  const cards = await findCardsByName('Archangel')
  t.snapshot(cards)
})

test('findCardByName', async t => {
  const imageUrl = 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=409741&type=card'
  nock(t.context.api)
    .get('/cards')
    .query({ name: 'Archangel' })
    .reply(200, { cards: [ { name: 'Archangel Avacyn', imageUrl } ] })

  const card = await findCardByName('Archangel')
  t.snapshot(card)
})
