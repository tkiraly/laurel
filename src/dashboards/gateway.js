var dash = {
  "annotations": {
    "list": []
  },
  "editable": true,
  "gnetId": null,
  "graphTooltip": 0,
  "hideControls": false,
  "id": null,
  "links": [],
  "rows": [
    {
      "collapse": false,
      "height": 375,
      "panels": [
        {
          "content": "# Gateway list\n\n\n| ID | name | location |        | ID | name | location |\n|---|---|---|---|---|---|---|\n|[000000000806018e](http://dash.iotnet.hu:3000/dashboard/db/gateway-000000000806018e)|fh1|napfürdő||[000000000806000f](http://dash.iotnet.hu:3000/dashboard/db/gateway-000000000806000f)|fh7|marina iii|\n|[0000000008060177](http://dash.iotnet.hu:3000/dashboard/db/gateway-0000000008060177)|fh2|mohanet||[00000000080600ae](http://dash.iotnet.hu:3000/dashboard/db/gateway-00000000080600ae)|fh8|magyar utca (sim)|\n|[000000000806016e](http://dash.iotnet.hu:3000/dashboard/db/gateway-000000000806016e)|fh3|zöldliget (fix ip)||[0000000008060118](http://dash.iotnet.hu:3000/dashboard/db/gateway-0000000008060118)|fh9|kelen irodaház|\n|[000000000806017e](http://dash.iotnet.hu:3000/dashboard/db/gateway-000000000806017e)|fh4|gozsdu||[000000000805024d](http://dash.iotnet.hu:3000/dashboard/db/gateway-000000000805024d)|fh10|cézár (fix ip)|\n|[0000000008050210](http://dash.iotnet.hu:3000/dashboard/db/gateway-0000000008050210)|fh5|rákóczi liget||[00000000080502dd](http://dash.iotnet.hu:3000/dashboard/db/gateway-00000000080502dd)|tracon1|dunakeszi (sim)|\n|[000000000806019e](http://dash.iotnet.hu:3000/dashboard/db/gateway-000000000806019e)|fh6|istván park||[0000000008060263](http://dash.iotnet.hu:3000/dashboard/db/gateway-0000000008060263)|demohu|népszínház|\n\n\n\n\n\n",
          "id": 3,
          "links": [],
          "mode": "markdown",
          "span": 7,
          "title": "",
          "type": "text"
        },
        {
          "aliasColors": {},
          "bars": false,
          "datasource": "influxdb",
          "fill": 1,
          "id": 1,
          "legend": {
            "avg": false,
            "current": false,
            "max": false,
            "min": false,
            "show": false,
            "total": false,
            "values": false
          },
          "lines": true,
          "linewidth": 1,
          "links": [],
          "nullPointMode": "null",
          "percentage": false,
          "pointradius": 5,
          "points": false,
          "renderer": "flot",
          "seriesOverrides": [],
          "span": 5,
          "stack": false,
          "steppedLine": false,
          "targets": [
            {
              "alias": "",
              "dsType": "influxdb",
              "groupBy": [],
              "measurement": "gateways",
              "policy": "default",
              "query": "SELECT ts - last_seen FROM \"gateways\" WHERE \"id\" = '00000000080502dd' AND $timeFilter",
              "rawQuery": true,
              "refId": "A",
              "resultFormat": "time_series",
              "select": [
                [
                  {
                    "params": [
                      "\"ts\"-\"last_seen\""
                    ],
                    "type": "field"
                  }
                ]
              ],
              "tags": [
                {
                  "key": "id",
                  "operator": "=~",
                  "value": "/^$gatewaylist$/"
                }
              ]
            }
          ],
          "thresholds": [],
          "timeFrom": null,
          "timeShift": null,
          "title": "Last Seen",
          "tooltip": {
            "shared": true,
            "sort": 0,
            "value_type": "individual"
          },
          "type": "graph",
          "xaxis": {
            "mode": "time",
            "name": null,
            "show": true,
            "values": []
          },
          "yaxes": [
            {
              "format": "s",
              "label": null,
              "logBase": 1,
              "max": null,
              "min": null,
              "show": true
            },
            {
              "format": "short",
              "label": null,
              "logBase": 1,
              "max": null,
              "min": null,
              "show": false
            }
          ]
        }
      ],
      "repeat": null,
      "repeatIteration": null,
      "repeatRowId": null,
      "showTitle": false,
      "title": "Dashboard Row",
      "titleSize": "h6"
    },
    {
      "collapse": false,
      "height": 250,
      "panels": [
        {
          "aliasColors": {},
          "bars": false,
          "datasource": null,
          "fill": 1,
          "id": 3,
          "legend": {
            "avg": false,
            "current": false,
            "max": false,
            "min": false,
            "show": false,
            "total": false,
            "values": false
          },
          "lines": true,
          "linewidth": 1,
          "links": [],
          "nullPointMode": "null",
          "percentage": false,
          "pointradius": 5,
          "points": false,
          "renderer": "flot",
          "seriesOverrides": [],
          "span": 12,
          "stack": false,
          "steppedLine": false,
          "targets": [
            {
              "dsType": "influxdb",
              "groupBy": [],
              "measurement": "gateways",
              "policy": "default",
              "query": "SELECT ts - last_seen FROM \"gateways\" WHERE \"id\" = '0000000008050210' AND $timeFilter",
              "rawQuery": false,
              "refId": "A",
              "resultFormat": "time_series",
              "select": [
                [
                  {
                    "params": [
                      "latency_ms"
                    ],
                    "type": "field"
                  }
                ]
              ],
              "tags": [
                {
                  "key": "id",
                  "operator": "=",
                  "value": "00000000080502dd"
                }
              ]
            }
          ],
          "thresholds": [],
          "timeFrom": null,
          "timeShift": null,
          "title": "Latency",
          "tooltip": {
            "shared": true,
            "sort": 0,
            "value_type": "individual"
          },
          "type": "graph",
          "xaxis": {
            "mode": "time",
            "name": null,
            "show": true,
            "values": []
          },
          "yaxes": [
            {
              "format": "ms",
              "label": null,
              "logBase": 1,
              "max": null,
              "min": null,
              "show": true
            },
            {
              "format": "short",
              "label": null,
              "logBase": 1,
              "max": null,
              "min": null,
              "show": false
            }
          ]
        }
      ],
      "repeat": null,
      "repeatIteration": null,
      "repeatRowId": null,
      "showTitle": false,
      "title": "Dashboard Row",
      "titleSize": "h6"
    }
  ],
  "schemaVersion": 14,
  "style": "dark",
  "tags": [
    "gateway"
  ],
  "templating": {
    "list": []
  },
  "time": {
    "from": "now-6h",
    "to": "now"
  },
  "timepicker": {
    "refresh_intervals": [
      "5s",
      "10s",
      "30s",
      "1m",
      "5m",
      "15m",
      "30m",
      "1h",
      "2h",
      "1d"
    ],
    "time_options": [
      "5m",
      "15m",
      "1h",
      "6h",
      "12h",
      "24h",
      "2d",
      "7d",
      "30d"
    ]
  },
  "timezone": "browser",
  "title": "gateway-",
  "version": 1
}

module.exports = function (gwid) {
  var d = JSON.parse(JSON.stringify(dash))
  d.rows[0].panels[1].targets[0].query = `SELECT ts - last_seen FROM \"gateways\" WHERE \"id\" = '${gwid}' AND $timeFilter`
  d.rows[1].panels[0].targets[0].tags[0].value = gwid
  d.title += gwid
  return d
}