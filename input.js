// In it we will move our two recently created stdin related functions.
// We're specifically referring to the handleUserInput and setupInput functions.

// Export the setupInput function (as part of an object).
let connection;
const setupInput = function(conn) {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', () => {
    handleUserInput();
  });
  return stdin;

};

const handleUserInput = function() {
  const stdin = process.stdin;
  switch (key) {
    case '\u0003':
      process.exit();  
    case 'w':
      process.stdout.write(connection.write("Move: up"));
      break;
    case 'a':
      process.stdout.write(connection.write("Move: left"));
      break;
    case 's':
      process.stdout.write(connection.write("Move: down"));
      break;
    case 'd':
      process.stdout.write(connection.write("Move: right"));
      break;
    case 'm':
      process.stdout.write(connection.write("Say: How dare you!"));
      break;
    case 'x':
      process.stdout.write(connection.write("Say: Watch out!"));
      break;
  }
  return;
};
  

module.exports = { setupInput };
      // change movement keys into functions as constants and require them from constants.js 

// Create a function handleUserInput and register it as the "data" callback handler for stdin.