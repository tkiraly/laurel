const Parser = require('binary-parser').Parser

function decode(json) {
  //{
  //   "deveui": "4776e6ed0020004c",
  //   "port": 8,
  //   "count": 86776,
  //   "payload": "0184676a0500ffffc6",
  //   "ts": 1489005602
  // }

  switch (json.port) {
    case 9:
      var parser = new Parser()
        .endianess('big')
        .bit1('batterytype')
        .bit7('batterylevel')
        .floatle('temperature')
        .floatle('humidity')
      var buf = new Buffer(json.payload, 'hex')

      var obj = {}
      obj.raw = parser.parse(buf)
      var temp = JSON.parse(JSON.stringify(obj.raw))
      obj.main = temp

      return obj
    default:
      console.log("unknown converter for " + JSON.stringify(json))
      return {
        raw: {},
        main: {}
      }
  }
}

module.exports = {
  decode: decode
}
