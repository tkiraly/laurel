/* global describe
   global it */

var expect = require('chai').expect


describe('NKE Watteco', function () {
    describe('temphumlum', function () {
        describe('temperature cluster', function () {
            describe('reporting attributes', function () {
                var payload = '7ef700f354e039110a0402000029094d'
                var expected = {
                    raw: {
                        'CommandID': 0x0a,
                        'flag': 0x11,
                        'Command': {
                            'ClusterID': 0x0402,
                            'Cluster': {
                                'AttributeID': 0,
                                'Attributetype': 0x29,
                                'data': {
                                    'temperature': 23.81
                                }
                            }
                        }

                    },
                    main: {
                        'temperature': 23.81
                    }
                }
                var converter = require('../../src/decoders/nkewatteco-temphumlum')
                it(`should convert payload ${payload} to ${JSON.stringify(expected)}`, function () {
                    expect(converter.decode({ payload: payload })).to.deep.eq(expected)
                })
            })
        })
        describe('humidity cluster', function () {
            describe('reporting attributes', function () {
                var payload = '7ef700f354b134110a04050000210b84'
                var expected = {
                    raw: {
                        'CommandID': 0x0a,
                        'flag': 0x11,
                        'Command': {
                            'ClusterID': 0x0405,
                            'Cluster': {
                                'AttributeID': 0,
                                'Attributetype': 0x21,
                                'data': {
                                    'humidity': 29.48
                                }
                            }
                        }
                    },
                    main: {
                        'humidity': 29.48
                    }
                }
                var converter = require('../../src/decoders/nkewatteco-temphumlum')
                it(`should convert payload ${payload} to ${JSON.stringify(expected)}`, function () {
                    expect(converter.decode({ payload: payload })).to.deep.eq(expected)
                })
            })
        })
    })
})
