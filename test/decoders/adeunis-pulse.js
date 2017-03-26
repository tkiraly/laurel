/* global describe
   global it */

var expect = require('chai').expect


describe('adeunis', function () {
    describe('pulse', function () {
        var payload = '027006f20d00000000000000'
        var expected = {
            raw: {
                code: {
                    channel1type: 6,
                    channel2type: 0,
                    configdone: 0,
                    configswitcherror: 0,
                    framecount: 7,
                    hwerror: 0,
                    index1: 3570,
                    index2: 0,
                    lowbaterror: 0

                },
                codeid: 0x02

            },
            main: {
                channel1type: 6,
                channel2type: 0,
                configdone: 0,
                configswitcherror: 0,
                framecount: 7,
                hwerror: 0,
                index1: 3570,
                index2: 0,
                lowbaterror: 0
            }
        }
        var converter = require('../../src/decoders/adeunis-pulse')
        it(`should convert payload ${payload} to ${JSON.stringify(expected)}`, function () {
            expect(converter.decode({ payload: payload, port: 9 })).to.deep.eq(expected)
        })
    })
})
