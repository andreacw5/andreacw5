import Vue from 'vue'
import { format } from 'date-fns'
import { it, enGB } from 'date-fns/locale'
const { utcToZonedTime } = require('date-fns-tz')

export default () => {
  Vue.filter('formatDate', (value, filterFormat, locale) => {
    if (value) {
      const date = new Date(value)
      const zoned = utcToZonedTime(date, 'Europe/Rome')
      const formattedDate = format(zoned, filterFormat || 'dd/MM/yyyy', { locale: locale === 'it' ? it : enGB })
      return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1)
    }

    return ''
  })
}
