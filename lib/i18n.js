import i18n from 'i18next'

import resources from '../data/locales'

export default ({ lng }) => i18n.init({
  defaultNS: 'common',
  lng,
  resources
})
