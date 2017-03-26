const request = require('request')
const dashboards = require('../src/dashboards')

publish(dashboards, 0, publish)

function publish(objlist, index, next) {
    var obj = objlist[index]
    index++
    request({
        url: 'http://localhost:3000/api/dashboards/db',
        method: 'POST',
        json: { dashboard: obj, overwrite: true },
        auth:{
            bearer: 'eyJrIjoiOHQ2cjhsQk4ybTU2eVNONDBCR3d4VERyeHNBWkR0a0wiLCJuIjoiZ2ciLCJpZCI6MX0='
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
