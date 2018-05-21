import i18n from 'i18next'

import resources from '../locales'

console.log(resources)
export default () => i18n.init({
  lng: 'en',
  defaultNS: 'common',
  resources
})
