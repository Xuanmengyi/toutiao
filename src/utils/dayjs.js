import dayjs from 'dayjs'
var relativeTime = require('dayjs/plugin/relativeTime')
require('dayjs/locale/zh-cn')
dayjs.extend(relativeTime)
dayjs.locale('zh-cn')
export default dayjs
