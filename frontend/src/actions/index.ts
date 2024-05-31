import socket from "~/socket";

export const proposeAmount = (amount: number) => {
  socket.emit("set-amount", amount);
};

export const getServerState = () => {
  socket.emit("state");
};

export const approveAmount = () => {
  socket.emit("set-status", "approved");
};

export const rejectAmount = () => {
  socket.emit("set-status", "rejected");
};

export const initializeState = () => {
  socket.emit("initialize");
};
