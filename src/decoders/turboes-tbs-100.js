const Parser = require('binary-parser').Parser

function decode(json) {
  //{
  //   "deveui": "4776e6ed0020004c",
  //   "port": 8,
  //   "count": 86776,
  //   "payload": "0184676a0500ffffc6",
  //   "ts": 1489005602
  // }


  var alarminfo = new Parser()
    .bit4('framecount')
    .bit1('firealarm')
    .bit1('faultalarm')
    .bit1('lbalarm')
    .bit1('tempalarm')
    .uint8('temperature')
    .uint8('reserved')
    .uint8('frameend')

  var statusinfo = new Parser()
    .bit4('framecount')
    .bit1('firealarm')
    .bit1('faultalarm')
    .bit1('lbalarm')
    .bit1('tempalarm')
    .uint8('temperature')
    .uint8('reserved')
    .uint8('frameend')

  var parser = new Parser()
    .uint8('frametype')
    .choice('frame', {
      tag: 'frametype',
      choices: {
        0xa1: alarminfo,
        0xa2: statusinfo
      }
    })

  var buf = new Buffer(json.payload, 'hex')

  var obj = {}
  obj.raw = parser.parse(buf)
  var temp = JSON.parse(JSON.stringify(obj.raw))
  delete temp.frame.frameend
  delete temp.frame.reserved
  obj.main = temp.frame

  return obj

}

module.exports = {
  decode: decode
}
