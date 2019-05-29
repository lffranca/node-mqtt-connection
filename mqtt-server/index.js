var mqtt = require('mqtt')
var client  = mqtt.connect({
  host: "192.168.15.6",
  port: 1883,
  protocol: "mqtt",
  clientId: "SERVER_NODE_API"
})

client.on('connect', function () {
  client.subscribe('tag', (err) => {
    if (!err) {
      client.publish('presence', 'Hello mqtt')
    }
  })
})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log((new Date).toString(), topic, message.toString())
  // client.end()
})
