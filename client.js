const net = require('net');

const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({ 
    IP,
    PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: MKK');
  });

  conn.on('data', (data) => {
    console.log("Server returning: ", data);
  });

  return conn;
}

module.exports = { connect };
