const Parser = require('binary-parser').Parser

function decode(json) {
  //{
  //   "deveui": "4776e6ed0020004c",
  //   "port": 8,
  //   "count": 86776,
  //   "payload": "0184676a0500ffffc6",
  //   "ts": 1489005602
  // }

  var data = new Parser()
    .int16('temperature')
    .uint16('humidity')
    .uint16('pm25density')

  var parser = new Parser()
    .uint8('devicetype')
    .choice('device', {
      tag: 'devicetype',
      choices: {
        0x03: data
      }
    })

  var buf = new Buffer(json.payload, 'hex')

  var obj1 = parser.parse(buf)
  for (var i = 0; i < Object.keys(projections).length; i++) {
    var name = Object.keys(projections)[i]
    obj1.device[name] = projections[name](obj1.device[name])
  }
  var obj = {}
  obj.raw = obj1
  var temp = JSON.parse(JSON.stringify(obj.raw))
  obj.main = temp.device

  return obj

}


var projections = {
  temperature: function (value) {
    return value / 100
  },
  humidity: function (value) {
    return value / 100
  }
}

module.exports = {
  decode: decode
}
