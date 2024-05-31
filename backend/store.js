const initState = {
  amount: undefined,
  status: "waiting",
}

function makeInitState(state = initState) {
  return {
    ...state
  }
}

module.exports = makeInitState;