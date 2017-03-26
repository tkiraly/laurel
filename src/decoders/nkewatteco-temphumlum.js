const Parser = require('binary-parser').Parser

function decode(json) {
    //{
    //   "deveui": "4776e6ed0020004c",
    //   "port": 8,
    //   "count": 86776,
    //   "payload": "0184676a0500ffffc6",
    //   "ts": 1489005602
    // }
    var tempreraturedata = new Parser()
        .int16('temperature')

    var temperaturemeasurement = new Parser()
        .uint16('AttributeID')
        .uint8('Attributetype')
        .nest('data', { type: tempreraturedata })

    var humiditydata = new Parser()
        .int16('humidity')

    var humiditymeasurement = new Parser()
        .uint16('AttributeID')
        .uint8('Attributetype')
        .nest('data', { type: humiditydata })

    var autoreport = new Parser()
        .uint16('ClusterID')
        .choice('Cluster', {
            tag: 'ClusterID',
            choices: {
                0x0402: temperaturemeasurement,
                0x0405: humiditymeasurement
            }
        })

    var parser = new Parser()
        .skip(7)
        .uint8('flag')
        .uint8('CommandID')
        .choice('Command', {
            tag: 'CommandID',
            choices: {
                0x0a: autoreport
            }
        })

    var buf = new Buffer(json.payload, 'hex')
    var result = parser.parse(buf)

    if (result.Command.Cluster['data'] && result.Command.Cluster.data.hasOwnProperty('temperature')) {
        result.Command.Cluster.data.temperature /= 100
    }

    if (result.Command.Cluster['data'] && result.Command.Cluster.data.hasOwnProperty('humidity')) {
        result.Command.Cluster.data.humidity /= 100
    }
    
    result = { raw: result, main: result.Command.Cluster.data }

    return result
}

module.exports = {
    decode: decode
}