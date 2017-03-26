/* global describe
   global it */

var expect = require('chai').expect


describe('ascoel', function () {
    describe('co868lr', function () {
        var payload = 'e42d31b841a06aa641'
        var expected = {
            raw: {
                batterylevel: 100,
                batterytype: 1,
                humidity: 20.80206298828125,
                temperature: 23.024011611938477
            },
            main: {
                batterylevel: 100,
                batterytype: 1,
                humidity: 20.80206298828125,
                temperature: 23.024011611938477
            }
        }
        var converter = require('../../src/decoders/ascoel-th868lr')
        it(`should convert payload ${payload} to ${JSON.stringify(expected)}`, function () {
            expect(converter.decode({ payload: payload, port: 9 })).to.deep.eq(expected)
        })
    })
})
