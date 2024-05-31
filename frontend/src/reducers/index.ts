import { SET_AMOUNT, SET_STATE, SET_STATUS } from "~/actions/types";

const initialState = {
  amount: undefined,
  status: "waiting",
};

export default function (state = initialState, action: IAction) {
  switch (action.type) {
    case SET_AMOUNT:
      return {
        status: "waiting",
        amount: action.payload,
      };

    case SET_STATUS:
      return {
        ...state,
        status: action.payload,
      };

    case SET_STATE:
      return action.payload;
  }

  return state;
}
