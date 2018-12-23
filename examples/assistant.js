import path from 'path'

import { readJson } from 'fs-extra'

import { dialogflowApp } from '../lib'

export default ({ log }) => async (file = 'card-name') => {
  const app = dialogflowApp()
  const event = await readJson(path.join('fixtures', 'post.json'))
  const context = await readJson(path.join('fixtures', 'context.json'))
  const body = await readJson(path.join('fixtures', `${file}.json`))
  event.body = JSON.stringify(body)
  const result = await app(event, context)
  return result
}
