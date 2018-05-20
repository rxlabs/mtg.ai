import { dialogflow } from 'actions-on-google'

export function dialogflowApp() {
  const app = dialogflow({ debug: true })

  app.intent('make_name', (conv, { color, num }) => {
    conv.close(`Alright, your silly name is ${color} ${num}!`)
  })

  return app
}
