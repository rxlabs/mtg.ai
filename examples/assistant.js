import path from 'path'

import { readJson } from 'fs-extra'

import { dialogflowApp } from '../lib'

export default ({ log }) => async (file = 'card-name') => {
  const app = dialogflowApp()
  const req = await readJson(path.join('fixtures', `post.json`))
  const body = await readJson(path.join('fixtures', `${file}.json`))
  req.body = body
  const result = app(req, {})
  return result
}
