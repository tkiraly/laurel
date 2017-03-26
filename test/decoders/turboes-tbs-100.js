/* global describe
   global it */

var expect = require('chai').expect


describe('ascoel', function () {
    describe('cm868lr', function () {
        var payload = 'a21017ffe1'
        var expected = {
            raw: {
                frame: {
                    faultalarm: 0,
                    firealarm: 0,
                    framecount: 1,
                    frameend: 225,
                    lbalarm: 0,
                    reserved: 255,
                    tempalarm: 0,
                    temperature: 23
                },
                frametype: 0xa2

            },
            main: {
                faultalarm: 0,
                firealarm: 0,
                framecount: 1,
                lbalarm: 0,
                tempalarm: 0,
                temperature: 23
            }
        }
        var converter = require('../../src/decoders/turboes-tbs-100')
        it(`should convert payload ${payload} to ${JSON.stringify(expected)}`, function () {
            expect(converter.decode({ payload: payload, port: 9 })).to.deep.eq(expected)
        })
    })
})
