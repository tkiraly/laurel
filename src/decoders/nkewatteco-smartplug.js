const Parser = require('binary-parser').Parser

function decode(json) {
    //{
    //   "deveui": "4776e6ed0020004c",
    //   "port": 8,
    //   "count": 86776,
    //   "payload": "0184676a0500ffffc6",
    //   "ts": 1489005602
    // }
    var meteringdata = new Parser()
        .uint8('datalength')
        .bit8("whpre")
        .uint16('wh')
        .bit8("varhpre")
        .uint16('varh')
        .uint16('samples')
        .int16('w')
        .int16('var')

    var simplemeteringclusterrep = new Parser()
        .uint16('AttributeID')
        .uint8('Attributetype')
        .nest('data', { type: meteringdata })

    var autoreport = new Parser()
        .uint16('ClusterID')
        .choice('Cluster', {
            tag: 'ClusterID',
            choices: {
                0x0052: simplemeteringclusterrep
            }
        })

    var parser = new Parser()
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

    if (result.Command.Cluster['data'] && result.Command.Cluster.data.hasOwnProperty('whpre')) {
        //2 bit24 in a row is not working so i had to do this hack
        result.Command.Cluster.data.wh = result.Command.Cluster.data.wh || (result.Command.Cluster.data.whpre << 16)
        result.Command.Cluster.data.varh = result.Command.Cluster.data.varh || (result.Command.Cluster.data.varhpre << 16)

        delete result.Command.Cluster.data.whpre
        delete result.Command.Cluster.data.varhpre
    }
    
result = {raw: result, main: result.Command.Cluster.data}

    return result
}

module.exports = {
    decode: decode
}