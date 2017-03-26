const devices = require('../config/devices.json')
const config = require('config')
const moment = require('moment')
const flatten = require('flat')

const Influx = require('influx')
const influx = new Influx.InfluxDB({
    hosts: config.get('influx.hosts'),
    database: config.get('influx.databasename')
}
)

influx.getDatabaseNames()
    .then(function (names) {
        if (names.indexOf(config.get('influx.databasename')) < 0) {
            influx.createDatabase(config.get('influx.databasename'))
                .then(function () {
                    console.log(config.get('influx.databasename') + " database is created")//fulfilled
                }, function (reason) {
                    console.log(`${reason}`)//rejected
                })
        }
    })

const Websocket = require('ws')

var ws = initws()

function initws() {
    var ws = new Websocket(config.get("websocket.host"))
    ws.on('open', function () {
        ws.send(JSON.stringify({
            op: 'login',
            user: config.get("websocket.user"),
            pass: config.get("websocket.pass")
        }))
    })
    ws.on('message', function (data, flags) {
        let json = JSON.parse(data)
        switch (json.op) {
            case 'push':
                handlePush(json)
                break
            case 'var_push':
                break
            case 'login':
                handleLogin(json)
                break
            case 'gateways_info':
                handleGateways_info(json)
                break
            case 'mod_list_full':
                handleMod_list_full(json)
                break
            case 'ping':
                handlePing(json)
                break
            case 'mod_log':
                handleMod_log(json)
                break
            default:
                console.log(data)
                break
        }
    })

    return ws
}



function handlePush(json) {
    //{
    //   "op": "push",
    //   "deveui": "4776e6ed0020004c",
    //   "port": 8,
    //   "count": 86776,
    //   "payload": "0184676a0500ffffc6",
    //   "ts": 1489005602
    // }
    if (!devices[json.deveui]) {
        console.log('from handlePush unknown deveui: ' + json.deveui)
        return
    }

    sendmodlog({ deveui: json.deveui, from: moment().unix() - 60 })

    delete json.op
    var decoded = decode(json)
    var f = {
        measurement: devices[json.deveui].manufacturer + '-' + devices[json.deveui].model + '-' + json.port,
        tags: { deveui: json.deveui },
        fields: Object.assign({ port: json.port, count: json.count }, decoded.main)
    }
    influx.writePoints([{
        measurement: f.measurement,
        tags: f.tags,
        fields: f.fields,
        timestamp: json.ts * Math.pow(10, 9)
    }]).catch(err => {
        console.error(`${err}`);
    })
}

function sendmodlog(obj) {
    var logpacket = {
        op: 'mod_log',
        way: 'up',
        dups: 1
    }
    Object.assign(logpacket, obj)
    if (ws.readyState !== ws.OPEN) {
        console.log('mod_log not sent, websocket is closed')
        return
    }
    ws.send(JSON.stringify(logpacket))
}

function decode(json) {
    var d = require('./decoders/' + devices[json.deveui].manufacturer + '-' + devices[json.deveui].model)
    return d.decode(json)
}

function handleLogin(json) {
    console.log(JSON.stringify(json))
}

function handleGateways_info(json) {
    if (json.ok) {
        var points = json.gws.map(function (gw) {
            let id1 = gw.id
            delete gw.id
            let dcup = gw.duty_cycle_used_percent
            delete gw.duty_cycle_used_percent
            gw.duty_cycle_used_percent = parseFloat(dcup.slice(0, dcup.length - 1)) || 0
            return {
                measurement: config.get('measurementnames.gateways'),
                tags: { id: id1 },
                fields: gw
            }
        })
        influx.writePoints(points)
            .catch(err => {
                console.error(`${err}`);
            })
    }
}

function handleMod_list_full(json) {
    if (json.ok) {
        var points = json.mods.map(function (mod) {
            return {
                measurement: config.get('measurementnames.modlisfull'),
                tags: { deveui: mod.deveui },
                fields: mod.attributes[0]
            }
        })
        influx.writePoints(points)
            .catch(err => {
                console.error(`${err}`);
            })
    }
}


function handlePing(json) {
    if (json.ok) {
        influx.writePoints([{
            measurement: config.get('measurementnames.ping'),
            fields: { pinged: true },
            timestamp: moment().unix() * Math.pow(10, 9)
        }]).catch(err => {
            console.error(`${err}`);
        })
    }
}

function handleMod_log(json) {
    if (json.ok) {
        var tsstring = null
        json.packets.sort(function (a, b) {
            if (a < b) return -1
            if (a > b) return 1
            return 0
        })
        var packets = json.packets.map(function (element) {
            var source = element.source
            delete element.source
            tsstring = element.ts
            var ts = parseFloat(element.ts.substr(0, 17))
            delete element.ts
            var gw = element.gw
            delete element.gw
            delete element.time
            delete element.decoded
            var who = element.who ? element.who : "unknown"
            delete element.who
            delete element.payload
            element.radio = parseRadio(element.radio)
            element = flatten(element, { delimiter: '_' })
            return {
                measurement: config.get('measurementnames.modlog'),
                tags: {
                    deveui: json.deveui,
                    gw: gw,
                    source: source,
                    who: who
                },
                fields: element,
                timestamp: ts * Math.pow(10, 9)
            }
        })

        influx.writePoints(packets)
            .catch(err => {
                console.error(`${err}`);
            })

        if (json.packets.length === 100) {
            sendmodlog({ from: parseInt(tsstring.substr(0, 10), 10) })
        }
    }
}

function parseRadio(radio) {
    var re = /freq=([0-9]+) bw=([0-9]+) cr=([0-9/]+) SF([0-9]+) crc=([0-9]+) cost=([0-9]+)ms power=([0-9]+) snr=([0-9\.\-]+) rssi=([0-9\-]+) tmst=([0-9]+)us/;
    var a = radio.match(re)
    var obj = {
        freq: a[1],
        bw: a[2],
        cr: a[3],
        SF: a[4],
        crc: a[5],
        cost: a[6],
        power: a[7],
        snr: a[8],
        rssi: a[9],
        tmst: a[10],
    }
    return obj
}

var second = 1000

setInterval(function () {
    if (ws.readyState !== ws.OPEN) {
        console.log('gateways_info not sent, websocket is closed')
        return
    }
    ws.send(JSON.stringify({ op: 'gateways_info' }))
}, 59 * second)

setInterval(function () {
    if (ws.readyState !== ws.OPEN) {
        console.log('ping not sent')
        ws = initws()
        console.log('websocket is reinitialized')
        return
    }
    ws.send(JSON.stringify({ op: 'ping' }))
}, 60 * second)

setInterval(function () {
    if (ws.readyState !== ws.OPEN) {
        console.log('mod_list_full not sent, websocket is closed')
        return
    }
    ws.send(JSON.stringify({ op: 'mod_list_full' }))
}, 61 * second)
