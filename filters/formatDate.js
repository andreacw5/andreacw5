import Vue from 'vue'
import { format, fromUnixTime } from 'date-fns'
import { it } from 'date-fns/locale'
const { utcToZonedTime } = require('date-fns-tz')

export default () => {
  Vue.filter('formatDate', (value, filterFormat) => {
    if (value) {
      const date = fromUnixTime(value)
      const zoned = utcToZonedTime(date, 'Europe/Rome')
      return format(zoned, filterFormat || 'dd/MM/yyyy', { locale: it })
    }

    return ''
  })
}
