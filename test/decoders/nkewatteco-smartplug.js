/* global describe
   global it */

var expect = require('chai').expect


describe('NKE Watteco', function () {
    describe('SMARTPLUG', function () {
        describe('simple metering cluster', function () {
            describe('reporting attributes response', function () {
                var payload = '110a00520000410c00074d0000003026000a0000'
                var expected = {
                    raw: {
                        'CommandID': 0x0a,
                        'flag': 0x11,
                        'Command': {
                            'ClusterID': 0x0052,
                            'Cluster': {
                                'AttributeID': 0,
                                'Attributetype': 0x41,
                                'data': {
                                    'datalength': 12,
                                    'samples': 12326,
                                    'var': 0,
                                    'varh': 0,
                                    'w': 10,
                                    'wh': 1869
                                }
                            }
                        }

                    },
                    main: {
                        'datalength': 12,
                        'samples': 12326,
                        'var': 0,
                        'varh': 0,
                        'w': 10,
                        'wh': 1869
                    }
                }
                var converter = require('../../src/decoders/nkewatteco-smartplug')
                it(`should convert payload ${payload} to ${JSON.stringify(expected)}`, function () {
                    expect(converter.decode({ payload: payload })).to.deep.eq(expected)
                })
            })
        })
    })
})
