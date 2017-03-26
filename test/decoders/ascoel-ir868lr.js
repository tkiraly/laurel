/* global describe
   global it */

var expect = require('chai').expect


describe('ascoel', function () {
    describe('cm868lr', function () {
        var payload = 'e4000b9d'
        var expected = {
            raw: {
                batterylevel: 100,
                batterystatus: 0,
                batterytype: 1,
                intrusionalarm: 0,
                opcnt: 2973,
                reserved: 0,
                tamper: 0
            },
            main: {
                batterylevel: 100,
                batterystatus: 0,
                batterytype: 1,
                intrusionalarm: 0,
                opcnt: 2973,
                reserved: 0,
                tamper: 0 
            }
        }
        var converter = require('../../src/decoders/ascoel-ir868lr')
        it(`should convert payload ${payload} to ${JSON.stringify(expected)}`, function () {
            expect(converter.decode({ payload: payload, port : 9 })).to.deep.eq(expected)
        })
    })
})
