const makeInitState = require('./store');
let state = makeInitState();

function setupSocket(io) {
  io.on('connection', function (socket) {
    console.log(`socket ${socket.id} connected`);

    socket.on("state", () => {
      socket.emit("state", state);
    });

    socket.on("set-amount", (amount) => {
      state.amount = amount;
      state.status = "waiting";
      io.emit("set-amount", amount);
    });

    socket.on("set-status", (status) => {
      state.status = status;
      io.emit("set-status", status);
    })

    socket.on("initialize", () => {
      state = makeInitState();
      io.emit("state", state);
    })

    // upon disconnection
    socket.on("disconnect", (reason) => {
      console.log(`socket ${socket.id} disconnected due to ${reason}`);
    });
  })
}

module.exports = setupSocket;