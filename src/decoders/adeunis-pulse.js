const Parser = require('binary-parser').Parser

function decode(json) {
  //{
  //   "deveui": "4776e6ed0020004c",
  //   "port": 8,
  //   "count": 86776,
  //   "payload": "0184676a0500ffffc6",
  //   "ts": 1489005602
  // }

  var statusinfo = new Parser()
    .bit4('framecount')
    .bit1('hwerror')
    .bit1('configswitcherror')
    .bit1('lowbaterror')
    .bit1('configdone')
    .uint8('channel1type')
    .uint32le('index1')
    .uint8('channel2type')
    .uint32le('index2')

  var parser = new Parser()
    .uint8('codeid')
    .choice('code', {
      tag: 'codeid',
      choices: {
        0x02: statusinfo
      }
    })

  var buf = new Buffer(json.payload, 'hex')

  var obj = {}
  obj.raw = parser.parse(buf)
  var temp = JSON.parse(JSON.stringify(obj.raw))
  obj.main = temp.code

  return obj

}

module.exports = {
  decode: decode
}
