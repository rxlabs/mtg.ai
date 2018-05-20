import { dialogflow } from 'actions-on-google'

export function dialogflowApp() {
  const app = dialogflow()

  app.intent('make_name', (conv, { color, num }) => {
    conv.close(`Alright, your silly name is ${color} ${num}!`)
  })

  return app
}
