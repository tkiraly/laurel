/* global describe
   global it */

var expect = require('chai').expect


describe('ascoel', function () {
    describe('cm868lrth', function () {
        var payload = 'e4015ba7bc4170da0342'
        var expected = {
            raw: {
                batterylevel: 100,
                batterystatus: 0,
                batterytype: 1,
                externalinputstatus: 0,
                humidity: 32.96331787109375,
                temperature: 23.581716537475586,
                reedsensor: 1,
                reserved: 0,
                tamper: 0
            },
            main: {
                batterylevel: 100,
                batterystatus: 0,
                batterytype: 1,
                externalinputstatus: 0,
                humidity: 32.96331787109375,
                temperature: 23.581716537475586,
                reedsensor: 1,
                tamper: 0
            }
        }
        var converter = require('../../src/decoders/ascoel-cm868lrth')
        it(`should convert payload ${payload} to ${JSON.stringify(expected)}`, function () {
            expect(converter.decode({ payload: payload, port: 9 })).to.deep.eq(expected)
        })
    })
})
