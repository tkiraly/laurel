/* global describe
   global it */

var expect = require('chai').expect


describe('globalsat', function () {
    describe('ls111', function () {
        var payload = '020ad809d70005'
        var expected = {
            raw: {
                device: {
                    humidity: 25.19,
                    temperature: 27.76,
                    codensity: 5
                },
                devicetype: 2
            },
            main: {
                humidity: 25.19,
                temperature: 27.76,
                codensity: 5
            }
        }
        var converter = require('../../src/decoders/globalsat-ls112')
        it(`should convert payload ${payload} to ${JSON.stringify(expected)}`, function () {
            expect(converter.decode({ payload: payload, port: 9 })).to.deep.eq(expected)
        })
    })
})
