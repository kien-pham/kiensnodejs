// to run production mode, enter command
// ENV NODE_ENV=production node index.js

require('babel-core/register')
exports = module.exports = require('./src/server')