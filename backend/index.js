const { Server } = require('socket.io');
const setupSocket = require('./setupSocket');

const io = new Server({ cors: "*" });
const PORT = 4000;

setupSocket(io);
io.listen(PORT);

console.log("Socket server listening on port:", PORT);