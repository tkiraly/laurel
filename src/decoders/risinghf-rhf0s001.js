const Parser = require('binary-parser').Parser

function decode(json) {
  //{
  //   "deveui": "4776e6ed0020004c",
  //   "port": 8,
  //   "count": 86776,
  //   "payload": "0184676a0500ffffc6",
  //   "ts": 1489005602
  // }

  var parser = new Parser()
    .endianess('little')
    .uint8('header')
    .uint16('temperature')
    .uint8('humidity')
    .uint16('period')
    .uint8('rssi')
    .int8('snr')
    .uint8('battery')
  var buf = new Buffer(json.payload, 'hex')
  var obj = parser.parse(buf)

  for (var i = 0; i < Object.keys(projections).length; i++) {
    var name = Object.keys(projections)[i]
    obj[name] = projections[name](obj[name])
  }

  obj = {
    raw: obj,
    main: {
      temperature: obj.temperature,
      humidity: obj.humidity
    }
  }

  return obj
}

var projections = {
  temperature: function (value) {
    return 175.72 * value / Math.pow(2, 16) - 46.85
  },
  humidity: function (value) {
    return 125 * value / Math.pow(2, 8) - 6
  },
  period: function (value) {
    return value * 2
  },
  rssi: function (value) {
    return value === 0xff ? 0 : -180 + value
  },
  snr: function (value) {
    return value / 4
  },
  battery: function (value) {
    return (value + 150) * 0.01
  }
}

module.exports = {
  decode: decode
}
