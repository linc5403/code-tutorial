const moment  = require('moment');

function formatTime(str){

   return moment(str).locale('zh_cn').format('YYYYMMMMDo  aH:MM:SS ')
}

module.exports = {

    formatTime
}