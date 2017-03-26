/* global describe
   global it */

var expect = require('chai').expect


describe('ascoel', function () {
    describe('co868lr', function () {
        var payload = 'e4eef3c941200cd541031b'
        var expected = {
            raw: {
                batterylevel: 100,
                batterytype: 1,
                co2value: 795,
                humidity: 26.63092041015625,
                temperature: 25.24410629272461

            },
            main: {
                batterylevel: 100,
                batterytype: 1,
                co2value: 795,
                humidity: 26.63092041015625,
                temperature: 25.24410629272461
            }
        }
        var converter = require('../../src/decoders/ascoel-co868lr')
        it(`should convert payload ${payload} to ${JSON.stringify(expected)}`, function () {
            expect(converter.decode({ payload: payload, port: 9 })).to.deep.eq(expected)
        })
    })
})
