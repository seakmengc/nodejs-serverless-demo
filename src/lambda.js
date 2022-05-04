const app = require('./index');
const { createServer, proxy } = require('aws-serverless-express');

const server = createServer(app);

module.exports.handler = (event, context) => {
  proxy(server, event, context);
};
