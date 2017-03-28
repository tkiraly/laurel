const request = require('request')
const dashboards = require('../src/dashboards')
const config = require('config')

publish(dashboards, 0, publish)

function publish(objlist, index, next) {
    var obj = objlist[index]
    index++
    request({
        url: config.get('dash-gen.url'),
        method: 'POST',
        json: { dashboard: obj, overwrite: true },
        auth:{
            bearer: config.get('dash-gen.token')
        }
    }, function createResponseHandler(createErr, createResp) {
        if (createErr) {
            console.log('Unable to publish dashboard: ' + createErr)
        } else if ([200, 201].indexOf(createResp.statusCode) === -1) {
            console.log('Unable to publish dashboard ' + obj.title)
            console.log(createResp.body)
            console.log('Got statusCode ' + createResp.statusCode)
        } else {
            console.log('Published the dashboard ' + obj.title)
        }
        if (dashboards.length > index) {
            next(objlist, index, next)
        }
    })
}
