import 'source-map-support/register'

// tslint:disable-next-line:no-var-requires
const serverless = require('serverless-http')

import * as bodyParser from 'body-parser'
import * as connect from 'connect'
import { dialogflowApp } from './src/app'

const app = connect()

app.use(bodyParser.json())
app.use(dialogflowApp())

module.exports.fulfillment = serverless(app)
