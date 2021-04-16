export const fetchItem = (payload) => (dispatch) => {
  dispatch({ type: "item/fetch", payload });
};
