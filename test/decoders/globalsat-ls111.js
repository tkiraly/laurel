/* global describe
   global it */

var expect = require('chai').expect


describe('globalsat', function () {
    describe('ls111', function () {
        var payload = '010ad809d70005'
        var expected = {
            raw: {
                device: {
                    humidity: 25.19,
                    temperature: 27.76,
                    co2density: 5
                },
                devicetype: 1
            },
            main: {
                humidity: 25.19,
                temperature: 27.76,
                co2density: 5
            }
        }
        var converter = require('../../src/decoders/globalsat-ls111')
        it(`should convert payload ${payload} to ${JSON.stringify(expected)}`, function () {
            expect(converter.decode({ payload: payload, port: 9 })).to.deep.eq(expected)
        })
    })
})
