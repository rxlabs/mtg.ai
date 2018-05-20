import 'source-map-support/register'

import { dialogflowApp } from './src/app'

module.exports.fulfillment = dialogflowApp()
