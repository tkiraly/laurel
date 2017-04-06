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
    .endianess('big')
    .skip(2)
    .uint32('timestamp')
    .skip(1)
    .uint32('serialnumber')
    .skip(2)
    .uint8('value1type')
    .uint32le('value1')
    .skip(2)
    .uint8('value2type')
    .uint32le('value2')
    .skip(2)
    .uint8('value3type')
    .uint32le('value3')

  var buf = new Buffer(json.payload, 'hex')
  var obj = parser.parse(buf)

  for (var i = 0; i < Object.keys(projections).length; i++) {
    var name = Object.keys(projections)[i]
    obj[name] = projections[name](obj[name])
  }

  obj = {
    raw: obj,
    main: {
      value1: obj.value1,
      value2: obj.value2,
      value3: obj.value3
    }
  }

  return obj
}

var projections = {
  value1: function (value) {
    return value / 100
  },
  value2: function (value) {
    return value / 10
  },
  value3: function (value) {
    return value / 100
  }
}

module.exports = {
  decode: decode
}
