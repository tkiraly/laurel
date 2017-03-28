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
        //battery
        .bit1('batterytype')
        .bit7('batterylevel')
        //event
        .bit5('reserved')
        .bit1('batterystatus')
        .bit1('tamper')
        .bit1('intrusionalarm')
        .uint16('opcnt')
      var buf = new Buffer(json.payload, 'hex')
      var obj = parser.parse(buf)

      obj = {
        raw: obj,
        main: obj
      }

      return obj
    default:
      console.error("unknown converter for " + JSON.stringify(json))
      return {
        raw: {},
        main: {}
      }
  }
}

module.exports = {
  decode: decode
}
