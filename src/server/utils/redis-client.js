const redis = require("redis");
const client = redis.createClient();
const bluebird = require("bluebird");
client.get = bluebird.promisify(client.get);
client.set  = bluebird.promisify(client.set)
client.on("error", function(error) {
  console.error(error);
});
 module.exports = client;