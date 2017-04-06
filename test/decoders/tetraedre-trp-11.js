/* global describe
   global it */

var expect = require('chai').expect


describe('tetraedre', function () {
    describe('trp-11', function () {
        var payload = '018058e6546e82042195e9c8050fb6ae0e00c80515a7060c00c8052d00000000'
        var expected = {
            raw: {
                timestamp: 1491489902,
                serialnumber: 69309929,
                value1type: 0x0f,
                value1: 9622.3,
                value2type: 0x15,
                value2: 78813.5,
                value3type: 0x2d,
                value3: 0,
            },
            main: {
                value1: 9622.3,
                value2: 78813.5,
                value3: 0,
            }
        }
        var converter = require('../../src/decoders/tetraedre-trp-11')
        it(`should convert payload ${payload} to ${JSON.stringify(expected)}`, function () {
            expect(converter.decode({ payload: payload })).to.deep.eq(expected)
        })
    })
})
