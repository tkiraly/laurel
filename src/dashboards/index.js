var r = require('./risinghf-rhf0s001')
var gw = require('./gateway')
var tbs100 = require('./turboes-tbs-100')

module.exports = [
    require('./adeunis-pulse'),
    require('./ascoel-th868lr'),
    require('./ascoel-co868lr'),
    require('./ascoel-cm868lrth'),
    r('4776e6ed0020004c', 'otthon'),
    r('4786e6ed003d001c', 'iroda'),
    tbs100('0128680000000004', 'mohanet'),
    tbs100('0128680000000005', 'iroda'),
    require('./globalsat-ls111'),
    require('./globalsat-ls112'),
    require('./globalsat-ls113'),
    gw('000000000806018e'),
    gw('0000000008060177'),
    gw('000000000806016e'),
    gw('000000000806017e'),
    gw('0000000008050210'),
    gw('000000000806019e'),
    gw('000000000806000f'),
    gw('00000000080600ae'),
    gw('0000000008060118'),
    gw('000000000805024d'),
    gw('00000000080502dd'),
    gw('0000000008060263')
]