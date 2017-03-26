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
      "height": 100,
      "panels": [
        {
          "cacheTimeout": null,
          "colorBackground": false,
          "colorValue": false,
          "colors": [
            "rgba(245, 54, 54, 1)",
            "rgba(237, 129, 40, 1)",
            "rgba(50, 172, 45,1)"
          ],
          "datasource": null,
          "decimals": 2,
          "format": "m3",
          "gauge": {
            "maxValue": 100,
            "minValue": 0,
            "show": false,
            "thresholdLabels": false,
            "thresholdMarkers": true
          },
          "id": 5,
          "interval": null,
          "links": [],
          "mappingType": 1,
          "mappingTypes": [
            {
              "name": "value to text",
              "value": 1
            },
            {
              "name": "range to text",
              "value": 2
            }
          ],
          "maxDataPoints": 100,
          "nullPointMode": "connected",
          "nullText": null,
          "postfix": "",
          "postfixFontSize": "50%",
          "prefix": "",
          "prefixFontSize": "50%",
          "rangeMaps": [
            {
              "from": "null",
              "text": "N/A",
              "to": "null"
            }
          ],
          "span": 3,
          "sparkline": {
            "fillColor": "rgba(31, 118, 189, 0.18)",
            "full": false,
            "lineColor": "rgb(31, 120, 193)",
            "show": false
          },
          "targets": [
            {
              "dsType": "influxdb",
              "groupBy": [],
              "measurement": "adeunis-pulse-1",
              "policy": "default",
              "query": "SELECT 5+(\"index1\"/1000) FROM \"adeunis-pulse-1\" WHERE \"deveui\" = '0018b20000000b0a' AND $timeFilter",
              "rawQuery": true,
              "refId": "A",
              "resultFormat": "time_series",
              "select": [
                [
                  {
                    "params": [
                      "index1"
                    ],
                    "type": "field"
                  }
                ]
              ],
              "tags": [
                {
                  "key": "deveui",
                  "operator": "=",
                  "value": "0018b20000000b0a"
                }
              ]
            }
          ],
          "thresholds": "",
          "title": "Meter State",
          "type": "singlestat",
          "valueFontSize": "80%",
          "valueMaps": [
            {
              "op": "=",
              "text": "N/A",
              "value": "null"
            }
          ],
          "valueName": "avg"
        },
        {
          "cacheTimeout": null,
          "colorBackground": false,
          "colorValue": true,
          "colors": [
            "rgba(10, 255, 0, 1)",
            "rgb(255, 119, 0)",
            "rgb(255, 0, 0)"
          ],
          "datasource": null,
          "format": "none",
          "gauge": {
            "maxValue": 100,
            "minValue": 0,
            "show": false,
            "thresholdLabels": false,
            "thresholdMarkers": true
          },
          "id": 3,
          "interval": null,
          "links": [],
          "mappingType": 1,
          "mappingTypes": [
            {
              "name": "value to text",
              "value": 1
            },
            {
              "name": "range to text",
              "value": 2
            }
          ],
          "maxDataPoints": 100,
          "nullPointMode": "connected",
          "nullText": null,
          "postfix": "",
          "postfixFontSize": "50%",
          "prefix": "",
          "prefixFontSize": "50%",
          "rangeMaps": [
            {
              "from": "null",
              "text": "N/A",
              "to": "null"
            }
          ],
          "span": 3,
          "sparkline": {
            "fillColor": "rgba(31, 118, 189, 0.18)",
            "full": false,
            "lineColor": "rgb(31, 120, 193)",
            "show": false
          },
          "targets": [
            {
              "alias": "",
              "dsType": "influxdb",
              "groupBy": [],
              "measurement": "adeunis-pulse-1",
              "policy": "default",
              "refId": "A",
              "resultFormat": "time_series",
              "select": [
                [
                  {
                    "params": [
                      "hwerror"
                    ],
                    "type": "field"
                  }
                ]
              ],
              "tags": [
                {
                  "key": "deveui",
                  "operator": "=",
                  "value": "0018b20000000b0a"
                }
              ]
            }
          ],
          "thresholds": "0.3,0.6",
          "title": "Hardware",
          "type": "singlestat",
          "valueFontSize": "80%",
          "valueMaps": [
            {
              "op": "=",
              "text": "ok",
              "value": "0"
            },
            {
              "op": "=",
              "text": "nem ok",
              "value": "1"
            }
          ],
          "valueName": "avg"
        },
        {
          "cacheTimeout": null,
          "colorBackground": false,
          "colorValue": true,
          "colors": [
            "rgba(10, 255, 0, 1)",
            "rgb(255, 119, 0)",
            "rgb(255, 0, 0)"
          ],
          "datasource": null,
          "format": "none",
          "gauge": {
            "maxValue": 100,
            "minValue": 0,
            "show": false,
            "thresholdLabels": false,
            "thresholdMarkers": true
          },
          "id": 4,
          "interval": null,
          "links": [],
          "mappingType": 1,
          "mappingTypes": [
            {
              "name": "value to text",
              "value": 1
            },
            {
              "name": "range to text",
              "value": 2
            }
          ],
          "maxDataPoints": 100,
          "nullPointMode": "connected",
          "nullText": null,
          "postfix": "",
          "postfixFontSize": "50%",
          "prefix": "",
          "prefixFontSize": "50%",
          "rangeMaps": [
            {
              "from": "null",
              "text": "N/A",
              "to": "null"
            }
          ],
          "span": 3,
          "sparkline": {
            "fillColor": "rgba(31, 118, 189, 0.18)",
            "full": false,
            "lineColor": "rgb(31, 120, 193)",
            "show": false
          },
          "targets": [
            {
              "alias": "",
              "dsType": "influxdb",
              "groupBy": [],
              "measurement": "adeunis-pulse-1",
              "policy": "default",
              "refId": "A",
              "resultFormat": "time_series",
              "select": [
                [
                  {
                    "params": [
                      "lowbaterror"
                    ],
                    "type": "field"
                  }
                ]
              ],
              "tags": [
                {
                  "key": "deveui",
                  "operator": "=",
                  "value": "0018b20000000b0a"
                }
              ]
            }
          ],
          "thresholds": "0.3,0.6",
          "title": "Battery",
          "type": "singlestat",
          "valueFontSize": "80%",
          "valueMaps": [
            {
              "op": "=",
              "text": "ok",
              "value": "0"
            },
            {
              "op": "=",
              "text": "depleted",
              "value": "1"
            }
          ],
          "valueName": "avg"
        },
        {
          "cacheTimeout": null,
          "colorBackground": false,
          "colorValue": true,
          "colors": [
            "rgba(10, 255, 0, 1)",
            "rgb(255, 119, 0)",
            "rgb(255, 0, 0)"
          ],
          "datasource": null,
          "format": "none",
          "gauge": {
            "maxValue": 100,
            "minValue": 0,
            "show": false,
            "thresholdLabels": false,
            "thresholdMarkers": true
          },
          "id": 2,
          "interval": null,
          "links": [],
          "mappingType": 1,
          "mappingTypes": [
            {
              "name": "value to text",
              "value": 1
            },
            {
              "name": "range to text",
              "value": 2
            }
          ],
          "maxDataPoints": 100,
          "nullPointMode": "connected",
          "nullText": null,
          "postfix": "",
          "postfixFontSize": "50%",
          "prefix": "",
          "prefixFontSize": "50%",
          "rangeMaps": [
            {
              "from": "null",
              "text": "N/A",
              "to": "null"
            }
          ],
          "span": 3,
          "sparkline": {
            "fillColor": "rgba(31, 118, 189, 0.18)",
            "full": false,
            "lineColor": "rgb(31, 120, 193)",
            "show": false
          },
          "targets": [
            {
              "alias": "",
              "dsType": "influxdb",
              "groupBy": [],
              "measurement": "adeunis-pulse-1",
              "policy": "default",
              "refId": "A",
              "resultFormat": "time_series",
              "select": [
                [
                  {
                    "params": [
                      "configswitcherror"
                    ],
                    "type": "field"
                  }
                ]
              ],
              "tags": [
                {
                  "key": "deveui",
                  "operator": "=",
                  "value": "0018b20000000b0a"
                }
              ]
            }
          ],
          "thresholds": "0.3,0.6",
          "title": "Config Switch",
          "type": "singlestat",
          "valueFontSize": "80%",
          "valueMaps": [
            {
              "op": "=",
              "text": "ok",
              "value": "0"
            },
            {
              "op": "=",
              "text": "nem ok",
              "value": "1"
            }
          ],
          "valueName": "avg"
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
  "tags": [],
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
  "title": "Adeunis Pulse",
  "version": 0
}

module.exports = dash