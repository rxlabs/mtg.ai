import { Card, Cards } from 'mtgsdk-ts'

interface ICard extends Card {
  text?: string
}

export async function findCardByName(name): Promise<ICard> {
  const cards = await Cards.where({ name })
  return cards[0]
}
