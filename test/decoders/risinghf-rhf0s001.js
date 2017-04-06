/* global describe
   global it */

var expect = require('chai').expect


describe('risinghf', function () {
    describe('rhf0s001', function () {
        var payload = '016c689d30009029c8'
        var expected = {
            raw: {
                header: 1,
                temperature: 24.82582763671875,
                humidity: 70.66015625,
                period: 96,
                rssi: -36,
                snr: 10.25,
                battery: 3.5
            },
            main: {
                temperature: 24.82582763671875,
                humidity: 70.66015625,
                battery: 3.5
            }
        }
        var converter = require('../../src/decoders/risinghf-rhf0s001')
        it(`should convert payload ${payload} to ${JSON.stringify(expected)}`, function () {
            expect(converter.decode({ payload: payload })).to.deep.eq(expected)
        })
    })
})
