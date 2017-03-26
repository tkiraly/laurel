/* global describe
   global it */

var expect = require('chai').expect


describe('ascoel', function () {
    describe('cm868lr', function () {
        var payload = 'e303001c'
        var expected = {
            raw: {
                batterylevel: 99,
                batterystatus: 0,
                batterytype: 1,
                externalinputstatus: 0,
                opcnt: 28,
                reedsensor: 1,
                reserved: 0,
                tamper: 1
            },
            main: {
                batterylevel: 99,
                batterystatus: 0,
                batterytype: 1,
                externalinputstatus: 0,
                opcnt: 28,
                reedsensor: 1,
                tamper: 1
            }
        }
        var converter = require('../../src/decoders/ascoel-cm868lr')
        it(`should convert payload ${payload} to ${JSON.stringify(expected)}`, function () {
            expect(converter.decode({ payload: payload, port: 9 })).to.deep.eq(expected)
        })
    })
})
