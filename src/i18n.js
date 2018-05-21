import i18n from 'i18next'

import resources from '../locales'

console.log(resources)
export default ({lng}) => i18n.init({
  defaultNS: 'common',
  lng,
  resources
})
