const connection = require('./connection.js');

module.exports = () => {
  io.on('connection', connection);
}
