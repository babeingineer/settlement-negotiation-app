import { Socket } from "socket.io-client";
import { SET_AMOUNT, SET_STATE, SET_STATUS } from "~/actions/types";
import store from "~/store";
import { notification } from "antd";

export function setupSocket(socket: Socket) {
  socket.on("state", (e) => {
    console.log(e);

    store.dispatch({
      type: SET_STATE,
      payload: e,
    });
  });

  socket.on("set-amount", (amount: number) => {
    console.log(amount);

    store.dispatch({
      type: SET_AMOUNT,
      payload: amount,
    });

    const pathname = window.location.pathname;
    if (pathname === "/proposer") {
      notification.success({
        message: "Success",
        description: "Settlement Amount Changed",
      });
    } else if (pathname === "/responder") {
      notification.warning({
        message: "Attention",
        description: "Party A suggested new settlement amount",
      });
    }
  });

  socket.on("set-status", (status: string) => {
    store.dispatch({
      type: SET_STATUS,
      payload: status,
    });

    if (status === "rejected") {
      const pathname = window.location.pathname;
      if (pathname === "/proposer") {
        notification.error({
          message: "Rejected",
          description: "Party B rejected your suggestion",
        });
      } else if (pathname === "/responder") {
        notification.success({
          message: "Success",
          description: "You rejected the request",
        });
      }
    }
  });
}
